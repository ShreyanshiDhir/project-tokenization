const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
//User Model
const User = require("../models/User");

//@route	POST api/user
//@desc		Create a new user
//@access	PUBLIC
router.post(
	"/",
	[
		body("name").isString().notEmpty(),
		body("email").isEmail(),
		body("password").isLength({ min: 5 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(400).json({ errors: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
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
				name,
				email,
				password,
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			const payload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 },(err,token)=>{
				if(err)throw err;
				res.json({token});
			});
		} catch (err) {
			console.log(err.message);
			res.status(400).send('server error');
		}
	}
);

module.exports = router;
