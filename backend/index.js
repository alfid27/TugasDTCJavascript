const express = require('express') 
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const port = 8000;
let apiRouters = require ('./api-routers/router');

app.get('/', (req, res) => res.send('Hello World!'))

// configure bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//connect to mongodb and configure
mongoose.connect ('mongodb://localhost/backend')
var db = mongoose.connection;

// app apiroutes
app.use('/api', apiRouters);

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});