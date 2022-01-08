// nodejs code run on a single thread or single processs
// In event loop any function that making the delay will executed at last
const bar = () => {console.log("bar");}
const baz = () => {console.log("baz");}
const foo = () => {
    console.log("foo");
    bar();
    baz();
}

foo();