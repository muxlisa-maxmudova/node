import fs from 'fs';
import * as http from "node:http";

const server = http.createServer((req, res) => {
    if(req.url === '/') {
         res.writeHead(200, {'Content-Type': 'text/html'});
         fs.readFile('../public/Home.html','utf8' ,(err, data) => {
             if(err) throw err;
             res.end(data);
         })
    }
   else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('../public/About.html', 'utf8' ,(err, data) => {
            if(err) throw err;
            res.end(data);
        })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile('../public/Not_found.html', 'utf8' ,(err, data) => {
            if(err) throw err;
            res.end(data);
        })
    }
})
server.listen(8000, () => {console.log('Server is running on port 8000')});