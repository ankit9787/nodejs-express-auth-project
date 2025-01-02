const express = require("express");
const { getContact, createNewContact, updateContact, getContactById, deleteContactById } = require("../controllers/contact.controller");
const router = express.Router();

router.route('/').get(getContact).post(createNewContact);

router.route('/:id').put(updateContact).get(getContactById).delete(deleteContactById);

module.exports = router;