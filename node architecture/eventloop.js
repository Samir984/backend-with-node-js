const fs = require("fs");
fs.readFile("./new.txt", () => {
  console.log("file read");
});

setTimeout(() => console.log("this is settimeout"), 0);

// when running setimout with delay of 0 second and an i/o async method ,the order of exeution can never be guaranteed

//basicaaly intern setTimout at 0 second are set to 1 ms internal in node source code

setImmediate(() => console.log("Set Immediate"));

fs.readFile("./new.txt", () => {
  console.log("file read");
});

setTimeout(() => console.log("this is settimeout"), 0);

//i/o event are poll ,and callback function and added to i/o queue only when i/o operation are completed

//not following as diagram ,here order cannot be gureenteee due to concept called i/o polling


