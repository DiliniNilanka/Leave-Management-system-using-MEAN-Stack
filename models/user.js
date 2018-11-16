const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const userSchema = new schema({

	reg_no:{type:String,required:true},
	name:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
	casualleave:{type:Number,required:true},
	sickleave:{type:Number,required:true},
	user_type:{type:String}

});

const User = module.exports = mongoose.model("User",userSchema);

//saveUser function
module.exports.saveUser = function(newUser,callback){

	//to hash password
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password,salt,function(err,hash){
			//to get password as a hash password
			newUser.password = hash;

			//if(err) throw err;
			//to save newUser to database
			newUser.save(callback);
		});
	});

};
module.exports.saveUser1 = function(newUser,callback){
	newUser.save(callback);
};

//findByEmail function
module.exports.findByEmail = function(email,callback){

	const query = {email:email};
	User.findOne(query,callback);

};

//passwordCheck function
module.exports.passwordCheck = function(plainpassword,hash,callback){

	bcrypt.compare(plainpassword,hash,function(err,res){

		if(err) throw err;
		if(res){
			callback(null,res);
		}

	});
};

//findUserById function
module.exports.findUserById = function(id,callback){

	User.findOne(id,callback);

};