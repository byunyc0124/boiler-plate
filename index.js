const express = require('express')
const app = express()
const port = 3000

// mongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://byc:abcd1234@boilerplate.y5ld8ld.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})