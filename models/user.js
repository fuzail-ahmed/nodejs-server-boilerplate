const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
    email: {
        type: Sequelize.STRING,
        notEmpty: true,
        validate: {
            isEmail: true
        }
    },
    username: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
    password: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
    mobile: {
        type: Sequelize.STRING
    },
    role_id: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
}, {
        schema: "credentials"
    });

module.exports = User;