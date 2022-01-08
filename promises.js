//  Creating a promise

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("this is 1st promise");
        reject(new Error("OOPs"));
    }, 1000);
});

promise.then(
    result => {
        console.log(result)
        getAfter()
    },
    error => console.log(error)
)

function getAfter(){
    console.log("Print After");
}