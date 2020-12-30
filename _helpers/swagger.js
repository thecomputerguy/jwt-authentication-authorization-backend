const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load("../swagger.yaml");
const router = express.Router();

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
