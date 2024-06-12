const express = require("express");
const router = express.Router();
const Todo = require('../model/auth-model.js')
const controller = require("../controller/auth-controller.js");


router.route("/").get(controller.getAllRecords);

router.route("/add").post(controller.createRecord);

router.route('/update').patch(controller.updateRecords);

router.route('/delete').delete(controller.deleteRecord);

module.exports = router;