const { validateUser } = require('../utils/userValidations');
const userService = require('../services/users');
const bcryptService = require('../helpers/encryption');
const error = require('../errors');

exports.signUp = (req, res, next) => {
  const errors = validateUser(req);
  if (errors.length > 0) {
    throw error.paramsValidationErrors(errors);
  }
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcryptService.encrypt(req.body.password)
  };
  userService
    .signUp(user)
    .then(u => res.status(200).send(`${u.firstName} ${u.lastName}`))
    .catch(next);
};
