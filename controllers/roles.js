const Roles = require("../models/roles");

/** Get Roles */
async function get_roles(req, res, next) {
    try {
        const all_roles = await Roles.findAll();
        
        return res.send(Response.sendResponse(true, all_roles, CUSTOM_MESSAGE.GET_ALL_RECORDS, STATUS_CODE.OK));
    } catch (error) {
        console.log(error);
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Add Role */
async function add_role(req, res, next) {
    try {
        let result = await Roles.create(req.body);
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": result._id }, CUSTOM_MESSAGE.RECORD_CREATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Edit Role */
async function edit_role(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id not empty */
        if (!id){
            return res.send(Response.sendResponse(false, null, "Role id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Check id present in the database */
        let role = await Roles.findAll({
            where: {
                id: id
            }
        });

        if (!role.length){
            return res.send(Response.sendResponse(false, null, "Role not exists.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        let result = await Roles.update(req.body, { where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_UPDATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Delete Role */
async function delete_role(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id present */
        if (!id){
            return res.send(Response.sendResponse(false, null, "Role id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Check id present in the database */
        let role = await Roles.findAll({
            where: {
                id: id
            }
        });

        if (!role.length){
            return res.send(Response.sendResponse(false, null, "Role not exist.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }


        let result = await Roles.destroy({ where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_DELETED_SUCCESS, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

exports.get_roles = get_roles;
exports.add_role = add_role;
exports.edit_role = edit_role;
exports.delete_role = delete_role;