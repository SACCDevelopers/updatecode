const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({ 
  questionNo: { type: Number, required: true },
  questionText: { type: String, required: true },
  optionA: { type: String, required: true },
  optionB: { type: String, required: true },
  optionC: { type: String, required: true },
  optionD: { type: String, required: true },
  correctOption: { type: String, required: true },
  chapter: { type: String, required: true }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
