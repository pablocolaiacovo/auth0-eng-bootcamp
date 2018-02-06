const bcrypt = require('bcrypt');
const zxcvbn = require('zxcvbn');
const generator = require('generate-password');

const utils = {
    hashPassword: (pass, salt, cb) => {
        bcrypt.hash(pass, salt, cb);
    },
    validateStrength: (pass) => zxcvbn(pass).score > 3,

    validatePassword: (pass, hash, cb) => bcrypt.compare( pass, hash, cb),

    generatePassword: () => generator.generate({
        length : 15,
        numbers : true,
        symbols : true,
        uppercase : true,
        strict : true
    })

}

module.exports = utils;