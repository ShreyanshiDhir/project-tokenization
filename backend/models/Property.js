const mongoose = require("mongoose");
const PropertySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: "null",
	},
	description: {
		type: String,
		required: true,
		default: "No Description provided",
	},
	image: {
		type: String,
		required: true,
		default: "",
	},
	tokenValue: {
		type: mongoose.SchemaTypes.Decimal128,
		required: true,
		default: 0.100,
	},
	initialSupply: {
		type: mongoose.SchemaTypes.Decimal128,
		required: true,
		default: 10,
	},
	symbol: {
		type: String,
		required: true,
	},
	tokenAddress: {
		type: "String",
		required: true,
	},
	crowdsaleAddress: {
		type: "String",
		required: true,
	},
	owner : {
		type : mongoose.Schema.Types.ObjectId,
		ref : "user"
	}
});

module.exports = Property = mongoose.model("property", PropertySchema);
