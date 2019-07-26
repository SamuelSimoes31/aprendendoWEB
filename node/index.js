let express = require("express")
let bodyParser = require("body-parser")
let app = express()

let currentId = 0

let dvds = [
    // {
    //     title: "data.title",
    //     year: "data.year",
    //     id: currentId,
    //     rent: {
    //         status: false,
    //         renter: ""
    //     }
    // }
]

app.use(bodyParser.json())

app.get("/dvds", function(request,response){
    //?query=tanan&query=tnanan
    let year = request.query.year
    let status = request.query.status



    if(year){
        response.send(
            dvds.filter(function(dvd){
                return dvd.year == year
            })
        )
    }
    else{
        response.send(dvds)
    }
    
    
})

app.get("/dvds/:dvdId",function(req,res){
    let id = req.params.dvdId

    let foundDvd = dvds.find(function(dvd){
        return dvd.id == id
    })

    if(foundDvd){
        res.send(foundDvd)
    }else{
        res.status(404).send({message: "Dvd não encontrado"})
    }
})

app.post("/dvds",function(req,res){
    let data = req.body
    if(data.title && data.year){
        dvds.push({
            title: data.title,
            year: data.year,
            id: currentId,
            rent: {
                status: false,
                renter: ""
            }
        })

        currentId += 1
        res.send(dvds)
    } else{
        res.status(400).send({message: "Dvd invalido"})
    }
})

app.put("/dvds/:dvdId",function(req,res){
    let data = req.body
    let id = req.params.dvdId

    let foundDvd = dvds.find(function(dvd){
        return dvd.id == id
    })

    if(foundDvd){
        dvds[id] = foundDvd = {
            title: data.title,
            year: data.year,
            id: data.id
        }
        res.send(foundDvd)
    }else{
        res.status(404).send({message: "Dvd não encontrado"})
    }
    
})

app.delete("/dvds/:dvdId",function(req,res){
    let id = req.params.dvdId

    let foundDvdIndex = dvds.findIndex(function(dvd){
        return dvd.id == id
    })

    if(foundDvdIndex !== -1){
        dvds.splice(foundDvdIndex, 1)
        res.send("Sucsses")
    }else{
        res.status(404).send({message: "Dvd não encontrado"})
    }
    
})

//RENT
app.put("/dvds/:dvdId/rent",function(req,res){
    let userName = req.body.userName
    let id = req.params.dvdId

    let foundDvd = dvds.find(function(dvd){
        return dvd.id == id
    })

    if(foundDvd.rent.status){
        res.status(400).send({message: "Já alugado"})
    } else{
        foundDvd.rent.status = true
        foundDvd.rent.renter = userName

        res.send("OK")
    }
})

//RETURN
app.put("/dvds/:dvdId/return",function(req,res){
    let userName = req.body.userName
    let id = req.params.dvdId

    let foundDvd = dvds.find(function(dvd){
        return dvd.id == id
    })

    if(foundDvd.rent.status){
        foundDvd.rent.status = false
        foundDvd.rent.renter = ""
        res.send("OK, devolvido")
    } else{
        res.status(400).send({message: "Dvd não foi alugado"})
    }
})

//put /dvds/:dvdId/rent

//put /dvds/:dvdId/return

app.listen(3000,function(){
    console.log('OIIII')
})
