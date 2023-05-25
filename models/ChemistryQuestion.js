const mongoose = require('mongoose');

const chemistryQuestionSchema = new mongoose.Schema({ 
  questionNO: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, required: true },
  chapter: { type: String, required: true }
});

const ChemistryQuestion = mongoose.model('ChemistryQuestion', chemistryQuestionSchema);

module.exports = ChemistryQuestion;
