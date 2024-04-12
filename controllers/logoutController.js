const User = require('../model/Users');

const handleLogout = async (req, res) => {
    const cookie = req.headers.cookie;
    const refreshToken = cookie && cookie.split('jwt=')[1];

    if (!refreshToken) return res.sendStatus(204); 
    
    const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, });
        return res.sendStatus(204);
    }

    foundUser.refreshToken = '';
    const result = await foundUser.save();
    

    res.clearCookie('jwt', { httpOnly: true});
    res.sendStatus(204);
}

module.exports = { handleLogout }