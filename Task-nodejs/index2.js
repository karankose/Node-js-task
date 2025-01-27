const http = require('http');
const fs = require('fs');


const server = http.createServer((req ,res)=>{
    const id = Date.now();
    
    const userLog = `${id} ${req.url} :${req.method}new user \n`;
    if(req.url ==="/favicon.ico"){
        return res.end();
    }
    fs.appendFile("./logging.txt",  userLog ,(err,data)=>{
       
     console.log(" new user comming to server ")
     res.write("hello user \n");
     res.end("go back")
        
    });
     
})
server.listen(8001,()=>{
    console.log("server started seccessfully http://localhost:8001 ");
})