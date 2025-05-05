import * as fs from 'fs';
const data = fs.readFileSync('c:\\nodejs\\house\\hello.txt');
console.log(data.toString());
