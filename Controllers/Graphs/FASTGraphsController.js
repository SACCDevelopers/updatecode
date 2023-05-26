const express=require('express');
const router=express.Router();
const pq_rep=require("../../models/Repositories/Graphs/FASTGraphRepository");
 

router.get('/Graphs',pq_rep.GetGraphs) 
  
module.exports=router;