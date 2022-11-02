const Budget = require("../models/budget");

module.exports = {
  index,
  new: newBudgets,
  create,
  show,
  addItem,
  delete: deleteItem,
  deleteBudget,
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

function deleteItem(req, res) {
  Budget.findById(req.params.id).then((budget) => {
    let find = budget.budgetItem.findIndex(
      (object) => object._id == req.params.deleteItem
    );
    console.log(find);
    budget.budgetItem.splice(find, 1);
    budget.save().then(res.redirect(`/budgets/${req.params.id}`));
  });
}

function deleteBudget(req, res) {
  console.log(req.params.id);
  console.log(Budget);
  Budget.findByIdAndDelete(req.params.id, function () {
    res.redirect("/budgets/index");
  });
}
