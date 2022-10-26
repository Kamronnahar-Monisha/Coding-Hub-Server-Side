const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello my love')
})

app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})