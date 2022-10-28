const express = require("express");
const router = express.Router();
const adviceCtrl = require("../controllers/advice");

router.get("/", adviceCtrl.index);
router.get("/new", adviceCtrl.new);
router.get("/:id", adviceCtrl.show);
router.post("/", adviceCtrl.create);
router.put("/:id", adviceCtrl.update);
router.delete("/:id", adviceCtrl.deleteAdvice);

module.exports = router;
