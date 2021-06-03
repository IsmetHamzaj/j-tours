const p = new Promise((resolve, reject) => {
    const a = 1 + 1
    if (a == 2) {
        resolve('Success')
    }
    else {
        reject('Failed')
    }
})

p.then(message => {
    console.log("The promise is" , message)
}).catch((message)=> {
    console.log("The promise is" , message)
})


async function something() {
    try {

    }

    catch(err) {
        
    }
}