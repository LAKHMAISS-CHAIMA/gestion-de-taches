const mongoose = require("mongoose");
const api = require("./routes/tasks");
const task = require("./models/Task");



mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log(" connected succesfuly");
}).catch((err) => {
    console.log("failed to connect");

})






