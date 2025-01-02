const express = require("express");
require("dotenv").config();
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");

const app = express();

app.use(express.json());
app.use("/api", require('./routes/contact.routes'));
app.use("/api/users", require('./routes/user.routes'));
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    await connectDb();
    console.log("Server started");
})