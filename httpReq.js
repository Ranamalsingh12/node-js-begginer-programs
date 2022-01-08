const http = require('https')


//Get request
// http.get('http://api.open-notify.org/astros.json',resp => {
//     let data = "";
//     resp.on('data', chunk => {
//         data += chunk
//     });
//     resp.on('end', () => {
//         let jsondata = JSON.parse(data)
//         console.log(jsondata);
//     })
// })

//POST method

const axios = require('axios');
const data = JSON.stringify({
    name:'john doe',
    job:'content writer'
});

const options = {
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    header: {
        'Content-Type' : 'application/json'
    }
}

//request
// const req = http.request(options, (res) => {
//     let data='';
//     console.log("Status Code:",res.statusCode);

//     res.on('data',(chunk)=>{
//         data += chunk
//     })

//     res.on('end',()=>{
//         console.log("Body:", JSON.parse(data));
//     })
// })

// req.write(data);
// req.end();

//POST request using axios library
axios.post('https://reqres.in/api/users',data).then(res =>{
    console.log(`Status Code:${res.status}`)
    console.log(`Body: ${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err);
})