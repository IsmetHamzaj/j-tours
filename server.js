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


const tourSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true, "A tour must have a name"],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.0
    },
    price: {
        type: Number,
        required: [true, "A tour must have a name"],
    },
})


const Tour = mongoose.model("Tour" , tourSchema)

// mbushja e tabeles

const testTour = new Tour({
    name: "Paris",
    rating: 4.3,
    price: 333
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log("error")
})


app.listen(3000, () => {
    console.log("Server is listening")
})


