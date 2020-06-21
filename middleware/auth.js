const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    // Get the token form header

    const token = req.header('x-auth-token')

    //Check for the token
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'))
        req.user = decoded.user
        next()

    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });

    }
}