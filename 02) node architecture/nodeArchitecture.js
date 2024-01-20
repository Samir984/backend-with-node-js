// event loop queue phases
// 1) callback of expired timer
// 2) I/O polling and I/O callback
// 3) setImmediate callback
// 4) close callback

//other queue with higher priority
// *) process.NEXTTICK().queue
// *) other microtask queue

const fs = require("fs");
const crypto = require("crypto");

//controlling number of thered in thread poll
// process.env.UV_THREADPOOL_SIZE = 1;

console.log("Start");
fs.readFile("./out.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log("-------------");
  setTimeout(() => {
    console.log("timeout 1");
  }, 0);
  setImmediate(() => console.log("setImmediate 1"));
  process.nextTick(() => console.log("process. nexttick"));

  //all task get uploaded to thread pool which defult size if 4 so all 4 task are completed at same time
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
  });
});

console.log("end");
