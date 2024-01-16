//*  libuv is a cross platform open source library written in c language.

//*  Being js engine single threaded ,Basically  when there is any time consuming , aysnc task then nodejs upload the task to libuv( this library has pool of thread to run process on the background ) so that main thread can execute other process ,when the libuv comeplete the task then callback gather into queue , from where event loop catch of and executed the callback .

//* event loop consisted of mainly has six different queue a micro task queue  ( nextTick queue and promise queue ,here nextTick queue queue take for precendence then promise queue) and other 4 libuv queue  (settimeout queue, i/o queue, setImmediate queue, close queue).

//**  there is a event loop diagram in this folder more more visulization

// // 1) experiment
const fs = require("fs");

console.log("start");

// process.nextTick(() => {
//   console.log("next tick 1");
// });
// Promise.resolve().then(() => console.log("promise resolve 1"));
// // 1) conclusion -> next tick take more presedence micro task queue

// // 2) experiment
// setTimeout(() => {
//   console.log("this is setimeout 1");
//   process.nextTick(() => console.log("next tick inside settimeout 1"));
// }, 0);

// setTimeout(() => {
//   console.log("this is setimeout 2");
// }, 0);

// process.nextTick(() => {
//   console.log("next tick 2");
// });
// Promise.resolve().then(() => console.log("promise resolve 2"));
// 2) conclusion -> microtask queue(consisting promise queue and next tick queue) take more precedence then timer queue and  callback in microtask queue are executed in betweeen the execution of callback in timmmer queue

// 3) experiment
fs.readFile("./new.txt", "utf-8", () => {
  console.log("read complete");
});
setTimeout(() => {
  console.log("this is setimeout 3");
}, 0);

// 3) conclusion =>generally  first  then settimeout with 0 seconde delay then fs queue .

console.log("end");
