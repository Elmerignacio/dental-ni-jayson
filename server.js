const express = require ('express')
const route = require('./routes/route.js')
const path = require('path')

const app = express()
app.use(route)

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(4000, ()=>{
  console.log("Connected to the server!!")
})