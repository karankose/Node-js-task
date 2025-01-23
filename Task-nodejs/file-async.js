const fs = require('fs');
// async 
fs.writeFile("./t2.txt","this a async file",(err)=>{});
// when we use writeFile which is asynchronous we need to pass a callback function for error handling