const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const BuyerSchema = new mongoose.Schema({
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
    address: {
        type: String,
    },
    profile_image: {
        type: String,
        default: '',
    },
    images: {
        type: [String],
        default: [],
    },
    googleId: {
        type: String,
        unique: true,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buy',
    }],
    type: {
        type: String,
        default: 'buyer',
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

BuyerSchema.plugin(findOrCreate);

const Buyer = mongoose.model("Buyer", BuyerSchema);



module.exports = Buyer;
