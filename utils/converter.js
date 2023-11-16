const sendGetRequest = require('./get-request');
const Big = require('big.js');

exports.converter = async (value, ps) => {
    const res = await sendGetRequest(`https://crypt-maker.com/api?endpoint=pair/${ps}/14`);

    console.log("Res: ", res)

    const course = res.data.course;

    let result = new Big(value).times(new Big(course)).div(new Big(1));

    return Number(result).toFixed(1);
};