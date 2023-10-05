const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


console.log(year + "-" + month + "-" + date);
const timestamp = year + "-" + month + "-" + date + "_"+ "today date"
fs.writeFile('date-time.txt',`${timestamp}`,(err) => {
    if(err) throw err
    console.log('File Created!!!')

})
app.get('/create',function(req,res){
    const timestam = "welcome to our file"
    fs.writeFile('file.txt',`${timestam}`,(err) => {
        if(err) throw err
        console.log('File Created successfully!!!')
    
    })
    res.json(timestamp)
})

app.listen(3001)