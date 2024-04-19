const Users = require('../model/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
	const { email, pwd } = req.body;
	if (!email || !pwd) return res.status(400).json({ 'message': 'User email and password are required.' });

	const foundUser = await Users.findOne({ email: email }).exec();
	if (!foundUser) return res.sendStatus(401).json({"message": "You should sign up first."}); 
	
	if(!foundUser.emailVerification.verified) return res.status(400).json({"message": "You should verify your email first."})
	
	const match = await bcrypt.compare(pwd, foundUser.password);

	if (match) {
		const roles = Object.values(foundUser.roles).filter(Boolean);
		
		const accessToken = jwt.sign(
			{
				"UserInfo": {
						"email": foundUser.email,
						"roles": roles
				}
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '15m' }
		);
		const refreshToken = jwt.sign(
				{ "email": foundUser.email },
				process.env.REFRESH_TOKEN_SECRET,
				{ expiresIn: '30d' }
		);
		
		foundUser.refreshToken = refreshToken;
		const result = await foundUser.save();
		res.cookie('jwt', refreshToken, { 
			httpOnly: true, 
			sameSite: "None",
			secure: true,
			maxAge: 30 * 24 * 60 * 60 * 1000});// 30 * 24 * 60 * 60 * 1000
		
		const {username, email, _id} = foundUser 
		res.json({_id, username, email, accessToken });

	} else {
			res.sendStatus(401);
	}
}

module.exports = { handleLogin };