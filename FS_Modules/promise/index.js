import * as fs from "fs/promises";
    try{
        await fs.rmdir('c:\\nodejs/home')
        console.log("home dir deleted successfully")
    }
    catch (error){
        console.log(error)
    }
