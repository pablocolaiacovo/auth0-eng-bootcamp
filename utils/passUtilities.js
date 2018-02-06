const bcrypt = require('bcrypt');

const utils = {
    hashPassword: (pass, salt, cb) => {
        bcrypt.hash(pass, salt, cb);
    }
}

module.exports = utils;