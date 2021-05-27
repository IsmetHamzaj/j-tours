const fs = require('fs')

// e kem lexu filen i cili i permban te gjitha tours
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



exports.checkId = (req, res , next , val) => {
    console.log(` Tour id: ${val}`)


    if (req.params.id * 1 > tours.length){
        return res.json({
            status: "Fail",
            message: "Invalid ID"
        })
    
    }
    next()
}

exports.checkBody = (req , res , next) => {

    if(!req.body.name) {
        return res.json({
            status: "Fail",
            message: "Missing name or price"
        })
    }


    next()
}



exports.getAllTours = (req, res) => {
    console.log(req.requestTime)

    res.json({
        status: "success",
        requested: req.requestTime,
        data: { tours }
    })
}

exports.createTour = (req, res) => {
    // console.log(req.body)

    // ka me u shtu nje dokument i ri
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.json({
            status: "success",
            data: {
                tour: newTour
            }
        })

    })
}

exports.getTour = (req, res) => {
    console.log(req.params)

    // po e marrim id-n dhe po e konvertojm ne string
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)

    res.json({
        status: "success",
        data: {
            tour
        }
    })

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