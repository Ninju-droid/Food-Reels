const foodModel = require('../models/food.model');
const orderModel = require('../models/order.model');

async function createOrder(req, res) {
    try {
        const { foodId, quantity = 1, address, phone } = req.body || {};

        if (!foodId || !address || !phone) {
            return res.status(400).json({
                message: 'Food, address and phone are required'
            });
        }

        const food = await foodModel.findById(foodId);

        if (!food) {
            return res.status(404).json({
                message: 'Food item not found'
            });
        }

        const order = await orderModel.create({
            user: req.user._id,
            food: food._id,
            foodPartner: food.foodPartner,
            quantity,
            address,
            phone,
            totalAmount: (food.price || 0) * quantity
        });

        const populatedOrder = await orderModel.findById(order._id)
            .populate('food')
            .populate('foodPartner', 'name email');

        res.status(201).json({
            message: 'Order placed successfully',
            order: populatedOrder
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong: ' + err.message });
    }
}

async function getUserOrders(req, res) {
    try {
        const orders = await orderModel.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .populate('food')
            .populate('foodPartner', 'name email');

        res.status(200).json({
            message: 'Orders fetched successfully',
            orders
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong: ' + err.message });
    }
}

async function getPartnerOrders(req, res) {
    try {
        const orders = await orderModel.find({ foodPartner: req.foodPartner._id })
            .sort({ createdAt: -1 })
            .populate('food')
            .populate('user', 'fullName email');

        res.status(200).json({
            message: 'Partner orders fetched successfully',
            orders
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong: ' + err.message });
    }
}

async function updateOrderStatus(req, res) {
    try {
        const { status } = req.body || {};
        const allowedStatuses = ['placed', 'accepted', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: 'Invalid order status'
            });
        }

        const order = await orderModel.findOneAndUpdate(
            {
                _id: req.params.orderId,
                foodPartner: req.foodPartner._id
            },
            { status },
            { new: true }
        ).populate('food').populate('user', 'fullName email');

        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        res.status(200).json({
            message: 'Order status updated successfully',
            order
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong: ' + err.message });
    }
}

module.exports = {
    createOrder,
    getUserOrders,
    getPartnerOrders,
    updateOrderStatus
};
