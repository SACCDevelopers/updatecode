const express=require('express');
const router=express.Router();
const cq_rep=require("../../models/Repositories/Quiz/ChemistryQuizRepository");
 

router.get('/Questions',cq_rep.GetQuestions)
router.post('/Results',cq_rep.PostResult)
  
module.exports=router;