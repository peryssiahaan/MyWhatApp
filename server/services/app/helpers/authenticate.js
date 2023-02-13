const jwt = require("jsonwebtoken");
const JWT_KEYS = process.env.JWT_KEYS || "SeCrEt KeY";

function tokenize(payload) {
  return jwt.sign(payload, JWT_KEYS);
}

function detokenize(token) {
  return jwt.verify(token, JWT_KEYS);
}

module.exports = { tokenize, detokenize };
