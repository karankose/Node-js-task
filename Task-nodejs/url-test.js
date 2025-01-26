const http = require('http');
const url = require('url');
const server = http.createServer((req, res)=>{

    const myurl = url.perse(req.url,true)
    console.log(myurl);
    
    res.end("hello server!");
})
server.listen(8000);