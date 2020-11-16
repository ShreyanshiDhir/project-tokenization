const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
//Property Model
const Property = require("../models/Property");

//@route	GET api/property
//@desc		Get all properties
//@access	PRIVATE
router.get("/",auth,async (req,res)=>{
	try {
		const properties = await Property.find(); //Get all properties
		res.json({
			properties
		})
	} catch (err) {
		console.log(err.message);
		res.status(400).send("Server error");
	}
})

//@route	GET api/property/:id
//@desc		Get individual property
//@access	PRIVATE
router.get("/:id",auth,async (req,res)=>{
	try {
		const property = await Property.findById(req.params.id); //Get all properties
		res.json({
			property
		})
	} catch (err) {
		console.log(err);
		res.status(400).send("Server error");
	}
})

//@route	POST api/property
//@desc		Create a new property token
//@access	PRIVATE
router.post("/",auth, async (req, res) => {
	try {
		
		property = new Property({
			name: req.body.name,
			description: req.body.description,
			image: req.body.image,
			tokenValue: req.body.tokenValue,
			initialSupply: req.body.initialSupply,
			symbol: req.body.symbol,
			tokenAddress: req.body.tokenAddress,
			crowdsaleAddress: req.body.crowdsaleAddress,
			owner: req.body.owner,
		});
		await property.save();
		res.json({ property });
	} catch (err) {
		console.log(err.message);
		res.status(400).send("server error");
	}
});
module.exports = router;