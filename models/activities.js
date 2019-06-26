const Activity = sequelize.define('activities', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    module_name: {
        type: Sequelize.STRING
    },
    page_name: {
        type: Sequelize.STRING
    },
    action: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    ip_address: {
        type: Sequelize.STRING
    },
    action_datetime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    message: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.STRING
    },
    request_origin: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.TEXT
    },
}, {
        schema: "credentials"
});

module.exports = Activity;