const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
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

//@route	POST api/user
//@desc		Create a new user
//@access	PUBLIC
router.post("/", async (req, res) => {
	try {
		let user = await User.findOne({
			publicAddress: req.body.publicAddress,
		});
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
			name: req.body.name,
			email: req.body.email,
			publicAddress: req.body.publicAddress,
		});
		await user.save();
		res.json({ user });
	} catch (err) {
		console.log(err.message);
		res.status(400).send("server error");
	}
});

//@route	PUT api/user
//@desc		Add a new token in user's portfolio
//@access	PRIVATE
router.put("/",auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id);
		user.tokens.push(req.body);
		user.save();
		res.json({user});
	} catch (err) {
		console.log(err.message);
		res.status(400).send("Server error");
	}
});

module.exports = router;
