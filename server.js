const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const obj = require("./models/ModelSchema");
const cookieParser = require("cookie-parser"); 

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

app.get('/api/counselors', async (req, res) => {
  try {
    const counselors = await obj.counsellor.find({ Availability: true });
    res.json(counselors);
  } catch (error) {
    console.error('Error retrieving counselors:', error);
    res.status(500).json({ error: 'An error occurred while retrieving counselors' });
  }
});

// POST /api/requests
app.post('/api/requests', async (req, res) => {
  try {
    const requestData = req.body;

    // Create a new request using the requestData
    const newRequest = new obj.Request(requestData);

    // Save the new request to the database
    await newRequest.save();

    res.status(201).json({ message: 'Request created successfully', request: newRequest });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'An error occurred while creating the request' });
  }
});


app.get('/api/requestsOfStudents/:counselorName', async (req, res) => {
  try {
    const counselorName = req.params.counselorName;

    // Group the requests by counselorName and retrieve distinct studentNames
    const distinctStudentNames = await obj.Request.aggregate([
      { $match: { counselorName } },
      { $group: { _id: "$counselorName", studentNames: { $addToSet: "$studentName" } } },
      { $project: { _id: 0, studentNames: 1 } }
    ]);
    // Extract the studentNames array from the aggregation result
    const studentNamesSet = new Set(distinctStudentNames[0]?.studentNames || []);
    const studentNames = Array.from(studentNamesSet);
    // Retrieve the student information for the distinct student names
    const students = await obj.student.find({ FirstName: { $in: studentNames } });

    res.json(students);
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'An error occurred while fetching student data' });
  }
});





// API endpoint for BasicChemistryGraphs
app.get('/api/ChemistryGraphs/Progress', async (req, res) => {
  try {
    const results = await obj.ChemistryResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// API endpoint for BasicPhysicsGraphs
app.get('/api/PhysicsGraphs/Progress', async (req, res) => {
  try {
    const results = await obj.PhysicsResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// API endpoint for BasicMathsGraphs
app.get('/api/MathsGraphs/Pogress', async (req, res) => {
  try {
    const results = await obj.MathsResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/IQGraphs/Progress', async (req, res) => {
  try {
    const results = await obj.IQResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
app.get('/api/ComputerGraphs/Progress', async (req, res) => {
  try {
    const results = await obj.ComputerResult.find();
    const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
    const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
    const percentage = (obtainedMarks / totalMarks) * 100;
    res.json({ totalMarks, obtainedMarks, percentage });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


// app.post("/api/student/signup", async (req, res) => {
//   const {
//     FirstName,
//     LastName,
//     Email,
//     PhoneNo,
//     Password,
//     Address,
//     ObtainedMatricMarks,
//     TotalMatricMarks,
//     ObtainedInterMarks,
//     TotalInterMarks,
//     FatherIncome,
//   } = req.body;

//   try {
//     const newStudent = new obj.student({
//       FirstName,
//       LastName,
//       Email,
//       PhoneNo,
//       Password,
//       Address,
//       ObtainedMatricMarks,
//       TotalMatricMarks,
//       ObtainedInterMarks,
//       TotalInterMarks,
//       FatherIncome,
//     });

//     await newStudent.save();
//     res.cookie("firstName", FirstName);
//     res.cookie("password", Password); 
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "An error occurred" });
//   }
// });





//Adding Student

app.post("/api/student/signup", async (req, res) => {

  try{

    const student=new obj.student(req.body);
    
    await student.save();
    res.status(200).json({message:"Student Added Successfully"});
  }

  catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//adding new counsellor
app.post("/api/counsellor/signup", async (req, res) => {

  try{
console.log(req.body);
    const counsellor=new obj.counsellor(req.body);
    
    await counsellor.save();
    res.status(200).json({message:"Counsellor Added Successfully"});
  }

  catch (err) {
    res.status(400).json({ error: err.message });
  }
});



//Student Login 

// app.post("/api/student/login", async (req, res) => {
//   try {
//     const student = await obj.student.find({Email:req.body.Email,Password:req.body.Password});
//     if(student.length !=0 && student[0].Status==true)
//     {
//       res.status(200).json({result:true});
  
//     }
//     else if(student.length !=0 && student[0].Status==false)
//     {
//       res.status(200).json({result:false});
  
//     }

   
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });




//Counsellor Login/Verify

// app.post("/api/counsellor/login", async (req, res) => {
//   try {
//     console.log(req.body);
//     const counsellor = await obj.counsellor.find({Email:req.body.Email,Password:req.body.Password});
   
//     if(counsellor.length !=0 && counsellor[0].Status==true)
//     {
//       console.log(req.body);
//       res.status(200).json({result:true});
  
//     }
//     else if(counsellor.length !=0 && counsellor[0].Status==false){
//       res.status(200).json({result:false});
//     }
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });



app.post('/api/student/login', async (req, res) => {
  

  try {
    // Find the user in the database
    const student = await obj.student.findOne({ Email: req.body.Email, Password: req.body.Password }).exec();

    if (student) {
      // Check if the status is true
      if (student.Status==true) {
        // Successful login
   
        res.status(200).json({ result: true });
      } else {
        // Status is false
      
        res.status(200).json({ result: false });
      }
    } else {
      // student not found
     
      res.status(200).json({ result: false });
    }
  } catch (error) {
    // Error occurred
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Endpoint for counselor login
// app.post('/api/counsellor/login', async (req, res) => {

//   try {
//     // Find the counselor in the database
//     const coun = await obj.counsellor.findOne({ Email: req.body.Email, Password: req.body.Password }).exec();
//     console.log(coun+ "outs");
//     if (coun) {
//       // Check if the status is true
//       if (coun.Status==true) {
//         // Successful login
//         console.log(coun+ "is");
//         res.status(200).json({ result: true });
//       } else {
//         // Status is false
//         console.log("Sasa");
//         res.status(200).json({ result: false });
//       }
//     } else {
//       // Counselor not found
//       res.status(200).json({ result: false });
//     }
//   } catch (error) {
//     // Error occurred
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });



app.post('/api/counsellor/login', async (req, res) => {
  

  try {
    // Find the user in the database
    const counselor = await obj.counsellor.findOne({ Email: req.body.Email, Password: req.body.Password }).exec();

    if (counselor) {
      console.log(counselor);
      // Check if the status is true
      if (counselor.Status == 'true') {
        // Successful login
        console.log("if");
        res.status(200).json({ result: true });
      } else {
        // Status is false
        console.log("else");
        res.status(200).json({ result: false });
      }
    } else {
      // counsellor not found
      console.log("not");
      res.status(200).json({ result: false });
    }
  } catch (error) {
    // Error occurred
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


//Getting links
app.get('/api/link', async (req, res) => {
  try {
    console.log(req.body.Title)
    const links = await obj.link.findOne({ Title: req.body.Title});
  
    res.status(200).json({ result: links.Link });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retreiving link');
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
