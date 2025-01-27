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
        case "/": res.end("home page")
            break;
        case "/about" : res.end("about page")
            break;
        case "/contact" : res.end("contact page");
            break;
        default:  res.end("404")
            break;
    }
})

Myserver.listen(8000,()=>{
    console.log("server running http://localhost:8000/");
    
})