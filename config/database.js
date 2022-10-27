const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/i-love-budgets", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(
    `Connected to MongoDB at i-love-budgets at ${db.host}:${db.port}`
  );
});
