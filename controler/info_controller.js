const Info = require('../models/info_model');

const createInfo = async(req,res) => {
    const payload = req.body;
    const data = await Info.create(payload);
    res.status(200).send(data)
}

module.exports = {
    createInfo
}