// const fs = require('fs')



// e kem lexu filen i cili i permban te gjitha tours
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



// exports.checkId = (req, res , next , val) => {
//     console.log(` Tour id: ${val}`)


//     if (req.params.id * 1 > tours.length){
//         return res.json({
//             status: "Fail",
//             message: "Invalid ID"
//         })
    
//     }
//     next()
// }

// exports.checkBody = (req , res , next) => {

//     if(!req.body.name) {
//         return res.json({
//             status: "Fail",
//             message: "Missing name or price"
//         })
//     }


//     next()
// }


const Tour = require('./../models/tourModel')

exports.getAllTours = async (req, res) => {
    
    try{
        const queryObj = {...req.query}//new object
        const excludedFields = ['page','sort','limit','fields']//fushat qe nuk dojm me i perfshi ne filtrim
        excludedFields.forEach(el => delete queryObj[el])

        //convert query to string

        let queryStr = JSON.stringify(queryObj) // e bojm string objektin
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g , match => `$${match}`)
        console.log(JSON.parse(queryStr))


        console.log("req.query: ",req.query,"queryObj: " ,queryObj)


        const query = Tour.find(JSON.parse(queryStr))
        const tours = await query

        res.json({
            status: "success",
            results: tours.length,
            data: { tours }
        })
    }
    catch {
        res.json({
            status: "fail",
            message: err
        })
    }

    
}

exports.createTour = async (req, res) => {
// opsioni 1
// per promise
// const newTour = new Tour({})
// newTour.save()




try {
    const newTour = await Tour.create(req.body)
    res.json({
        status: "Success",
        data: {
            tour: newTour
        }
    })
}

catch {
    res.json({
        status: "fail",
        message: err
    })
}
}

exports.getTour = async (req, res) => {

    try {
        const tour = await Tour.findById(req.params.id)


        res.json({
            status: "Success",
            data: {
                tour
            }
        })
    }
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }

}

exports.updateTour = async (req, res) => {

    try{

        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.json({
            status: "success",
            data: {
                tour
            }
        })
    }
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }

    

}

exports.deleteTour = async (req, res) => {

    
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id) 
        res.json({
            status: "succsess",
            data: null
        })
    }
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }
    
    

    
}