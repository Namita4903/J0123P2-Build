const http = require("http");

const port = 8081;   // local port number

http.createServer((req,res)=>{    // call back function
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h2>hey server:-) 123456 </h2>");
    res.end();
    
})
.listen(port,()=>{     // call back function 
    console.log(`NodeJs Server started running on port ${port}`);
})