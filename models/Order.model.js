const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer', // Reference to the Buyer model
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller', // Reference to the Seller model
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Processing",
    },
    deliveredAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Order", orderSchema)
