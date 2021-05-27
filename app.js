const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./router/tourRoutes')
const userRouter = require('./router/userRoutes')


const app = express()


console.log(process.env.NODE_ENV)
// 1) MIDDELWARE
// middelware - mes req, res


if(process.env.NODE_ENV === "development"){
    app.use(express.json())
}


app.use(express.json())


app.use(express.static(`${__dirname}/public`))



app.use(morgan('dev'))


app.use((req, res, next) => {
    console.log("Hello from the middelware")
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})


// 2) ROUTE HANDLERS



// 3) ROUTE

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)



module.exports = app