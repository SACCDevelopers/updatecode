const mongoose = require('mongoose');

const UETResultSchema = new mongoose.Schema({ 
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

const UETResult = mongoose.model('UETResult', UETResultSchema);

module.exports = UETResult;
