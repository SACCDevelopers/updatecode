const mongoose = require('mongoose');

const uetQuestionSchema = new mongoose.Schema({
  questionNO: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, required: true },
  subject: { type: String, required: true }
});

const UetQuestion = mongoose.model('UetQuestion', uetQuestionSchema);

module.exports = UetQuestion;