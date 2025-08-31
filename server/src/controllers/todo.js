"use strict"

const Todo = require("../models/todo")



module.exports = {
    list: async(req,res)=>{
        const result = await Todo.find()

        res.status(200).send({
            error:false,
            result
        })
    },
    create: async(req,res)=>{
        const result = await Todo.create(req.body)

        if(!result){
            res.errorStatusCode = 400
            throw new Error("Data is not created, something went wrong")
        }

        res.status(200).send({
            error:false,
            result
        })
    },
    read: async(req,res)=>{
        const result = await Todo.findById(req.params.id)

        if(!result){
            res.errorStatusCode = 404
            throw new Error("Data is not found, something went wrong")
        }

        res.status(200).send({
            error:false,
            result
        })
    },
    update: async(req,res)=>{
        const result = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})

        if(!result){
            res.errorStatusCode = 400
            throw new Error("Data is not updated, something went wrong")
        }

        res.status(200).send({
            error:false,
            result
        })
    },
    delete: async(req,res)=>{
        const {deletedCount} = await Todo.deleteOne({_id:req.params.id})

        if(!deletedCount){
            res.errorStatusCode = 404
            throw new Error("Data is not found or something went wrong")
        }else{
            res.sendStatus(204)
        }
    }
}