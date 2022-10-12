const express = require("express");
const { config } = require("dotenv");
const connectDB =  require("./config/db");
const restaurantRouter = require("./routes/restaurant.routes");

config();
connectDB();
const app = express();

app.use("/api/restaurant", restaurantRouter);

const PORT = process.env.PORT;
app.listen(5000, console.log(`server started on port ${PORT}`));