const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
//User Model
const User = require("../models/User");
//@route	GET api/user
//@desc		get user from public key
//@access	PUBLIC
router.get("/", async (req, res) => {
	try {
		const user = await User.findOne({
			publicAddress: req.query.publicAddress,
		});
		console.log(user);
		res.json({
			user,
		});
	} catch (err) {
		console.log(err.message);
		res.status(400).send("Server error");
	}
});

router.post("/", async (req, res) => {
	try {
		let user = await User.findOne({ publicAddress : req.body.publicAddress });
		if (user) {
			return res.status(400).json({
				errors: [
					{
						msg: "User already exists",
					},
				],
			});
		}
		user = new User({
			name : req.body.fname,
			publicAddress: req.body.publicAddress,
		});
		await user.save();
		res.json({user});
	} catch (err) {
		console.log(err.message);
		res.status(400).send("server error");
	}
});

module.exports = router;
