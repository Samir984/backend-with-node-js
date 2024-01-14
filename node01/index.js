import { writeFileSync, readFileSync } from "fs";

//reading and writing file sync
const textOuput = "i am samir don";
writeFileSync("./write,txt", textOuput, "utf-8");
const readValue = readFileSync("./write,txt", "utf-8");
console.log(readValue);
console.log("end");
