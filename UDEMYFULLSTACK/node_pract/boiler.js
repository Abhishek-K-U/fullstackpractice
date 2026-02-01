const fs = require('fs');
const folderName = process.argv[2] || 'defaultFolder';
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/script.js`,'')

// const { add, Greet } = require('./args');
// console.log(add(5, 10));
// console.log(pie);
// console.log(Greet('World'));