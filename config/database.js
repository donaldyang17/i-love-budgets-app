const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
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
