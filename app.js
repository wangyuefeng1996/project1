const express=require("express");
const userRouter=require("./routes/user.js");
const bookRouter=require("./routes/book.js");
const userbooksRouter=require("./routes/user_books.js");
const bodyParser=require("body-parser");

var app=express();
app.listen(8080);

app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(express.static("./public"));

app.use("/user",userRouter);
app.use("/book",bookRouter);
app.use("/userbooks",userbooksRouter);