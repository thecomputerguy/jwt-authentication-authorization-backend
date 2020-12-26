function validateRequest(req, next, schema) {
  const options = {
    abortEarly: false, // include all props
    allowUnkown: true, //ignore unknown props
    stripUnknown: true, // skip unknown props
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}

export default validateRequest;
