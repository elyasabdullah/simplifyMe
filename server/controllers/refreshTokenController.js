const User = require('../model/Users');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    // const cookie = req.headers.cookie;
    // const refreshToken = cookie && cookie.split('jwt=')[1];
    const refreshToken = req.cookies.jwt;

    if (!refreshToken) return res.sendStatus(401);

    const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); // Forbidden

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
        
        const roles = Object.values(foundUser.roles);
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": decoded.email,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10s' }
        );

        res.json({ roles, accessToken });
    });
}

module.exports = { handleRefreshToken }