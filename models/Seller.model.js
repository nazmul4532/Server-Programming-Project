const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    profile_image: {
        type: String,
        default: 'avatar.png',
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    ordersFulfilled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    type: {
        type: String,
        default: 'seller',
    },
    verificationToken: {
        type: String,
    },
    verifiedStatus: {
        type: Boolean,
        default: false,
    },
    resetToken: {
        type: String,
    },
    resetTokenExpiry: {
        type: Date,
    },
});

const Seller = mongoose.model("Seller", SellerSchema);
module.exports = Seller;
