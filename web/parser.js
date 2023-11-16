//const axios = require("axios");
const { Course } = require("../models");

const allowedPaySystems = [5, 4, 55, 57, 110, 6, 85, 59, 27, 26, 30, 29, 74, 126, 105, 106, 58]


async function run() {
    allowedPaySystems.forEach(async payment => {
        console.log(payment)
        await Course.create({
            coin_id: payment,
            type: "plus",
            value: 0
        })
    })
}

run();