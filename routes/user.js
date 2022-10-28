const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.get("/user/new", userCtrl.new);
router.post("/user", userCtrl.create);

module.exports = router;
