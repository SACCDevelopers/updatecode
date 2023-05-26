const obj = require('../../ModelSchema'); 


const GetQuestions =  (req, res) => {
    const chapter = req.query.chapter || 'Speed';
    obj.PhysicsQuestion.aggregate([
      { $match: { chapter: chapter } },
      { $sample: { size: 10 } }
    ]).then(questions => {
      res.json(questions);
    }).catch(error => {
      console.error(error);
      res.status(500).send('Error fetching questions');
    });
  };


const PostResult = async (req, res) => {
    const result = new obj.PhysicsResult({
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