const mongoose = require('mongoose');
const schema = mongoose.Schema;

const newlSchema = new schema({
	reg_no:{type:String},
	name:{type:String},
	lstart:{type:String},
	lend:{type:String},
	ltype:{type:String},
	comment:{type:String},
	state:{type:String},
	available_casual:{type:Number},
	available_sick:{type:Number},
	days:{type:Number},
	app_day:{type:String}
});

module.exports = mongoose.model("NewLeave",newlSchema);

module.exports.saveL = function(newL, callback){
	newL.save(callback);
};