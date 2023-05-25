const mongoose = require('mongoose');

const EnglishResultSchema = new mongoose.Schema({
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

const EnglishResult = mongoose.model('EnglishResult', EnglishResultSchema);

module.exports = EnglishResult;
