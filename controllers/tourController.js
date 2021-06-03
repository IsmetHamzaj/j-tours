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

exports.getAllTours = (req, res) => {
    console.log(req.requestTime)

    res.json({
        status: "success",
        // requested: req.requestTime,
        // data: { tours }
    })
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

exports.getTour = (req, res) => {
//     console.log(req.params)

//     // po e marrim id-n dhe po e konvertojm ne string
//     // const id = req.params.id * 1
//     // const tour = tours.find(el => el.id === id)

//     // res.json({
//     //     status: "success",
//     //     data: {
//     //         tour
//     //     }
//     // })

}

exports.updateTour = (req, res) => {

    const id = req.params.id
   

    res.json({
        status: "success",
        data: {
            tour: "Updated tour"
        }
    })

}

exports.deleteTour = (req, res) => {

    const id = req.params.id
    

    res.json({
        status: "succsess",
        data: null
    })
}