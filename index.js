const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Welcome to coding hub server')
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    res.send(courses.find(course=>course.id==id));
})

app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})
