const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const coordinatesSchema = new Schema({
    lat: Number,
    long: Number
});

const addressSchema = new Schema({
    addressLine: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true
    },
    coordinates: {
       type: coordinatesSchema,
       required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

module.exports = mongoose.model("address", addressSchema);
