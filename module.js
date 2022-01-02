const fs = require('fs');
let text = fs.readFileSync("write.txt","utf-8");

//replacing the content of the previous content
text = text.replace("Hey","I just learn what are modules");
console.log(text);


//creating a new file
fs.writeFileSync("new.txt",text)