const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

exports.encrypt = textToEncrypt => bcrypt.hashSync(textToEncrypt, salt);
