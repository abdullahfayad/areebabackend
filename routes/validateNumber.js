var express = require("express");
var router = express.Router();
const validateNumberController = require("../controllers/validateNumber");

router.get("/:number", validateNumberController.validation);

module.exports = router;