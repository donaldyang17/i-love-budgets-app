const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const balanceSchema = new Schema(
  {
    amount: { type: Number, min: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Balance", balanceSchema);
