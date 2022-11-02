const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetItemSchema = new Schema({
  itemName: String,
  category: String,
  cost: Number,
});
const budgetSchema = new Schema(
  {
    name: String,
    description: String,
    amount: { type: Number, min: 1 },
    budgetItem: [budgetItemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Budget", budgetSchema);
// module.exports = mongoose.model("BudgetItem", budgetItemSchema);
