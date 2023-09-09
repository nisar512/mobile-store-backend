const Admin = require("../models/admin");



exports.login = ((req, res, next) => {
    res.render("admin/login");
})

exports.verify = ((req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({ email: email, password: password }).then(user => {
        if (!user) {
            res.status(401).json({
                message: "User not found!"
            })
        } else {
            console.log("nisar inside")
            res.status(200).json({
                redirect: "home"
            });
        }
    }).catch(err => {
        res.status(500).json({
            error: err,
            message: "Failed"
        })
    })

})

exports.home = ((req, res, next) => {
    res.render("admin/home")
})

