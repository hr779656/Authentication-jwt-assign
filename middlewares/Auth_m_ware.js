const AuthMware = require('../model/auth_Schema');
const Jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyUser = async (req, res, next) => {
    const { email } = req.body;
    const token = req.headers['x-access-token'];

    const checked_user = await AuthMware.findOne({ where: { email: email } });

    if (checked_user) {
        if (token) {
            const checked_token = Jwt.verify(token, process.env.SECRETKEY);
            if (checked_token.email === email) {
                // User already registered and has generated a valid token
                res.send('User is already registered and has generated a valid token.');
            } else {
                res.send('User is already registered, but the provided token does not match.');
            }
        } else {
            res.send('User is already registered, but no token was provided.');
        }
    } else {
        next();
    }
}

module.exports = { verifyUser };