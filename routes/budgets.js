var express = require("express");
var router = express.Router();
const budgetsCtrl = require("../controllers/budgets");

/* GET users listing. */
router.post("/", budgetsCtrl.create);
router.get("/index", budgetsCtrl.index);
router.get("/new", budgetsCtrl.new);
router.delete("/:id/:deleteItem", budgetsCtrl.delete);
router.get("/:id", budgetsCtrl.show);
router.post("/:id/addItem", budgetsCtrl.addItem);

module.exports = router;
