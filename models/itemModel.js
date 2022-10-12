const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: string, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "restaurant",
        required: true,
    }
})

module.exports = mongoose.model("item", itemSchema);
