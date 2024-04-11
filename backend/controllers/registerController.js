const User = require('../model/Users');
const bcrypt = require('bcryptjs');

const handleNewUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !password || !email) return res.status(400).json({ 'message': 'Username, email, and password are required.' });

    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409);  

    try {
        const hashedPwd = await bcrypt.hash(password, 10);

        const result = await User.create({
            "username": username,
            "email": email,
            "password": hashedPwd
        });
        const userInfo = await User.findOne({ email: email }, {email: 1, username: 1, _id: 1}).exec();
        res.status(201).json(userInfo);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };