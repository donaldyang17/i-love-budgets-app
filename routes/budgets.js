var express = require("express");
var router = express.Router();
const budgetsCtrl = require("../controllers/budgets");

/* GET users listing. */
router.post("/", budgetsCtrl.create);
router.get("/index", budgetsCtrl.index);
router.get("/new", budgetsCtrl.new);

module.exports = router;
