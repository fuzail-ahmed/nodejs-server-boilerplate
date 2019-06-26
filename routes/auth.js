const express = require("express");
const router = express.Router();

/** Load Controller */
const AuthController = require("../controllers/auth");
/** Load Middle Ware */

/** Routes */
router.post("/signin", AuthController.user_login);
module.exports = router;