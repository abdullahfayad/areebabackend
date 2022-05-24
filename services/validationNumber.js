const axios = require("axios");

let url = "https://phonevalidation.abstractapi.com/v1/";
let api_key = "7fa197cfee8c4d11b4c07b7fb7823326";
validate = async (number) => {
  let endpoint = url + "?api_key=" + api_key + "&phone=" + number;
  const response = await axios.get(endpoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  let data = await response?.data;
  let validateData = {
    valid: data?.valid,
    countryCode: data?.country?.code,
    countryName: data?.country?.name,
    operatorName: data?.carrier,
  };
  return validateData;
};
module.exports = validate;
