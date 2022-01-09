const path = require("path");
file1= path.basename("test.json");
file2 = path.dirname("BAckend/test.json");
file3 = path.parse("BAckend/test.json");
file4 = path.resolve("BAckend/test.json");
console.log(file1);
console.log(file2);
console.log(file3);
console.log(file4);