const express = require('express')
const app  = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const courses = require('./data/courses.json');
const coursesdetail = require('./data/coursesdetail.json');

app.get('/',(req,res)=>{
    res.send('Study Running');
});

app.get('/brisk-courses',(req,res)=>{
    res.send(courses)
});

app.get ('/category/:id',(req,res) =>{
    const id = req.params.id;
if(id === '07'){
    res.send(coursesdetail);
}
else{
    const category_coursesdetail = coursesdetail.filter(courseDetail => courseDetail.category_id === id);
    res.send(category_coursesdetail);
}
});


app.get ('/coursesdetail/:id', (req , res)=>{
    const id =  req.params.id;
    const selectedCoursesDetail = coursesdetail.find(courseDetail=>courseDetail._id === id);
    res.send(selectedCoursesDetail);
})

app.listen(port, ()=>{
    console.log('Brisk learning server is running',port);
})