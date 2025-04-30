import * as fs from "fs/promises";
try {
   const data = await fs.readFile("c:\\nodejs\\hello.txt" );
    console.log(data.toString()); // if we do not add
    // toString() it is going to render in buffer, or we can just add 'utf8' after indicating path
}
catch (e) {
    console.error(e);
}