// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 8282;
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/vocabulary", require("./routes/vocabulary"));
// app.use(morgan("dev"));

// words = [];

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/learn-vocabulary",
//     { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
//     err => {
//         if (err) throw err;
//         console.log("Don't drop database");
//     }
// );

// app.listen(port, () => {
//     console.log(`App is listening on port ${port}`);
// });

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
