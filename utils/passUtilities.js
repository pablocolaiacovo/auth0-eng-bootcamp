const bcrypt = require('bcrypt');
const zxcvbn = require('zxcvbn');

const utils = {
    hashPassword: (pass, salt, cb) => {
        bcrypt.hash(pass, salt, cb);
    },
    validateStrength: (pass) => zxcvbn(pass).score > 3,

    validatePassword: (pass, hash, cb) => bcrypt.compare( pass, hash, cb)

}

module.exports = utils;