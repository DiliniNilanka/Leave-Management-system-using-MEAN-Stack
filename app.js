
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
var jwt = require('jsonwebtoken');

//initialize express
const app = express();
app.use(cors());

//to read application body as a json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

const config = require('./config/database');
const user = require('./routes/users');
require('./config/passport')(passport);

//for database connection
const connection = mongoose.connect(config.database);

if(connection){
	console.log("database connected");
}else{
	console.log("database not connected");
}

//path for static files
app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);



app.get('/',function(req,res){
	res.send("Hello World");
});


app.listen(3000, function(){
	console.log("listening to port 3000");
});