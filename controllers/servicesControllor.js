const Services = require('../models/servicesModel')
const APIFeatures = require('./../utils/apiTools')

exports.getAllServices = async (req, res)=>{
    console.log(req.query) 
    try{
        const ServicesData =  new APIFeatures(Services.find(), req.query)
        .filter()
        .sort()
        .paginate()
        const services = await ServicesData.query;
     
        res.status(200).json({
            status: "success",
            results: services.length,
            data: {
                services
            }
        })
    }catch(err){
        res.status(404).json({
            status: "failed",
            message: err.message
        })
    }
}


exports.createService = async (req, res) =>{
   
    try{
        const newService = await Services.create(req.body)
        res.status(201).json({
            status: "success",
            message: "New service is created",
            data: {
                newService
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}


exports.getService = async (req, res)=>{
    try{
        // populate
        const service = await Services.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {service}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}

exports.updateServices = async (req, res) =>{
    try{
        const service = await Services.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "Service is updated",
            data: {service}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}


exports.deleteService = async (req, res) =>{
    try{
        await Services.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message: "Service is deleted",
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err
        })
    }
}
