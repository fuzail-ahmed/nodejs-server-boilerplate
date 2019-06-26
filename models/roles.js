const Role = sequelize.define('roles', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_name:{
        type: Sequelize.STRING,
        notEmpty: true,
    },
    role_description:{
        type: Sequelize.TEXT
    },
    is_active:{
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: true
    },
    user_id:{
        type: Sequelize.INTEGER
    },
}, {
    schema: "credentials"
});

module.exports = Role;