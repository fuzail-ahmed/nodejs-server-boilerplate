const express = require("express");
const router = express.Router();

/** Load Controller */
const ActivitiesController = require("../controllers/activities");
/** Load Middle Ware */

/** Routes */
router.get("/get-activities", ActivitiesController.get_activities);
router.post("/add-activity", ActivitiesController.add_activitie);
router.put("/edit-activity/:id", ActivitiesController.edit_activitie);
router.delete("/delete-activity/:id", ActivitiesController.delete_activitie);

module.exports = router;