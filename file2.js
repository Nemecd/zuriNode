const fetch = require("node-fetch");
const axios = require('axios')
const fs = require('fs')

async function users(){
    const url = 'http://jsonplaceholder.typicode.com/posts';
    let res = await axios.get(url);
    let data = JSON.stringify(res.data, null,2);
    return data;
}
users().then(result =>{
    fs.writeFile('posts.json', result, (err)=>{
        if(err) throw err
        console.log("File created")
    })
}).catch(err => console.error(error))