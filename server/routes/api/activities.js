const express = require('express');
const router = express.Router();
const activitiesController = require('../../controllers/activitiesController')
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(activitiesController.getAllActivities)
    .post(activitiesController.createNewActivity)
    .put(activitiesController.updateActivity)
    .delete(activitiesController.deleteActivity);

router.route('/activity')
    .get(activitiesController.getActivity)
    .put(activitiesController.markActivityCompleted);

router.route('/groupedActivities')
    .get(activitiesController.getGroupWithItsActivities)
    .post(activitiesController.addNewGroup)
    .put(activitiesController.modifyGroupName)
    .delete(activitiesController.deleteGroupWithItsActivities);

router.route('/groupedActivities/getgroups')
    .get(activitiesController.getGroupNames)
module.exports = router;