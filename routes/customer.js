var express = require("express");
var router = express.Router();
const customerController = require("../controllers/customer");

router.post("/addCustomer", customerController.add);
router.put("/updateCustomer", customerController.update);
router.get("/getAllCustomer", customerController.getAll);
router.delete("/deleteCustomer/:id", customerController.delete);

module.exports = router;
