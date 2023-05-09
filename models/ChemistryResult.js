const mongoose = require('mongoose');

const ChemistryResultSchema = new mongoose.Schema({
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

const ChemistryResult = mongoose.model('ChemistryResult', ChemistryResultSchema);

module.exports = ChemistryResult;
