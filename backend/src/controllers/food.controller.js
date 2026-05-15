const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service')
const { v4: uuid } = require('uuid');

async function createFood(req, res) {
    try {
        const { name, description, price, category, location, cookTime } = req.body || {};

        if (!name || !description || !req.file) {
            return res.status(400).json({
                message: "Food name, description and preparation video are required"
            });
        }

        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

        if (!fileUploadResult || !fileUploadResult.url) {
            return res.status(500).json({
                message: "Video upload failed"
            });
        }

        const foodItem = await foodModel.create({
            name : name,
            video : fileUploadResult.url,
            description : description,
            price: Number(price) || 0,
            category: category || 'Fresh meal',
            location: location || 'Near you',
            cookTime: cookTime || '20-30 min',
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
        const foodItems = await foodModel.find()
            .sort({ createdAt: -1 })
            .populate('foodPartner', 'name email');
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
