const mongoose = require("mongoose");
const validator = require("validator");

const foremanSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please tell us your name"],
      },
    surname:{
        type: String,
        required: [true, "Please tell us your name"],

    },
    specialization:{
        type:String,
        required:[true, 'Tell us your field of specialisation'],
        enum:{
            values:["mechanic", "electrician", "adminstrator"]
        }
    },
    photo: {
        type: String,
      },
    city:{
        type: String,
        required: [true, "Please enter the city"],
    },
    service:{
        type: mongoose.Schema.ObjectId,
        ref: "Services",
        required:[true, 'must have a service']
    },
    wouldRecomend:{
        type: Boolean,
        default: false
    }
})



const Foreman = mongoose.model('Foreman', foremanSchema)

module.exports = Foreman