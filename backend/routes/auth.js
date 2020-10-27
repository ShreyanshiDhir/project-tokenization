const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const recoverPersonalSignature =  require('eth-sig-util').recoverPersonalSignature;
const bufferToHex = require('ethereumjs-util').bufferToHex;
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
//User Model
const User = require("../models/User");

//@route	GET api/auth
//@desc		Get User from token
//@access	PRIVATE
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json({
			user,
		});
	} catch (err) {
		console.log(err.message);
		res.status(400).send("Server error");
	}
});

//@route	POST api/auth
//@desc		Authenticate User
//@access	Public

router.post(
	"/",
	async (req, res) => {
		const { publicAddress, signature } = req.body;
		if (!signature || !publicAddress)
    	return res
			.status(400)
			.send({ error: "Request should have signature and publicAddress" });
		try {
			let user = await User.findOne({ publicAddress });
			if (!user) {
				return res.status(401).json({
					errors: [
						{
							msg: "No such user",
						},
					],
				});
			}
		const msg = `Nonce : ${user.nonce}`;
		const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
        const address = recoverPersonalSignature({
          data: msgBufferHex,
          sig: signature,
		});
		console.log(address)
		if (address.toLowerCase() === publicAddress.toLowerCase()) {
			user = user;
		}
		else {
			console.log("Signature verification failed");
			user =null;
			return res.status(401).send({ error: 'Signature verification failed' });
			
		}
			const payload = {
				user: {
					id: user.id,
					publicAddress
				},
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(400).send("Server error");
		}
	}
);

module.exports = router;
