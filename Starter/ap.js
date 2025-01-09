const  express = require('express');
let path = require('path');
const   app = express();



app.get("/",(req,res)=>{
    res.send("hello");
});



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
    res.status(200);
});


app.get("/signin",(req,res)=>{
    res.redirect(301,"/");


    res.sendFile(path.join(__dirname,"signin.html"));
});



const mdl =(req,res,next)=>{
    console.log("to be done first");
    next();
}

app.get("/signup",(req,res,)=>{
    res.sendFile(path.join(__dirname,"signup.html"));
});

  



app.get("/read",(req,res)=>{
    res.redirect(302,"/");
    res.sendFile(path.join(__dirname,"JBs.jpg"));
});

let a ={
    a:30,
    b:300
}


app.get("/json",(req,res)=>{
    res.redirect(301,"/");
    res.json(a);
});




app.get("/json-local",(req,res)=>{
    res.json({massage:"helloodfdfhud",status:"allow"});
})




app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    console.error("error");
    console.warn("waring");
console.log("hello")
  });
