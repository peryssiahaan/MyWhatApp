const bcryptjs = require("bcryptjs");

function hashHelperFunc(value) {
  return bcryptjs.hashSync(value);
}

function validateHashHelperFunc(value, hashed) {
  return bcryptjs.compareSync(value, hashed);
}

module.exports = { hashHelperFunc, validateHashHelperFunc };
