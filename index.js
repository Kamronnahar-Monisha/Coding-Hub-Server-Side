const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Hello my love')
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})

{/*<a href="https://ibb.co/G90txs3"><img src="https://i.ibb.co/C6zM1Js/c.png" alt="c" border="0"></a>
<a href="https://ibb.co/c6NW699"><img src="https://i.ibb.co/WkcrkXX/java.png" alt="java" border="0"></a>
<a href="https://ibb.co/nQk57cD"><img src="https://i.ibb.co/GCPbW2V/laravel.png" alt="laravel" border="0"></a>
<a href="https://ibb.co/2FCWFWK"><img src="https://i.ibb.co/WHMGHGK/node.png" alt="node" border="0"></a>
<a href="https://ibb.co/pdBp1Xt"><img src="https://i.ibb.co/NKdzFY8/python.png" alt="python" border="0"></a>
<a href="https://ibb.co/kJvY8m8"><img src="https://i.ibb.co/dtxn2m2/react.png" alt="react" border="0"></a> */}