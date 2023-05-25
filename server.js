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
const ChemistryGraph = require("./Controllers/Graphs/ChemistryGraphsController.js");
// const MathsGraph = require("./Controllers/MathsGraphsController.js");
// const ComputerGraph=require("./Controllers/Graphs/ComputerGraphsController.js"); 
// const EnglishGraph=require("./Controllers/Graphs/EnglishGraphsController.js"); 
// const BasicMathsGraph=require("./Controllers/Graphs/BasicMathsGraphsController.js"); 
// const IQGraph=require("./Controllers/Graphs/IQGraphsController.js"); 
// const ECATGraph=require("./Controllers/Graphs/ECATGraphsController.js"); 
// const NTSGraph=require("./Controllers/Graphs/NTSGraphsController.js"); 
// const ComsatsGraph=require("./Controllers/Graphs/ComsatsGraphsController.js"); 
// const FASTGraph=require("./Controllers/Graphs/FASTGraphsController.js"); 
// const FCITGraph=require("./Controllers/Graphs/FCITGraphsController.js"); 

mongoose.connect('mongodb://127.0.0.1:27017/quiz')
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error(error);
  });
 

app.use('/api/ChemistryQuiz',chemistry); 
app.use('/api/PhysicsQuiz',physics); 
app.use('/api/UETQuiz',uet); 
app.use('/api/PhysicsGraphs',physicsGraph); 
app.use('/api/ChemistryGraphs',ChemistryGraph); 
// app.use('/api/MathsGraphs',MathsGraph); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
