const aysncHandler = require("express-async-handler");
const User = require('../models/contact.model');

const getContact = aysncHandler(async (req, res) => {
    const user = await User.find();
    res.status(200).json(user);
});

const createNewContact = aysncHandler(async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.create({
        name: name,
        email: email
    })
    res.status(200).json(user);
});

const updateContact = aysncHandler(async (req, res) => {
    res.status(200).json("update contacts")
});

const getContactById = aysncHandler(async (req, res) => {
    res.status(200).json("get contacts by Id")
});

const deleteContactById = aysncHandler(async (req, res) => {
    res.status(200).json("delete contact by Id")
});

module.exports = { getContact, createNewContact, getContactById, deleteContactById, updateContact }