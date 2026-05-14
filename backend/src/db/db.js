const mongoose = require('mongoose') ;


function connectDB(){
    mongoose.connect("mongodb+srv://bked:uSO4CkPMhP87p6OX@cluster0.n4aqzz2.mongodb.net/food-view")
    .then(()=>{
        console.log("MongoDB connected"); 
    })
    .catch((err)=>{
        console.log("MongoDB connection error:",err)
    })
}

module.exports = connectDB; 

