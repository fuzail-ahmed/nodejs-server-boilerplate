const Activities = require("../models/activities");

/** Get activities */
async function get_activities(req, res, next) {
    try {
        const all_activities = await Activities.findAll();
        
        return res.send(Response.sendResponse(true, all_activities, CUSTOM_MESSAGE.GET_ALL_RECORDS, STATUS_CODE.OK));
    } catch (error) {
        console.log(error);
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Add Activities */
async function add_activitie(req, res, next) {
    try {
        let result = await Activities.create(req.body);
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": result._id }, CUSTOM_MESSAGE.RECORD_CREATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Edit Activities */
async function edit_activitie(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id not empty */
        if (!id){
            return res.send(Response.sendResponse(false, null, "activitie id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Check id present in the database */
        let activitie = await Activities.findAll({
            where: {
                id: id
            }
        });

        if (!activitie.length){
            return res.send(Response.sendResponse(false, null, "activitie not exists.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        let result = await Activities.update(req.body, { where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_UPDATED, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

/** Delete Activities */
async function delete_activitie(req, res, next) {
    try {
        const id = req.params.id || false;

        /** Check if id present */
        if (!id){
            return res.send(Response.sendResponse(false, null, "activitie id is required.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }

        /** Check id present in the database */
        let activitie = await Activities.findAll({
            where: {
                id: id
            }
        });

        if (!activitie.length){
            return res.send(Response.sendResponse(false, null, "activitie not exist.", STATUS_CODE.INTERNAL_SERVER_ERROR));
        }


        let result = await Activities.destroy({ where: { id: id } });
        if (result) {
            return res.send(Response.sendResponse(true, { "_id": id }, CUSTOM_MESSAGE.RECORD_DELETED_SUCCESS, STATUS_CODE.OK));
        }
    } catch (error) {
        return res.send(Response.sendResponse(false, null, error.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }
}

exports.get_activities = get_activities;
exports.add_activitie = add_activitie;
exports.edit_activitie = edit_activitie;
exports.delete_activitie = delete_activitie;