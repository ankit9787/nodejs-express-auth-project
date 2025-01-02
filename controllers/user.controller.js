const aysncHandler = require("express-async-handler");
const UserAdmin = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registerUser = aysncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    //hash password
    const pass = await bcrypt.hash(password, 10);
    const user = await UserAdmin.create({
        username: username,
        email: email,
        password: pass
    });
    if (user) {
        res.status(200).json({
            user: user.id
        })
    }
});

const loggedInUser = aysncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserAdmin.findOne({ email });
    //compare pass
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN,
        {
            expiresIn: "1m"
        }
    )
        res.status(200).json({ accessToken })
    }
});

const currentUser = aysncHandler(async (req, res) => {
    // const user = await UserAdmin.findOne({ email });
    res.status(200).json(req.user);
});


module.exports = { registerUser, loggedInUser, currentUser };