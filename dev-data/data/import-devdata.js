const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})
const Tour = require('./../../models/tourModel')


const DB = process.env.DATABASE.replace(
    '<password>', process.env.DATABASE_PASSWORD
)

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,  
    useUnifiedTopology: true,
}).then(() => console.log('DB connection sucessful'))





// Read json
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,"utf-8"))


// IMPORT data into db
const importData = async () => {
    try{
        await Tour.create(tours)
        console.log('Data have been added')
    }
    catch (err){
        console.log(err)
    }
}


//delete old data
const deleteData = async () => {
    try{
        await Tour.deleteMany()
        console.log('Data have been delete')
    }
    catch (err){
        console.log(err)
    }
}

if(process.argv[2] === "--import"){
    importData()
}
else if (process.argv[2] === "--delete"){
    deleteData()
}


console.log(process.argv)