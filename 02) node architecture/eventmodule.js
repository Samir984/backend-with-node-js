//event driven programming
//event Emmiter (by emit method)=>Event listener (by on method)-> Attach callback
const http =require("http")
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("hi", () => {
  //event lisister
  console.log("hello bro.");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are  ${stock} items in the stock `);
});

myEmitter.emit("hi"); //event emitter
myEmitter.emit("newSale", 3); //event emitter

//better approach

class Order extends EventEmitter {
  // now Sales class has all method of EventEmitter class
  constructor() {
    super();
  }
}

const order = new Order();
order.on("orderRecive", () => console.log("delivey on process")); //event lisiter
order.emit("orderRecive"); //evnt emitter
console.log("----------------------------------------------")
///////////////////////////////////////////


const server=http.createServer();
server.on("request",(req,res)=>{
    console.log("Request received");
    res.end("Request received");
})

server.on("close",()=>{
    console.log("server closed");
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("listening to server");
})




