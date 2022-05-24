const axios = require("axios");
const validate = require("../services/validationNumber");

let url = "https://phonevalidation.abstractapi.com/v1/";
let api_key = "7fa197cfee8c4d11b4c07b7fb7823326";

class ValidateNumber {
  validation = async (req, res) => {
    let number = req?.params?.number;
    let validation = await validate(number);
    return res.send(validation);
  };
}
const validateNumber = new ValidateNumber();
module.exports = validateNumber;
