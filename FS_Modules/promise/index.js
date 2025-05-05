import * as fs from "fs/promises";
import * as constants from "node:constants";
try {
     await fs.copyFile('c:\\nodejs\\hello.txt', 'c:\\nodejs/home\\copiedHello.txt', constants.COPYFILE_EXCL)
     console.log("File copied")
 }
 catch (error) {
     console.log(error)
 }