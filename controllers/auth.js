const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


/** User Login */
async function user_login(req, res, next) {
    try {
        //check for email existance
        console.log(req.body);
        let user = await User.findAll({ where : { email: req.body.email } })
        if (user.length < 1) {
            return res.send(Response.sendResponse(false, "", CUSTOM_MESSAGE.NO_SUCH_EMAIL, STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        //comapre password
        let result = await bcrypt.compareSync(req.body.password, user[0].password)
        if (result) {
            console.log(result);
            //jwt token create
            const token = jwt.sign(
                {
                    username: user[0].username,
                    userId: user[0].id
                },
                ENVCONFIG.jWT_KEY,
                {
                    expiresIn: "1h"
                }
            );
            return res.send(Response.sendResponse(true, { "token": token }, CUSTOM_MESSAGE.LOGIN_SUCCESS, STATUS_CODE.OK));
        } else {
            return res.send(Response.sendResponse(false, "", CUSTOM_MESSAGE.INCORRECT_PASSWORD, STATUS_CODE.INTERNAL_SERVER_ERROR));
        }
    } catch (error) {
        console.log(error);
        return res.send(Response.sendResponse(false, "", error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}


/** Check User exist or not */
async function user_exist(req, res, next) {
    try {
        //validation check
        const validationResult = Joi.validate(req.body, UserValidation.user_exist);
        if (validationResult.error) {
            return res.send(Response.sendResponse(false, null, validationResult.error.details[0].message, STATUS_CODE.INTERNAL_SERVER_ERROR));
        }
        //check weather user already exist or not by email
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.send(Response.sendResponse(false, "", CUSTOM_MESSAGE.EMIAL_ALREADY_EXIST, STATUS_CODE.INTERNAL_SERVER_ERROR));
        }
        else {
            return res.send(Response.sendResponse(true, "", CUSTOM_MESSAGE.NO_SUCH_EMAIL, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, "", error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

exports.user_login = user_login;
exports.user_exist = user_exist;