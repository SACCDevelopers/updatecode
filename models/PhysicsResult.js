const mongoose = require('mongoose');

const PhysicsResultSchema = new mongoose.Schema({
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

const PhysicsResult = mongoose.model('PhysicsResult', PhysicsResultSchema);

module.exports = PhysicsResult;
