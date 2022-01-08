function clone(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Icons')
        }, 2000);
    })
}

async function msg(){
    const msg = await clone();
    console.log("message:",msg);
}
msg();