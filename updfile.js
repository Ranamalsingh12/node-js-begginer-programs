
//Reading and deleting the file.
// methods: fs.writeFile()
// fs.readFile()
// fs.unlink() and sync ones

const fs = require('fs');

// const content = [{
//     type:"node application"
// }];

// fs.writeFileSync('test.json',JSON.stringify(content))

const content = "and i also want to learn mongodb";

fs.writeFile('new.txt',content,{flag:'a+'},err => {
    if(err){
        console.log(err);
        return
    }
   console.log("successfully done");
})