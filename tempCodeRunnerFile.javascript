const fs= require("fs");
let text=fs.readFileSync("rohit kumar pandey.txt","utf-8");
text=text.replace("kumar","dev");
console.log("the content of file is");
console.log(text);
console.log("creating a new file...");
fs.writeFileSync("dev.txt",text);