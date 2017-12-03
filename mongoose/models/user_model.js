// user_model.js

//require mongoose.js node module
var mongoose = require('mongoose');

//create a schema for data model
var userSchema = new mongoose.Schema({
	name: String,
	username: {type: String, unique: true, required:true},
	password: {type: String, required: true},
	admin: Boolean,
	location: String,
	meta:{
		age: Number,
		website: String
	},
	created_at: Date,
	updated_at: Date,
});

//custom method TCSer
userSchema.methods.TCSer = function(){
	
	this.name = this.name+' - TCS Associate';
	return this.name;
}; 

// create a model to use the schema
var User = mongoose.model('User', userSchema);

//make this model available to users in this node application
module.exports = User;
