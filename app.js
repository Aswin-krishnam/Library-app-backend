const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const library = require("./models/library")
const {librarymodel} = require("./models/library")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aswinkrishnam16:aswinkrishnam@cluster0.2iu51vz.mongodb.net/libraryapp?retryWrites=true&w=majority&appName=Cluster0")



app.post("/", (req, res) => {
    let input=req.body
    let library = new librarymodel(input)
    library.save()
    console.log(library)
    res.json({"status":"success"})
})

app.post("/search", (req, res) => {
    let input=req.body
    librarymodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/delete", (req, res) => {
    res.send("delete")
})

app.get("/viewall", (req, res) => {
    librarymodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.listen(8080, () => {
    console.log("server started")
})