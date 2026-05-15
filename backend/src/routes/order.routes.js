const express = require('express');
const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/', authMiddleware.authUserMiddleware, orderController.createOrder);
router.get('/me', authMiddleware.authUserMiddleware, orderController.getUserOrders);
router.get('/partner', authMiddleware.authFoodPartnerMiddleware, orderController.getPartnerOrders);
router.patch('/:orderId/status', authMiddleware.authFoodPartnerMiddleware, orderController.updateOrderStatus);

module.exports = router;
