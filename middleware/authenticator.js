const User = require('../models/User');
const createError = require('http-errors');

const auth = async (req, res, next) => {
    try {
        let token = req.headers.auth-token && req.cookies.auth-token;
        if(!token) throw new createError.Unauthorized(); // fetch from headers
        const user = await User.findByToken(token);
        if (!user) throw new createError.NotFound();
        next();
    } catch (e) {
        next(e);
    }
};

module.exports = auth;