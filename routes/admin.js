const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
router.get("/admin/login", adminController.login);
router.post("/admin/verify", adminController.verify);
router.get("/admin/home", adminController.home);
module.exports = router;