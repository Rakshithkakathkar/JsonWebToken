const express = require('express');

//import route
const authRoute = require('./routes/auth');

const app = express();

app.use('/api/user', authRoute);

app.listen(3000, (req, res) => {
    console.log("Server is up and running");
});