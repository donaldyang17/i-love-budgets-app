const Budget = require("../models/budget");

module.exports = {
  index,
  new: newBudgets,
  create,
};

function index(req, res) {
  Budget.find({}, function (err, budgets) {
    if (err) res.send(err.message);
    res.render("budgets/index", { budgets });
  });
}

function newBudgets(req, res) {
  res.render("budgets/new");
}

function create(req, res) {
  const budget = new Budget(req.body);
  budget.save(function (err) {
    if (err) return res.render("budgets/");
    console.log(budget);
    res.redirect("/budgets/index");
  });
}
