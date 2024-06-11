const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
        "employeeId": String,
        "firsttname":  String,
       " lastname":  String,
       " dob": String,
        
        "mob":  String,
        "email":  String,
        "address":  String
    }
)

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}