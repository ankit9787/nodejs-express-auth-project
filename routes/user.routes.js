const express = require("express");
const { registerUser, loggedInUser, currentUser } = require("../controllers/user.controller");
const validateToken = require("../middleware/validate.user");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loggedInUser);

router.get("/current-user", validateToken, currentUser);

module.exports = router;