import http from "http"

http.createServer((request,response)=>{
    response.end("Hello typescript")
})
.listen(8500,()=>console.log("server started"))