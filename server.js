const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
//require("./config.js");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const accountsRouter = require("./accounts/accounts.controller.js");
const errorHandler = require("./_middleware/error-handler.js");
//import swaggerDocs from "./_helpers/swagger.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//api routes
app.use("/accounts", accountsRouter);

//swagger docs
//app.use("/api-docs", swaggerDocs);

//global error handler
app.use(errorHandler);

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
