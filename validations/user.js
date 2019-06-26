var JOI = require('joi');

module.exports = function () {
    return {
        add: {
            id: JOI.number().required(),
            full_name: JOI.string(),
            email: JOI.string().email({ minDomainAtoms: 2 }).required(),
            username: JOI.string().required(),
            password: JOI.string().required(),
            mobile: JOI.string().required(),
            role_id: JOI.number().required()
        },
        edit: {
            full_name: JOI.string(),
            email: JOI.string().email({ minDomainAtoms: 2 }).required(),
            username: JOI.string().required(),
            password: JOI.string().required(),
            mobile: JOI.string().required(),
            role_id: JOI.number().required()
        }
    };
};