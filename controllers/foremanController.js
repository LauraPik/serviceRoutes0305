const Services = require('../models/servicesModel');
const Foreman = require('../models/foremanModel');




exports.createForeman = async (req, res) =>{
   
    try{
        const newForeman = await Foreman.create(req.body);
        res.status(201).json({
            status: "success",
            message: "New foreman is created",
            data: {
                newForeman
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}

exports.updateForeman = async (req, res) =>{
    try{
        const service = await Foreman.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "Foreman is updated",
            data: {service}
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            message:err.message
        })
    }
}

exports.deleteForeman = async (req, res) =>{
    try{
        await Foreman.findByIdAndDelete(req.params.id)
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
