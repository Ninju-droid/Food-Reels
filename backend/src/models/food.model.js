const mongoose = require('mongoose') ; 
const foodPartnerModel = require('./foodpartner.model');

const foodSchema = new mongoose.Schema({
    name:{
        type:String, 
        require : true
    },
    video : {
        type :String,
        require : true 
    },
    description : {
        type : String , 
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "foodpartner"
    }
})

const foodModel = mongoose.model("food",foodSchema);

module.exports = foodModel ; 