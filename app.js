const express = require('express')
const fs = require('fs')



const app = express()


app.get ('/' , (req,res) => {
    res.json({message: 'Hello from the server side' , app: 'jTours'})
})

app.post('/',(req,res)=>{
    res.send('You can post to this url')
})

const tours = JSON.parse(fs.readFileSync('${__dirname}/dev-data/data/tours-simple.js'))



app.listen(3000, () =>{
    console.log('server is listening')
})