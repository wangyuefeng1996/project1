const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//����·��
//�����õ�
router.get("/test",function(req,res){
	res.send("�ɹ�");
});
//ͨ���ֻ��Ż�ø������鼮֮���ϵ��Ϣ
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