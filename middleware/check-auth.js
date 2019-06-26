const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //console.log(req.headers.authorization)
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, ENVCONFIG.jwtKey);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.send(Response.sendResponse(false, "", CUSTOM_MESSAGE.AUTH_FAILED, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
};