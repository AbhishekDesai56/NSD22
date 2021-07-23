const fs = require('fs');
  
let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python";
  
fs.writeFileSync("text.txt", data,{
    encoding: "utf8",
    flag: "a+",
    mode: 0o666
  });
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("text.txt", "utf8"));