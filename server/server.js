const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 8282;

const bodyParser = require("body-parser");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/learn-vocabulary", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to the database")
  }
})

app.use("/vocabulary", require("./routes/vocabulary"))

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
