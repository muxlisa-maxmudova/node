import * as http from "node:http";
const server = http.createServer(
    (req, res)=>{
    res.write("<h1>Hello World</h1>")
})
server.listen(8000, ()=>console.log(`Server started on port ${server.address().port}`));