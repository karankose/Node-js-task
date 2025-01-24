const http = require('http');
const fs = require('fs');


const server = http.createServer((req ,res)=>{
    const userLog = `${Date.now()} : ${req.url}new user \n`;
    
    fs.appendFile("./logging.txt",  userLog ,(err,data)=>{
       
     console.log(" new user comming to server ")
     res.write("hello user \n");
     res.end("go back")
        
    });
     
})
server.listen(8001,()=>{
    console.log("server started seccessfully http://localhost:8001 ");
})