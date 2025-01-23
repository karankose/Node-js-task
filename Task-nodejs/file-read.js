const fs = require('fs');
const data = fs.readFileSync("./contact.txt","utf-8");

console.log(data);
// in synchrous function it returns a result / data in a variable or if error is there so we can handle by try catah 