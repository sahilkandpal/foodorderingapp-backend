const restaurantModel = require("../models/restaurantModel");

getAllRestaurants = async (req, res, next) => {
    res.status(200).json({demo: "hello world"});
};

module.exports = {
    getAllRestaurants
};