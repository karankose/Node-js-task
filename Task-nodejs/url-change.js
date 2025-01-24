const http = require('http');

const server = http.createServer((req,res)=>{

    console.log(("new user is comming"));
    
    switch(req.url){
        case '/' : res.end("welcome home");
        break;
        case '/contact': res.end(" thanks to contact use" )
        break;
        case '/about':  res.end("about is rendered")
        default : res.end("invalid request")
    }
})








server.listen(8004,()=>{
    console.log("server started");
    console.log("http://localhost:8004");
    
})