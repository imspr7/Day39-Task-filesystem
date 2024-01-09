const express = require('express')
const path = require('path');
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hour=date_ob.getHours();
let min=date_ob.getMinutes();
let sec=date_ob.getSeconds();

const timestamp =date+"-" + month + "-" +year +"_"+ hour+":"+min+":"+sec+".txt";
let directory_name = __dirname+"/file"; 
console.log("=="+directory_name)

app.post('/create',function(req,res){
    const directory = path.join(__dirname,'file');
  fs.writeFileSync(directory+"/"+timestamp,`${date_ob}`);
    res.json(timestamp)
})
app.get('/getfilename',function(req,res){

let filenames = fs.readdirSync(directory_name); 
filenames.forEach((file) => { 
    console.log("File:", file); 
}); 
     res.json(filenames)
 })

app.listen(3001)