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
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: 'Fresh meal'
    },
    location: {
        type: String,
        default: 'Near you'
    },
    cookTime: {
        type: String,
        default: '20-30 min'
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "foodPartner"
    }
}, {
    timestamps: true
})

const foodModel = mongoose.model("food",foodSchema);

module.exports = foodModel ; 
