const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const obj = require("./models/ModelSchema");
const app = express();

app.use(cors());
app.use(bodyParser.json());


const chemistry = require("./Controllers/Quiz/ChemistryQuizController.js");
const physics = require("./Controllers/Quiz/PhysicsQuizController.js");
const english = require("./Controllers/Quiz/EnglishQuizController.js");
const maths = require("./Controllers/Quiz/MathsQuizController.js");
const computer = require("./Controllers/Quiz/ComputerQuizController.js");
const iq = require("./Controllers/Quiz/IQQuizController.js");
const basicMaths = require("./Controllers/Quiz/BasicMathsQuizController.js");
const ecat = require("./Controllers/Quiz/ECATQuizController.js");
// const fcit=require("./Controllers/Quiz/FCITQuizController.js"); 
// const nts=require("./Controllers/Quiz/NTSQuizController.js"); 
// const comsats=require("./Controllers/Quiz/ComsatsQuizController.js"); 
// const fast=require("./Controllers/Quiz/FASTQuizContoller.js"); 



const physicsGraph = require("./Controllers/Graphs/PhysicsGraphsController.js");
const ChemistryGraph = require("./Controllers/Graphs/ChemistryGraphsController.js");
const MathsGraph = require("./Controllers/Graphs/MathsGraphsController.js");
const ComputerGraph = require("./Controllers/Graphs/ComputerGraphsController.js");
const EnglishGraph = require("./Controllers/Graphs/EnglishGraphsController.js");
const BasicMathsGraph = require("./Controllers/Graphs/BasicMathsGraphsController.js");
const IQGraph = require("./Controllers/Graphs/IQGraphsController.js");
const ECATGraph = require("./Controllers/Graphs/ECATGraphsController.js");
const NTSGraph = require("./Controllers/Graphs/NTSGraphsController.js");
const ComsatsGraph = require("./Controllers/Graphs/ComsatsGraphsController.js");
const FASTGraph = require("./Controllers/Graphs/FASTGraphsController.js");
const FCITGraph = require("./Controllers/Graphs/FCITGraphsController.js");

mongoose.connect('mongodb://127.0.0.1:27017/quiz')
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error(error);
  });



app.get('/api/students', async (req, res) => {
  try {
    const students = await obj.student.find();
    res.json(students);
  } catch (error) {
    console.error('Error retrieving students:', error);
    res.status(500).json({ error: 'An error occurred while retrieving students' });
  }
});





//Quiz APIS
app.use('/api/ChemistryQuiz', chemistry);
app.use('/api/EnglishQuiz', english);
app.use('/api/PhysicsQuiz', physics);
app.use('/api/BasicMathsQuiz', basicMaths);
app.use('/api/MathsQuiz', maths);
app.use('/api/IQQuiz', iq);
app.use('/api/ComputerQuiz', computer);
app.use('/api/ECATQuiz', ecat);
// app.use('/api/FASTQuiz',fast); 
// app.use('/api/FCITQuiz',fcit); 
// app.use('/api/ComsatsQuiz',comsats); 
// app.use('/api/NTSQuiz',nts); 

//Graph APIS
app.use('/api/ECATGraphs', ECATGraph);
app.use('/api/PhysicsGraphs', physicsGraph);
app.use('/api/ChemistryGraphs', ChemistryGraph);
app.use('/api/MathsGraphs', MathsGraph);
app.use('/api/EnglishGraphs', EnglishGraph);
app.use('/api/basicMathsGraphs', BasicMathsGraph);
app.use('/api/FCITGraphs', FCITGraph);
app.use('/api/ComputerGraphs', ComputerGraph);
app.use('/api/FASTGraphs', FASTGraph);
app.use('/api/NTSGraphs', NTSGraph);
app.use('/api/ComsatsGraphs', ComsatsGraph);
app.use('/api/IQGraphs', IQGraph);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
