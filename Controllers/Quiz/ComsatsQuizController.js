const express=require('express');
const router=express.Router();
const pq_rep=require("../../models/Repositories/Quiz/ComsatsQuizRepository");
 

router.get('/Questions',pq_rep.GetQuestions)
router.post('/Results',pq_rep.PostResult)
  
module.exports=router;