import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  account: {},
  token: String,
  expires: Date,
  created: { type: Date, default: Date.now },
  createdByIp: String,
  revoked: Date,
  revokedByIp: String,
  replacedByToken: String,
});

schema.virtual("isExpired").get(function () {
  return Date.now() >= this.expires;
});

schema.virtual("isActive").get(function () {
  return !this.revoked && !this.isExpired;
});

export default mongoose.model("RefreshToken", schema);
