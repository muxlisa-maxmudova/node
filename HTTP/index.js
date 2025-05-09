import * as http from "node:http";
const server = http.createServer(
    (req, res)=>{
        res.writeHead(404, 'Not Found'); // both correct
        res.end("Hello World")
})
server.listen(8000, ()=>console.log(`Server started on port ${server.address().port}`));