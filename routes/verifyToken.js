const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    console.log('verify token middleware ran!');
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied !');
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        console.log('user authenticated :', req.user);
        next();
    } catch (error) {
        res.status(400).send('Invalid Token !');
    }
}