 
const express = require('express');
const app = express();

app.get('/',(req ,res)=>{
   res.send(` hello to home page ${req.query.name} : ${req.query.age} `);
})

app.get('/login',(req , res)=>{
     res.send(" MY Accout Page!");
})

app.get('/about',(req , res)=>{
    res.end("This is about page");
})
 
app.listen(8000,()=>{
    console.log("http://localhost:8000");
    
})