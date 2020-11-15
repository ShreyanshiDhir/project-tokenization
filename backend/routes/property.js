const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
//Property Model
const Property = require("../models/Property");

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

router.post("/",(req,res)=> {
	res.send("yo");
})

router.get("/:id",auth,async (req,res)=>{
	try {
		const property = await Property.findById(req.params.id); //Get all properties
		res.json({
			property
		})
	} catch (err) {
		console.log(err.message);
		res.status(400).send("Server error");
	}
})
module.exports = router;