const mongoose = require("mongoose");
const { schema } = require("./restaurantModel");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        unique: true,
    },
    userRole: {
        type: String,
        enum: ["consumer", "merchant", "rider"],
        required: true
    },
    email:{
        type: String,
        unique: true,
    },
    address: {
        type: Schema.Types.ObjectId,
        required: true,
    }
})

module.exports = mongoose.model("user", userSchema);