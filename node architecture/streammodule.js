const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request", (req, res) => {
  //first way

  // fs.readFile("./out.txt", "utf-8", (err, data) => {
  //   if (data) {
  //     res.end(data);
  //     console.log("comeplted");
  //     // res.end("done");
  //   }
  // });

  // second way
  // const readable = fs.createReadStream("./out.txt");
  // readable.on("data", (chunk) => {
  //   console.log("Reading");
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end("data reading complete");
  // });
  // readable.on("err", (err) => {
  //   res.statusCode(500);
  //   res.end("file not found");
  //   console.log(err);
  // });


  // third way and optimal wau
  const readable=fs.createReadStream("./out.txt");
  readable.pipe(res);


});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening for request");
});
