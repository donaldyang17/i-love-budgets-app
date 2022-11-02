const Budget = require("../models/budget");

module.exports = {
  index,
  new: newBudgets,
  create,
  show,
  addItem,
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

function show(req, res) {
  Budget.findById(req.params.id, function (err, budgets) {
    res.render("budgets/show", {
      budgets,
    });
  });
}

function addItem(req, res) {
  Budget.findById(req.params.id, function (err, budget) {
    budget.budgetItem.push(req.body);
    budget.save();
    console.log(budget);
    res.redirect(`/budgets/${req.params.id}`);
  });
}
