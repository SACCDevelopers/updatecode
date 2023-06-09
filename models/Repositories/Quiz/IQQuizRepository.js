const obj = require('../../ModelSchema'); 


const GetQuestions = (req, res) => {
  obj.IQQuestion.aggregate([
    { $sample: { size: 5 } }
  ])
    .then(questions => {
      res.json(questions);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching questions');
    });
};



const PostResult = async (req, res) => {
    const result = new obj.IQResult({
      email:req.body.email,
      chapter: req.body.chapter,
      totalMarks: req.body.totalMarks,
      obtainedMarks: req.body.obtainedMarks,
      timeTaken: req.body.timeTaken,
      dateTime:req.body.dateTime
    });
  console.log(result);
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