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
          res.json({ message: "Add Successful" });
        })
        .catch((err) => {
          res.json({ message: "Add Failed" });
        });
    } else {
      res.send({ error: "The phone number is not valid" });
    }
  };

  delete = (req, res) => {
    let id = req?.params?.id;
    customerSchema
      .findByIdAndDelete(id)
      .then(() => {
        res.json({ message: "Delete Successful" });
      })
      .catch((err) => {
        res.json({ message: "Delete Failed" });
      });
  };

  update = async (req, res) => {
    let body = req?.body;
    let id = body?.id;
    let number = body?.phoneNumber;
    let validation = await validate(number);
    if (validation?.valid) {
      customerSchema
        .findByIdAndUpdate(id, body, { new: "true" })
        .then(() => {
          res.json({ message: "Update Successful" });
        })
        .catch((err) => {
          res.json({ message: "Update Failed" });
        });
    } else {
      res.send({
        error: "Update failed due to the invalidation of the phone number",
      });
    }
  };

  getAll = (req, res) => {
    customerSchema
      .find()
      .then((customers) => {
        res.json({ message: "Found All Customers", customers });
      })
      .catch((err) => {
        res.json({ message: "Any Customer Not Found" });
      });
  };
}
const customer = new Customer();
module.exports = customer;
