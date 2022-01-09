// const buf = Buffer.from("Hey");
const buf = Buffer.alloc(4);
buf.write("Hey")


console.log(buf.toString());
console.log(buf[0]);