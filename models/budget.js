const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Budget", budgetSchema);
