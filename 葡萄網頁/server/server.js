const http = require("http");
const server = http.createServer((request,Response)=>{
Response.end("hello server");

});

const port = 3000;
const ip = "127.0.0.1";
server.listen(port,ip,() => {
    console.log(`running at http://${ip}:${port}`);

});
