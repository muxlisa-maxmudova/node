import * as fs from "fs/promises";
try {
     await fs.copyFile('c:\\nodejs\\hello.txt', 'c:\\nodejs/home\\copiedHello.txt')
     console.log("File copied")
 }
 catch (error) {
     console.log(error)
 }