const Question = require('../../UetQuestions');
const Result=require('../../UETResult');

const GetQuestions = (req, res) => {
  const subjects = ['Chemistry', 'Physics', 'English'];
  const questions = [];

  const fetchQuestions = (subject, sampleSize) => {
    Question.aggregate([
      { $match: { subject: subject } },
      { $sample: { size: sampleSize } }
    ])
      .then(result => {
        questions.push(...result);
        if (questions.length < 100 && subjects.length > 0) {
          const nextSubject = subjects.shift();
          const remainingSize = nextSubject === 'English' ? 10 : 30;
          fetchQuestions(nextSubject, remainingSize);
        } else {
          res.json(questions);
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error fetching questions');
      });
  };

  fetchQuestions(subjects.shift(), 30);
};








const PostResult = async (req, res) => {
    const result = new Result({
      chapter: req.body.chapter,
      totalMarks: req.body.totalMarks,
      obtainedMarks: req.body.obtainedMarks,
      timeTaken: req.body.timeTaken,
      dateTime:req.body.dateTime
    });
  
    result.save()
      .then(() => {
        res.status(201).json({
          message: 'Result saved successfully!'
        });
      })
      .catch((error) => {
        console.log('Error saving result: ' + error.message);
        res.status(500).json({
          message: 'Error saving result!'
        });
      });
  };

module.exports={
    GetQuestions,PostResult
}