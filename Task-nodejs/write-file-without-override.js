const fs = require('fs');
fs.appendFileSync("./t2.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./t2.txt", `new contant \n `)
fs.appendFileSync("./t2.txt", new Time().getTime().toLocaleString())