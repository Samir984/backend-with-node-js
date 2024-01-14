import { writeFileSync, readFileSync, readFile } from "fs";

//reading and writing file Synchronously
//this is blocking code which execute Synchronously on main thread.
const textOuput = "i am samir don";
writeFileSync("./write.txt", textOuput, "utf-8");
const readValue = readFileSync("./write.txt", "utf-8");
console.log(readValue);
console.log("end");

//reading and writing file Asynchronously
// no blocking and execution  in background and callback function in execute when the task in complete

console.log("read file async");
readFile("./write.txt", "utf-8", (err, data) => {
  console.log("reading data inside aync");
  data += "  ->read completed";
  writeFileSync("./write.txt", data,"utf-8" ,(err) => {
    console.log(err);
  });
  console.log('complete')
});
console.log("async end");

// oops going throw one more problem this is a hell ,CallBack hell
