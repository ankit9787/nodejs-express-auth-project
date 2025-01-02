const aysncHandler = require("express-async-handler");
const req = require("express/lib/request");
const jwt = require('jsonwebtoken');

const validateToken = aysncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if(authHeader){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if(err){
                throw new Error("Wrong error")
            }
            console.log(decoded.user);
            req.user = decoded.user;
            next();
        })
    }

});

module.exports = validateToken;