const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionNO: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, required: true },
  chapter: { type: String, required: true }
});

const universityQuestionSchema = new mongoose.Schema({
  questionNO: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, required: true },
  subject: { type: String, required: true }
});

const QuizResultSchema = new mongoose.Schema({
  chapter: {
    type: String,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  obtainedMarks: {
    type: Number,
    required: true
  },
  timeTaken: {
    type: Number,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  }
});


const UniResultSchema = new mongoose.Schema({
  totalMarks: {
    type: Number,
    required: true
  },
  obtainedMarks: {
    type: Number,
    required: true
  },
  timeTaken: {
    type: Number,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  }
});


//Defining Schema for Student
const studentSchema = new mongoose.Schema(
  {

    FirstName: {
      type: String,

    },

    LastName: {
      type: String,

    },

    Email: {
      type: String,

    },

    PhoneNo: {
      type: String,

    },

    Password: {
      type: String,

    },

    ProfilePic: {
      type: String,

    },

    Address: {
      type: String,

    },


    Gender: {
      type: String,

    },


    Status: {
      type: Boolean,

    }, 

    Religion: {
      type: String,

    },

    ObtainedMatricMarks: {
      type: Number
    },
    TotalMatricMarks:
    {
      type: Number
    },

    ObtainedInterMarks: {
      type: Number
    },
    TotalInterMarks:
    {
      type: Number
    },

    FatherIncome:
    {
      type: Number
    },
    CounsellorName:
    {
      type: String
    }


  });


//Student 
const student = mongoose.model('student', studentSchema);



//Subject Questions
const PhysicsQuestion = mongoose.model('PhysicsQuestion', questionSchema);
const EnglishQuestion = mongoose.model('EnglishQuestion', questionSchema);
const ChemistryQuestion = mongoose.model('ChemistryQuestion', questionSchema);
const MathsQuestion = mongoose.model('MathsQuestion', questionSchema);
const ComputerQuestion = mongoose.model('ComputerQuestion', questionSchema);
const BasicMathsQuestion = mongoose.model('BasicMathsQuestion', questionSchema);
const IQQuestion = mongoose.model('IQQuestion', questionSchema);

//Results of subjects
const PhysicsResult = mongoose.model('PhysicsResult', QuizResultSchema);
const ChemistryResult = mongoose.model('ChemistryResult', QuizResultSchema);
const MathsResult = mongoose.model('MathsResult', QuizResultSchema);
const BasicMathsResult = mongoose.model('BasicMathsResult', QuizResultSchema);
const ComputerResult = mongoose.model('ComputerResult', QuizResultSchema);
const IQResult = mongoose.model('IQResult', QuizResultSchema);
const EnglishResult = mongoose.model('EnglishResult', QuizResultSchema);

//Uni Questions
const EcatQuestion = mongoose.model('EcatQuestion', universityQuestionSchema);
const FcitQuestion = mongoose.model('FcitQuestion', universityQuestionSchema);
const FastQuestion = mongoose.model('FastQuestion', universityQuestionSchema);
const NtsQuestion = mongoose.model('NtsQuestion', universityQuestionSchema);
const ComsatsQuestion = mongoose.model('ComsatsQuestion', universityQuestionSchema);

//Uni Result
const EcatResult = mongoose.model('EcatResult', UniResultSchema);
const NtsResult = mongoose.model('NtsResult', UniResultSchema);
const ComsatsResult = mongoose.model('ComsatsResult', UniResultSchema);
const FastResult = mongoose.model('FastResult', UniResultSchema);
const FcitResult = mongoose.model('FcitResult', UniResultSchema);

module.exports = {
  ChemistryQuestion,
  MathsQuestion,
  ComputerQuestion,
  BasicMathsQuestion,
  PhysicsQuestion,
  IQQuestion,
  EnglishQuestion,
  EcatQuestion,
  FcitQuestion,
  FastQuestion,
  NtsQuestion,
  ComsatsQuestion,
  ChemistryResult,
  MathsResult,
  BasicMathsResult,
  ComputerResult,
  IQResult,
  EnglishResult,
  PhysicsResult,
  EcatResult,
  FastResult,
  FcitResult,
  NtsResult,
  ComsatsResult, 
  student
};
