const express = require('express') 
const foodController = require('../controllers/food.controller')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middlewares')

/* POST  /api/food/ [protected] */
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    foodController.createFood);

/* GET  /api/food/ [protected] */
router.get('/',
    authMiddleware.authUserMiddleware,
    foodController.getAllFood);

module.exports = router ; 