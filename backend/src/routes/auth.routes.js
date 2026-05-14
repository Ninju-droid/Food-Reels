const express = require('express');
const authcontroller = require('../controllers/auth.controller');
const router = express.Router();

router.post('/user/register', authcontroller.registerUser);
router.post('/user/loginUser', authcontroller.loginUser);
router.get('/user/logoutUser', authcontroller.logoutUser);

router.post('/foodpartner/register', authcontroller.registerFoodPartner);
router.post('/foodpartner/login', authcontroller.loginFoodPartner);
router.get('/foodpartner/logout', authcontroller.logoutFoodPartner);

module.exports = router;

