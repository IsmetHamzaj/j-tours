const express = require('express')
const morgan = require('morgan')
const app = express()


const tourRouter = require('./router/tourRoutes')
const userRouter = require('./router/userRoutes')
// 1) MIDDLEWARES


app.use(morgan('dev'))

app.use((req,res,next) => {
    console.log("Hello from the middle ware")
    next()
})

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString()
    next()
})

// middelware - mes req, res
app.use(express.json())




//2) ROUT HANDELER









app.use("/api/v1/tours" , tourRouter)
app.use("/api/v1/users" , userRouter)


module.exports = app