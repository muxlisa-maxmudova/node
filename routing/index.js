import http from "http";

const server = http.createServer((req,res)=>{
    res.end('Home')
    console.log(req.url)
})
server.listen(8000, ()=> console.log(`Server is running on port ${server.address().port}!`));