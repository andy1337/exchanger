const axios = require('axios').default;

const sendGetRequest = async (url, data) => {
  return axios
    .get(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = sendGetRequest;
