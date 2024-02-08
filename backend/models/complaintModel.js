const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User Name"],
        trim:true
    },

    category:{
        type:String,
        required:[true,"Please Enter complaint Category"]
    },

    title:{
        type:String,
        required:[true,"Please Enter Complain Title"]
    },

    description:{
        type:String,
        required:[true,"Please Enter complaint Description"]
    },

    status:{
        type:String,
        default:"Pending"
    },

    response:{
        type:String,
        default:"Please Wait while we get back"
    },


    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Complaint",complaintSchema);