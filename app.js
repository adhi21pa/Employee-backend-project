const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel} = require("./models/Employee")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adithyapa2003:adithya66@cluster0.g5hvjxm.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
   let input = req.body
   let employee=new employeemodel(input)
   employee.save()
   console.log(employee)
   res.json({"status":"success"})
})
app.get("/view",(req,res) => {
    employeemodel.find().then(

    (data)=>{
        res.json(data)
    }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
            
        })


app.listen(8080)
console.log("server started")