const express = require('express')
const fs = require('fs')



const app = express()
app.use(express.json())







app.get ('/' , (req,res) => {
    res.json({message: 'Hello from the server side' , app: 'jTours'})
})


app.get("/api/v1/tours", (req,res) => {
    res.json({
        status: "Success",
        data: {tours}
    })
})


app.get('/api/v1/tours/:id' , (req,res) => {
    //po e marrim id edhe po e konvertoj ne string me ane * 1
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)

    if(!tour) {
        return res.json ({
            status: "Fail",
            message: "Invalid id"
        })
    }

    res.json ({
        status:"success",
        data: {
            tour
        }
    })

})






app.post('/',(req,res)=>{
    res.send('You can post to this url')
})

app.post('/api/v1/tours', (req,res) => {
    // console.log(req.body)
    //Ka me u shtu ni dokument i ri
    const newId = tours[tours.length -1].id + 1
    const newTour = Object.assign({id: newId}, req.body)


    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), err => {
        res.json({
            status: "Success",
            data: {
                tours: newTour
            }
        })
    })
})

app.patch("/api/v1/tours/:id" , (req , res) => {



    const id = req.params.id 
    if(id > tours.length) {
        return res.json({
            status: "Fail",
            message: "Invalid ID"
        })
    }



    res.json({
        status: "Success",
        data: {
            tour: "Update"
        }
    })
})


const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))




app.delete("/api/v1/tours/:id" , (req , res) => {
    if (id > tours.length) {
        return res.json({
            status: "Fail",
            message: "Invalide Id"
        })
    }
    res.json({
        status: "success",
        data: null
    })
})


app.listen(3000, () =>{
    console.log('server is listening')
})