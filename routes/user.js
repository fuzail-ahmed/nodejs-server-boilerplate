const express = require("express");
const router = express.Router();

/** Load Controller */
const UserController = require("../controllers/user");
/** Load Middle Ware */

/** Routes */
router.get("/get-users", UserController.get_users);
router.post("/add-user", UserController.add_user);
router.put("/edit-user/:id", UserController.edit_user);
router.delete("/delete-user/:id", UserController.delete_user);

module.exports = router;