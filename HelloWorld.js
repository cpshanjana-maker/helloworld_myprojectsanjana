const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("My Hello World project");

});
server.listen(3000,() =>{
    console.log("version 2-new branch is running on port 3000");
});