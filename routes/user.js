const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//创建路由
//测试用的
router.get("/test",function(req,res){
	res.send("成功");
});
//登录
router.get("/v1/login/:tele&:upwd",function(req,res){
	var $tele=req.params.tele;
	var $upwd=req.params.upwd;
	pool.query(`select * from user where tele=? and upwd=?`,[$tele,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
})
//验证
router.get("/v1/check/:tele",function(req,res){
	var $tele=req.params.tele;
	pool.query(`select * from user where tele=?`,[$tele],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//注册
router.post("/v1/reg",function(req,res){
	var obj=req.body;
	obj.nickname="口可口可";
	pool.query(`insert into user set ?`,[obj],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

//通过手机号获得个人信息
router.get("/v1/getuser/:tele",function(req,res){
	var $tele=req.params.tele;
	pool.query(`select * from user where tele=?`,[$tele],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
module.exports=router;