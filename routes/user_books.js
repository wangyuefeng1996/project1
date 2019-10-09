const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//创建路由
//测试用的
router.get("/test",function(req,res){
	res.send("成功");
});
//通过手机号获得个人与书籍之间关系信息
router.get("/v1/getuserbooks/:tele",(req,res)=>{
	var $tele=req.params.tele;
	pool.query(`select * from user_books where tele=?`,[$tele],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
module.exports=router;