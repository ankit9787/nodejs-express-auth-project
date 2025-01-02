const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide value']
    },
    email: {
        type: String,
        required: [true, 'please provide value']
    }
},
    { timestamps: true });

module.exports = mongoose.model("User", userSchema);