const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    },
    mainImage: {
        type: String,
        default: 'product.png',
    }, // Store the path of the main image
    images: {
        type: [String],
        default: [],
    },
    videos: {
        type: [String],
        default: [],
    },
    categories: [String],
    // reviews: [{
    //     text: String,
    //     rating: Number,
    //     buyer: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Buyer',
    //     },
    //     timestamp: {
    //         type: Date,
    //         default: Date.now,
    //     },
    // }],
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
