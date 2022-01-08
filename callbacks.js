function getMsg(msg, callback){
    setTimeout(() => {
        console.log(msg);
        callback();
    },1000)
}
function disMsg(){
    console.log("dis Msg");
}

getMsg("Get Msg",disMsg);