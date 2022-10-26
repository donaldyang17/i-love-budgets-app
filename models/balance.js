const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const balanceSchema = new Schema({
  balance: Number,
});

module.exports = mongoose.model("balance", balanceSchema);
