const path = require("path");

console.log(__dirname, __filename);

console.log("basename->", path.basename(__dirname), "\n", path.basename(__filename));

console.log("return enternal->",path.extname(__filename))

console.log(path.parse(__filename));

console.log(path.join("folder1","folder2","index.html"))

console.log(path.resolve("folder1","folder2","index.html"))
console.log("\n")
console.log(path.resolve("/folder1","folder2","index.html"))



console.log(path.isAbsolute(__dirname),path.isAbsolute("./out.txt"))

