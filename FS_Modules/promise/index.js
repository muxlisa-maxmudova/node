import * as fs from "fs/promises";
    try{
        await fs.mkdir('c:\\nodejs/home')
        console.log("home dir created successfully")
    }
    catch (error){
        console.log(error)
    }
