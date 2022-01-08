const fs = require('fs');

fs.readFile("new.txt",'utf8',((error, data) => {
    if(error){
        throw err
    };
    console.log(data);
}))

fs.stat('new.txt',(err, stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(stats.isFile());
    console.log(stats.size);
    console.log(stats.isDirectory());
})

