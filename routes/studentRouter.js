var express=require('express');
var studentDB=require('../db/studentDB');
var studentRouter=express.Router();
studentRouter.post('/findAll',function(req,resp){
    studentDB.findAll(function(results){
            resp.json(results);

    });
});
studentRouter.post('/login',function(req,resp){
    resp.send("登陆成功");
});
module.exports=studentRouter;