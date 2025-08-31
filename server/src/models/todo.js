"use strict"


const {Schema,model} = require("mongoose")



const todoSchema = new Schema(
{
    title:{
        type:String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:250
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:250,
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium",
    },
    isDone:{
        type:Boolean,
        default:false
    }

},    
{
    collection:"todos",
    timestamps:true
})


module.exports = model("Todo",todoSchema)