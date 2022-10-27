const Balance = require("../models/balance");

module.exports = {
  new: newBalance,
  create,
};

function newBalance(req, res) {
  Balance.find({}, function (err, balances) {
    res.render("balances/new");
  });
}

function create(req, res) {
  const balance = new Balance(req.body);
  balance.save(function (err) {
    if (err) return res.render("balances/new");
    console.log(balance);
    res.redirect("/balances/new");
  });
}
