const mongoose = require("mongoose");
const PropertySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default : "Pranav"
	},
	// contractAddress: {
	// 	type: String,
	// 	required: true,
	// 	unique : true
	// },

	//Owner
	//Total Value
	//decide all this
});

module.exports = Property = mongoose.model("property", PropertySchema);
