const Budget = require("../models/budget");

module.exports = {
  new: newBudgets,
  create,
  //   show,
};

function newBudgets(req, res) {
  Budget.find({}, function (err, budgets) {
    res.render("budgets/new");
  });
}

function create(req, res) {
  const budget = new Budget(req.body);
  budget.save(function (err) {
    if (err) return res.render("budgets/new");
    console.log(budget);
    res.redirect("/budgets/new");
  });
}

// function show(req, res{
//     Budget.findById(req.params.id, function(err, budgets){
//         res.render("budgets/index", {budgets} );
//     })
// })
