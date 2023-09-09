const Mobile = require("../models/mobile");

exports.getAll = ((req, res, next) => {

    Mobile.find().then(mobiles => {
        res.status(200).json({
            message: 'Fetch Successful',
            mobiles: mobiles
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

exports.addMobile = ((req, res, next) => {
    const newMobile = new Mobile(req.body)
    newMobile.save().then(result => {
        res.status(201).json({
            message: "Mobile saved!",
            result: result
        })
    }).catch(err => {
        res.status(501).json({
            message: "saving failed",
            error: err
        })
    })
})