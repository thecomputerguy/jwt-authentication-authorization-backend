const jwt = require("express-jwt");
//import config from "../config.js";
const db = require("../_helpers/db.js");

module.exports = authorize;

function authorize(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }

  const secret = process.env.SECRET;
  const algorithm = process.env.ALGORITHM;

  return [
    jwt({ secret, algorithms: [algorithm] }),
    async (req, res, next) => {
      const account = await db.Account.findById(req.user.id);
      const refreshTokens = await db.RefreshToken.find({ account: account.id });
      if (!account || (roles.length && !roles.includes(account.role))) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.user.role = account.role;
      req.user.ownsToken = (token) =>
        !!refreshTokens.find((x) => x.token === token);
      next();
    },
  ];
}
