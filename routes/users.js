const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Leave = require('../models/leave');
const L = require('../models/newl');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
const format = require("node.date-time");
const today=new Date().format("Y-M-d");
//console.log(new Date().format("Y-M-d")); // 2016-5-18


//router for register
router.post('/register',function(req,res){

	//create new user object
	const newUser = new User({

		reg_no:req.body.username,
		name:req.body.name,
		email:req.body.email,
		password:req.body.password,
		casualleave:21,
		sickleave:20,
		user_type:"user"

	});


	//create save user function
	User.saveUser(newUser,function(err,user){
		if(err){

			res.json({state:false,msg:"data not inserted"});

		}
		if(user){

			res.json({state:true,msg:"data inserted"});

		}
	})
	
});

//for get new leave

router.post('/newleave',function(req,res){
	const newL = new L({
		reg_no:req.body.reg_no,
		name:req.body.email,
		lstart:req.body.lstart,
		lend:req.body.lend,
		ltype:req.body.ltype,
		comment:req.body.comment,
		state:"false",
		available_casual:req.body.available_casual,
		available_sick:req.body.available_sick,
		days:req.body.days
	});

	L.saveL(newL,function(e,l){

		if(e){
			res.json({state:false,msg:"data not inserted"});
		}
		if(l){
			res.json({state:true,msg:"data inserted"});
		}

	})
});
//for approve leave
router.put('/approvL',function(req,res){
	console.log(req.body.reg_no);
	const casual=req.body.c_l;
	const sick = req.body.s_l;
	const reg_no = req.body.reg_no;
	//res.send("test");
	L.findOneAndUpdate({"_id":req.body.id}, {state:"true", app_day:today}, {upsert:true}, function(err, results){
       if(err){
       	res.json({state:false,msg:"data not updated"});
       }
       else{
        console.log({state:true,msg:"data updated"});
       }
    })
    if(req.body.ltype == "casual"){
    	console.log("casual");
    	User.findOneAndUpdate({reg_no:reg_no}, {$set: {casualleave:casual}}, function(err, results){
    		if(err){
    			console.log("err");
    		}
    		else{
    			console.log("success");
    		}
    	})
    }
    if(req.body.ltype == "sick"){
    	console.log(sick);
    	User.findOneAndUpdate({reg_no:reg_no}, {$set:{sickleave:sick}}, function(err, res){
    		if(err){
    			console.log("err");
    		}
    		else{
    			console.log("success");
    		}
    	})
    }
});
router.put('/rejectL',function(req,res){
	L.findOneAndUpdate({_id:req.body.id},{state:"reject"}, {upsert:true},function(err,results){
		if(err){
			res.json({state:false,masg:"data not updated"});
		}
		else{
			console.log({state:true,mag:"data updated"});
		}
	})
});

//router for login
router.post('/login',function(req,res){

	const email = req.body.email;
	const password = req.body.password;


	//findByEmail function
	User.findByEmail(email,function(err,user){
		if(err) throw err;

		if(!user){
			res.json({state:false,msg:"user not found"});
		}
		User.passwordCheck(password,user.password,function(err,match){

			if(err) throw err;

			if(match){

				const token = jwt.sign({user:user},config.secret,{expiresIn:86400});
				res.json(
					{
						state:true,
						token:"JWT " + token,
						user:{

							id:user._id,
							name:user.name,
							username:user.username,
							email:user.email,
							casualleave:user.casualleave,
							sickleave:user.sickleave,
							reg_no:user.reg_no,
							user_type:user.user_type

						}

					}
				)
			}

		});
	})

});


router.get('/profile',passport.authenticate('jwt',{ session:false}),function(req,res){
	//var token = getToken(req.headers);
	//res.json({user:req.user});
	User.find({}).exec(function(err,user){
  		if(err){
  			console.log(err);
  		}else{
  			console.log(user);
  			res.json(user);
  		}
  	});

});

/*router.post('/getleave',function(req,res){
	const newLeave = new Leave({

		email:req.body.email,
		name:req.body.name,
		leavestart:req.body.leavestart,
		leaveend:req.body.leaveend,
		leavetype:req.body.leavetype,
		comment:req.body.comment,
		state:"false"

	});

	console.log(newLeave);

	Leave.saveLeave(newLeave,function(err,leave){
		if(err){

			res.json({state:false,msg:"data not inserted"});
			console.log(err);

		}
		if(leave){

			res.json({state:true,msg:"data inserted"});

		}

	})
});*/

router.post('/home',function(req,res){
	console.log(req.body.name);
  	L.find({state:"false"}).exec(function(err,leave){

		if(err){
			console.log(err);
		}else{
			res.json(leave);
			console.log(leave);
		}

	});
});

router.post('/searchleave',function(req,res){
	console.log(req.body.date);
	L.find({lstart:req.body.date, state:"true"}).exec(function(err,l){
		if(err){
			console.log(err);
		}else{
			res.json(l);
			console.log("data sent");
		}
	});
});

router.post('/userleave',function(req,res){
	L.find({reg_no:req.body.r_n, state:"true"}).exec(function(err,l){
		if(err){
			console.log(err);
		}else{
			res.json(l);
		}
	});
});

router.post('/userpendingleave',function(req,res){
	L.find({reg_no:req.body.r_n, state:"false"}).exec(function(err,l){
		if(err){
			console.log(err);
		}else{
			res.json(l);
		}
	});
});


router.get('/leaveapprove',function(req,res){

	L.find({state:"true"}).exec(function(err,leave){

		if(err){
			console.log(err);
		}else{
			res.json(leave);
			console.log(leave);
		}

	});

});

router.get('/leavereject',function(req,res){
	L.find({state:"reject"}).exec(function(err,leave){
		if(err){
			console.log(err);
		}else{
			res.json(leave);
			console.log(leave);
		}
	});
});

router.post('/getprofile',function(req,res){
	User.find({email:req.body.email}).exec(function(err,u){
		if(err){
			console.log(err);
		}else{
			res.json(u);
		}
	});
});

router.get('/myprofile',function(req,res){

	/*User.find({email:"nilanka@gmail.com"}).exec(function(err,user){
  		if(err){
  			console.log(err);
  		}else{
  			console.log(user);
  			res.json(user);
  		}
  	});*/


});



router.get('/',function(req,res){
	res.send("Hello Users");
});

module.exports = router;