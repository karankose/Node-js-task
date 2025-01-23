const { log } = require('console');
const fs = require('fs');

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error : "+ err);  
    }
    else{
        console.log(" result : "+ result)  
    }
})
// when we read data form file in aynchronously it not directly return we have to pass the callback 
// with two arguments err , result 
