const events = require("events");

let ev = new events.EventEmitter();
// ev.on('my_event',function(data){
//     console.log("Event:",data);
// })
ev.once('my_event',() => {
    console.log("event once fire");
})
ev.emit('my_event',"Call emit()")