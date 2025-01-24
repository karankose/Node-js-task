// let create a server with node
const http = require('http');
const Myserver = http.createServer((req ,res)=>{
    console.log("user");
    console.log(req.headers);
    res.end("hello user");
    res.end("hello guy's")
})
Myserver.listen(8000,()=>{
    console.log("running servers http://localhost:8000");
})
