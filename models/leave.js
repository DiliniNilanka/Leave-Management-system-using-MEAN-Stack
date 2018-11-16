const mongoose = require('mongoose');
const schema = mongoose.Schema;

const leaveSchema = new schema({

	email:{type:String,required:true},
	name:{type:String,required:true},
	leavestart:{type:String,required:true},
	leaveend:{type:String,required:true},
	leavetype:{type:String,required:true},
	comment:{type:String,required:true},
	state:{type:String,required:true}
	//Approveddate:{type:Date}

});

module.exports = mongoose.model("Leave",leaveSchema);

module.exports.saveLeave = function(newLeave,callback){

	newLeave.save(callback);

};