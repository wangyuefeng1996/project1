const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//创建路由
//测试用的
router.get("/test",function(req,res){
	res.send("成功");
});
module.exports=router;