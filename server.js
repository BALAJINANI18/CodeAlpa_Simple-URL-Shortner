const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/", urlRoutes);

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});