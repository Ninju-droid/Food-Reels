const express = require('express') ; 
const cookieParser = require('cookie-parser') ;
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


const app = express() ; 
app.use(cookieParser());
app.use(express.json());
app.use(upload.single('video'));
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

module.exports = app ; 
