const dotenv = require("dotenv").config();
const express = require("express");
// const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoute = require("./routes/taskRoute")

const app = express();

// middleware example
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(taskRoute)

// const logger = (req, res, next) => {
//     console.log("Middleware ran");
//     console.log(req.method);
//     next()
// };

// routes
app.get("/", (req, res) => {
res.send("Home page");
});



const PORT = process.env.PORT || 5000;

//  second method to connect mongo database
mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})

// first method to connect mongo database
// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// startServer();
