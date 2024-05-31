const bcrypt = require("bcrypt");

class Crypto {
  constructor(saltRounds) {
    this.salt = bcrypt.genSaltSync(saltRounds);
  }
  async compare(plainText, encodedText) {
    return await bcrypt.compare(plainText, encodedText);
  }

  async encode(plainText) {
    return await bcrypt.hash(plainText, this.salt);
  }
}

module.exports = Crypto;

