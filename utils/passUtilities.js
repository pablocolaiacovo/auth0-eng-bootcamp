const bcrypt = require('bcrypt');
const zxcvbn = require('zxcvbn');

const utils = {
    hashPassword: (pass, salt, cb) => {
        bcrypt.hash(pass, salt, cb);
    },
    validateStrength: (pass) => zxcvbn(pass).score > 3
}

module.exports = utils;