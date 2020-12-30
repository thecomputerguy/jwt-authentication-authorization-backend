const mongoose = require("mongoose");
//import config from "../config.js";
const Account = require("../accounts/account.model.js");
const RefreshToken = require("../accounts/refresh-token.model.js");

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
console.log(process.env.DB_CONNECTION_STRING);
mongoose.connect(process.env.DB_CONNECTION_STRING, connectionOptions);

module.exports = {
  Account: Account,
  RefreshToken: RefreshToken,
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
