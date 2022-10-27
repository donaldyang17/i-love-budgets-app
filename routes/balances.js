var express = require("express");
var router = express.Router();
const balancesCtrl = require("../controllers/balances");

/* GET users listing. */
router.get("/new", balancesCtrl.new);
router.post("/", balancesCtrl.create);

module.exports = router;
