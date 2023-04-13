const crypto = require('crypto');

 function generateCode() {
  let code = '';
  while (code.length < 6) {
    const randomBytes = crypto.randomBytes(3);
    const randomInt = randomBytes.readUIntBE(0, 3);
    const randomSixDigitNumber = randomInt % 1000000;
    code = randomSixDigitNumber.toString().padStart(6, '0');
  }
  return code;
}

module.exports = generateCode ;

