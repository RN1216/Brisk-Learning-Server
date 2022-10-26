const express = require('express')
const app  = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const courses = require('./data/courses.json')

app.get('/',(req,res)=>{
    res.send('Study Running');
});

app.get('/brisk-courses',(req,res)=>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('Brisk learning server is running',port);
})