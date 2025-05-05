import os from "node:os";
function showAboutPC(){
    console.log(`Platform:${os.platform()}
         Architecture: ${os.arch()}
         Total memory: ${os.totalmem()}
         Free memory: ${os.freemem()}
         CPU core: ${os.cpus().map((info)=>info.model)}
         Hostname: ${os.hostname()}
        Net: ${os.networkInterfaces()}`)
}showAboutPC()
