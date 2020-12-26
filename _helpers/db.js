import mongoose from "mongoose";
import config from "../config.json";
import Account from "../accounts/account.model";
import RefreshToken from "../accounts/refresh-token.model";

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(
  process.env.MONGODB_URI || config.mongodbConnectionString,
  connectionOptions
);

export default {
  Account: Account,
  RefreshToken: RefreshToken,
  isValidId,
};

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}
