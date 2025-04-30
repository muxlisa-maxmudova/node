import * as fs from "fs/promises";
(async function(path){
    try{
        await fs.unlink(path)
        console.log("nodejs directory deleted successfully")
    }
    catch (error){
        console.log(error)
    }
})('c:\\nodejs')
