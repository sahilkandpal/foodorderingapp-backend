const express = require("express");
const router = express.Router();

router.get("/all", (req,res)=>{res.json({"name": "sahil"})});

module.exports = router;