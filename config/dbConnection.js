const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Db Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;