require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

const dbUrl = 
"mongodb+srv://weblog:"+process.env.MONGO_PASSWORD+"@cluster0.bljvk.mongodb.net/weblog";
//   "mongodb+srv://weblog:" +
//   process.env.MONGO_PASSWORD +
//   "@cluster0.bljvk.mongodb.net/weblog";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
});