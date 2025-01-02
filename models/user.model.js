const mongoose = require("mongoose");

const userAdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide value']
    },
    email: {
        type: String,
        required: [true, 'please provide value']
    },
    password: {
        type: String,
        required: [true, 'please provide value']
    }
},
    { timestamps: true });

module.exports = mongoose.model("UserAdmin", userAdminSchema);