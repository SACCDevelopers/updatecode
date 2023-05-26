 
const obj=require('../../ModelSchema');


const GetGraphs =  async (req, res) => {
    try {
      const results = await obj.ComputerResult.find();
      const totalMarks = results.reduce((acc, result) => acc + result.totalMarks, 0);
      const obtainedMarks = results.reduce((acc, result) => acc + result.obtainedMarks, 0);
      const percentage = (obtainedMarks / totalMarks) * 100;
      res.json({ totalMarks, obtainedMarks, percentage });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }; 

module.exports={
    GetGraphs
}