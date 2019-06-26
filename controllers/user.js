var bcrypt = require('bcryptjs');

/** Import Models */
const User = require("../models/user");
const UserValidation = require("../validations/user");

/** Get Users */
async function get_users(req, res, next) {
    try {
        const all_users = await User.findAll();
        
        return res.send(Response.sendResponse(true, all_users, CUSTOM_MESSAGE.GET_ALL_RECORDS, STATUS_CODE.OK));
    } catch (error) {
        console.log(error);
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Add User */
async function add_user(req, res, next) {
    try {
        /** make email string in to lowercase */ 
        req.body.email = req.body.email.toLowerCase();


        /** check for email existance  */
        let user = await User.findAll({
            where: {
                email: req.body.email
            }
        });

        /** Check If email already exists */
        if (user.length >= 1) {
            return res.send(Response.sendResponse(false, null, CUSTOM_MESSAGE.EMIAL_ALREADY_EXIST, STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Encrypt password */
        var salt = await bcrypt.genSaltSync(10);
        req.body.password = await bcrypt.hashSync(req.body.password, salt);

        let result = await User.create(req.body);
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": result._id }, CUSTOM_MESSAGE.RECORD_CREATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Edit User */
async function edit_user(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id present */
        if (!id){
            return res.send(Response.sendResponse(false, null, "id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** make email string in to lowercase */ 
        req.body.email = req.body.email.toLowerCase();

        /** Check id present in the database */
        let user = await User.findAll({
            where: {
                id: id
            }
        });

        if (!user.length){
            return res.send(Response.sendResponse(false, null, "user not found.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }
    
        /** check for email existance  */

        if (user.email != req.body.email) {
            let emailExists = await User.findAll({
                where: {
                    email: req.body.email,
                    id: {
                        [Sequelize.Op.ne] : id
                    }
                }
            });
    
            /** Check If email already exists */
            if (emailExists.length >= 1) {
                return res.send(Response.sendResponse(false, null, CUSTOM_MESSAGE.EMIAL_ALREADY_EXIST, STATUS_CODE.INTERNAL_SERVER_ERROR));
            }
        }

        /** Encrypt password */
        var salt = await bcrypt.genSaltSync(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let result = await User.update(req.body, { where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_UPDATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Delete User */
async function delete_user(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id present */
        if (!id){
            return res.send(Response.sendResponse(false, null, "id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Check id present in the database */
        let user = await User.findAll({
            where: {
                id: id
            }
        });

        if (!user.length){
            return res.send(Response.sendResponse(false, null, "user not found.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }


        let result = await User.destroy({ where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_DELETED_SUCCESS, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

exports.get_users = get_users;
exports.add_user = add_user;
exports.edit_user = edit_user;
exports.delete_user = delete_user;