const express = require("express");
const router = express.Router();

/** Load Controller */
const RolesController = require("../controllers/roles");
/** Load Middle Ware */

/** Routes */
router.get("/get-roles", RolesController.get_roles);
router.post("/add-role", RolesController.add_role);
router.put("/edit-role/:id", RolesController.edit_role);
router.delete("/delete-role/:id", RolesController.delete_role);

module.exports = router;