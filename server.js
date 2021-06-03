const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

const app = require('./app')

const DB = process.env.DATABASE.replace(
    '<password>', process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,  
    useUnifiedTopology: true,
}).then(() => console.log('DB connection sucessful'))

// mbushja e tabeles

app.listen(3000, () => {
    console.log("Server is listening")
})


