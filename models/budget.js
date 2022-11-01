const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
  {
    name: String,
    description: String,
    amount: { type: Number, min: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Budget", budgetSchema);
