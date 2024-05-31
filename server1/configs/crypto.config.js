const { SALT_ROUNDS } = require("../constants/env.constant");
const Crypto = require("../utils/crypto");

module.exports = {
  crypto: new Crypto(SALT_ROUNDS),
};

