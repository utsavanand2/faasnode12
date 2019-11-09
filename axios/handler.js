"use strict"

const axios = require("axios")
module.exports = async (event, context) => {
    try {
        let res = await axios.default.get("https://api.ipify.org?format=json")
        return context.status(200).succeed(res.data);
    } catch(err) {
        throw context.status(500).fail(err.toString())
    }
}
