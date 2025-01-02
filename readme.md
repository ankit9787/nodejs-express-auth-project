Basic Nodejs Project

- Server.js is main entry file, consist of port and path to route file using app.use middleware
- Routes folder consist of routes of project
- Controller - contains logic for request and response and even connection to DB
- bodyParser as middleware is needed to read json in post or put request by using app.use(express.json());
- error handler middleware to handle error at global level
- asyn handler to handler all aysnc request 
- Setup account in mongoose atlas
- create a Db connect configuration and request same in server.js
- By using model class we can perform CRUD operation
- now we have user activities like register. login etc
- Using bcrypt lib for crypting password and saving
- for login, setup and check password using bcrypt compare password and returing  jwt token
- now we have jwt token, we gonna use it to encrypt other APIs