const validate = require("../services/validationNumber");
const customerSchema = require("../db/model/customer");

class Customer {
  add = async (req, res) => {
    let body = req?.body;
    let number = body?.phoneNumber;
    let validation = await validate(number);
    if (validation?.valid) {
      customerSchema
        .create(body)
        .then(() => {
          res.json({ message: "success" });
        })
        .catch((err) => {
          res.json({ message: "fail" });
        });
    } else {
      res.send({ error: "The phone number is not valid" });
    }
  };

  delete = (req, res) => {};

  edit = (req, res) => {};

  get = (req, res) => {};

  getAll = (req, res) => {};
}
const customer = new Customer();
module.exports = customer;
