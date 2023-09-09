const express = require("express");
const router = express.Router();
const mobileController = require("../controllers/mobileController");
router.get("/fetch/all", mobileController.getAll);
router.post("/add-mobile", mobileController.addMobile);

module.exports = router;