const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
	nonce: {
		type: Number,
		required : true,
		default : () => Math.floor(Math.random() * 1000000) //initialize it with a random nonce
	},
	name: {
		type: String,
		required: true,
		default : "Pranav"
	},
	publicAddress: {
		type: String,
		required: true,
		unique : true
	},
	email : {
		type : String,
		required : true,
	}

});

module.exports = User = mongoose.model("user", UserSchema);
