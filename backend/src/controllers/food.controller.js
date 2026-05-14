const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service')
const { v4: uuid } = require('uuid');

async function createFood(req, res) {

    console.log(req.foodPartner);

    console.log(req.body)
    console.log(req.file);

    try {
        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

        const foodItem = await foodModel.create({
            name : foodName,
            video : fileUploadResult.url,
            description : req.body.description,
            foodPartner : req.foodPartner._id
        });

        res.status(201).json({
            message: "Food item securely added to the database!",
            foodItem: foodItem 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong: " + err.message });
    }
}

async function getAllFood(req,res) {
    try{
        const foodItems = await foodModel.find();
        res.status(200).json({
            message: "Food items fetched successfully!",
            foodItems: foodItems
        });
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Something went wrong: " + err.message });
    }
}
    
module.exports = {
    createFood,
    getAllFood
}
