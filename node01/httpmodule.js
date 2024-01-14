import http from "http";
import url from "url";


const server = http.createServer((req, res) => {
  const pathName = req.url;
 
  if (pathName === "/overView" || pathName === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("This is overview page");
  } else if (pathName === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("this is product page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>no such page found | 404</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on post 8000");
});
