const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "address",
        required: true
    },
    tags: {
        type: String,
        required: true,
    },
    minOrderAmount: {
        type: Number,
        required: true,
    },
    costForOne: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    items: {
        type: [Schema.Types.ObjectId],
        required: true,
    }
});

module.exports = mongoose.model("restaurant", restaurantSchema);

