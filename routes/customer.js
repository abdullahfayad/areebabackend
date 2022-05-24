var express = require("express");
var router = express.Router();
const customerController = require("../controllers/customer");

router.post("/addCustomer", customerController.add);
router.delete("/deleteCustomer", customerController.delete);
router.put("/editCustomer", customerController.edit);
router.get("/getCustomer/:id", customerController.get);
router.get("/getAllCustomer", customerController.getAll);

module.exports = router;
