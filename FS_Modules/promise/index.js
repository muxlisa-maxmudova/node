import * as fs from "fs/promises";
try {
    await fs.writeFile("c:\\nodejs\\hello.txt", "Hello World!");
    console.log("File created");
}
catch (e) {
    console.error(e);
}