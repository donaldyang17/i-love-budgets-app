var express = require("express");
var router = express.Router();
const budgetsCtrl = require("../controllers/budgets");

/* GET users listing. */
router.get("/new", budgetsCtrl.new);
router.post("/", budgetsCtrl.create);

module.exports = router;
