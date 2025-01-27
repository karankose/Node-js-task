const http = require('http');
const fs = require('fs');



const Myserver = http.createServer((req , res)=>{

    const userTime = Date.now();
    const storeTime = ` userTime :${userTime} : ulr${req.url}: method : ${req.method}\n`
    if (req.url === "/favicon.ico"){
        return res.end();
    }
    fs.appendFile("./user-method-log.txt",storeTime,()=>{
        console.log("new user enter");
        
    })
    
    switch (req.url) {
        case "/":
            if (req.method === "GET"){
                res.end("HOME PAGE");
            }
            break;
        case "/about" : 
            if(req.method === "GET"){
                res.end("ABOUT PAGE");
            }
            break;
        case "/login" :
            if (req.method === "GET"){
                res.end("LOGIN PAGE");
            }else if(req.method ==="POST"){
                res.end("sign up");
            }
            break;
        
        default:  res.end("404")
            break;
    }
})

Myserver.listen(8000,()=>{
    console.log("server running http://localhost:8000/");
    
})