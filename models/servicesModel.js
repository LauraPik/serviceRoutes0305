const mongoose = require("mongoose")


const ServicesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "A service must have a name"],
        unique: true,
    },
    address:{
        type:String,
        required:[true, 'must have an address'],
    },
    manager:{
        type:String,
        required:[true, 'must have a manager'],
    },
    foreman:[
        {type: mongoose.Schema.ObjectId,
            ref:"Foreman"
        } 
    ]
    

})

ServicesSchema.pre(/^find/, function(next){
    this.populate({
        path:"foreman",
        select:""
    })
    next()
})


const Services = mongoose.model('Services', ServicesSchema)

module.exports = Services