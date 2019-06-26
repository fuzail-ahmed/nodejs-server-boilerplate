const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/** Globals */
if (!global.JOI) {
    global.JOI = require('joi');
}

if (!global.Response) {
    global.Response = require('./utils/Response');
}

if (!global.STATUS_CODE) {
    global.STATUS_CODE = require('./constants/status-codes');
}

if (!global.CUSTOM_MESSAGE) {
    global.CUSTOM_MESSAGE = require('./constants/custom-messages');
}

if (!global.ENVCONFIG) {
    global.ENVCONFIG = require("./config/dev.env");
}

/** Begin SEQUELIZE Connection */
global.Sequelize = require('sequelize');
Sequelize.Promise = global.Promise
global.sequelize = new Sequelize(ENVCONFIG.DB_DATABASE, ENVCONFIG.DB_USERNAME, ENVCONFIG.DB_PASSWORD, {
    host: ENVCONFIG.DB_HOST,
    port: ENVCONFIG.DB_PORT,
    dialect: ENVCONFIG.DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: console.log,
    logging: function (str) {
        console.log(str);
        console.log(ENVCONFIG.DB_DATABASE)
    }
});

/** Check if connection stablished */
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
/** End SEQUELIZE Connection */



/** Routes */
const userRoutes = require("./routes/user");
const rolesRoutes = require("./routes/roles");
const activitiesRoutes = require("./routes/activities");
const authRoutes = require("./routes/auth");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/** Handle Routes */
app.use("/user", userRoutes);
app.use("/roles", rolesRoutes);
app.use("/activities", activitiesRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
    const error = new Error('Route not found!');
    error.status = 500;
    next(error);
});

app.use((error, req, res, next) => {
    return res.send(Response.sendResponse(false, "", error.message, error.status || 500));
});

module.exports = app;