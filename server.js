const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// require('./models/Question');
// require('./models/ChemistryResult');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const chemistry=require("./Controllers/Quiz/ChemistryQuizController"); 
const physics=require("./Controllers/Quiz/PhysicsQuizController"); 
const uet=require("./Controllers/Quiz/UETQuizController.js"); 
const physicsGraph=require("./Controllers/Graphs/PhysicsGraphsController.js"); 

mongoose.connect('mongodb://127.0.0.1:27017/quiz')
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error(error);
  });
// app.get('/api/questions', (req, res) => {
//   const chapter = req.query.chapter || 'Reaction Kinetics';
//   Question.aggregate([
//     { $match: { chapter: chapter } },
//     { $sample: { size: 3 } }
//   ]).then(questions => {
//     res.json(questions);
//   }).catch(error => {
//     console.error(error);
//     res.status(500).send('Error fetching questions');
//   });
// });

 
// app.post('/api/results', (req, res) => {
//   const result = new ChemistryResult({
//     chapter: req.body.chapter,
//     totalMarks: req.body.totalMarks,
//     obtainedMarks: req.body.obtainedMarks,
//     timeTaken: req.body.timeTaken,
//     dateTime:req.body.dateTime
//   });

//   result.save()
//     .then(() => {
//       res.status(201).json({
//         message: 'Result saved successfully!'
//       });
//     })
//     .catch((error) => {
//       console.log('Error saving result: ' + error.message);
//       res.status(500).json({
//         message: 'Error saving result!'
//       });
//     });
// });






// app.post('/api/submit-answers', (req, res) => {
//   const answers = req.body;
//   Question.find()
//     .then(questions => {
//       const score = questions.reduce((total, question) => {
//         const answer = answers[question._id];
//         if (answer && answer === question.correctOption) {
//           return total + 1;
//         } else {
//           return total;
//         }
//       }, 0);
//       res.json({ score });
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).send('Error submitting answers');
//     });
// });

const ChemistryResult = require('./models/ChemistryResult.js');
// const PhysicsResult = require('./models/PhysicsResult.js');
const UETResult = require('./models/UETResult.js');

//Getting chemistry results for graph plot
app.get('/results/chemistry', async (req, res) => {
  try {
    const results = await ChemistryResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



//Getting UET results for graph plot
app.get('/results/uet', async (req, res) => {
  try {
    const results = await UETResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// app.get('/results/physics', async (req, res) => {
//   try {
//     const results = await PhysicsResult.find();
//     const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
//     const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
//     const percentage = (obtainedMarks / totalMarks) * 100;
//     res.json({ totalMarks, obtainedMarks, percentage });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });

 





app.use('/api/ChemistryQuiz',chemistry); 
app.use('/api/PhysicsQuiz',physics); 
app.use('/api/UETQuiz',uet); 
app.use('/api/PhysicsGraphs',physicsGraph); 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
