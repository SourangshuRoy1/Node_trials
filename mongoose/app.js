// app.js

//require mongoose.js node module
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:myDb');
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds129156.mlab.com:29156/mlab_mongodb');
//mongoose.connect('mongodb://SourangshuRoy:Roy@25923166@ds129156.mlab.com:29156/mlab_mongodb');

//require the model
var User = require('./models/user_model');

// create new user

var employee = new User({
	name: 'Sourangshu Roy',
	username: 'sourangshu.roy@tcs.com',
	password: 'tcs'
});

employee.TCSer(function(err, name){
	if(err) throw err;
	console.log('Welcome to TCS Family, you will be called '+name);
});

employee.save(function(err){
	if(err) throw err;
	console.log("Data saved");
});
