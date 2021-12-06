const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.DB_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB, options).then(() => {
    console.log("Can use DB");
  })
  .catch((err) => {
    console.log("DB no connected");
  });