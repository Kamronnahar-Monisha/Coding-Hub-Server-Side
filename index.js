const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000;

//data are loaded from course.json file
const courses = require('./data/courses.json');

//Home api
app.get('/', (req, res) => {
  res.send('Welcome to coding hub server')
})

//All courses api
app.get('/courses',(req,res)=>{
    res.send(courses);
})

//course by id api
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    res.send(courses.find(course=>course.id==id));
})

app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})
