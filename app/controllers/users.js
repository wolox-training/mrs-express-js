const userService = require('../services/users');
const bcryptService = require('../services/encryption');
const errors = require('../errors');

const passwordRegex = /^(?=.{8,})(?=.*\d)(?=.*[A-z])(?!.*\s).*$/;
const emailRegex = /\b[\w\\.-]+@wolox+\.\w{2,4}\b/;

exports.signUp = (req, res, next) => {
  if (!req.body.firstName) {
    throw errors.badRequestError('Missing first name');
  }
  if (!req.body.lastName) {
    throw errors.badRequestError('Missing last name');
  }
  if (!req.body.email || !req.body.email.match(emailRegex)) {
    throw errors.badRequestError('Email must be part of Wolox domain');
  }
  if (!req.body.password || !req.body.password.match(passwordRegex)) {
    throw errors.badRequestError('Invalid password');
  }
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcryptService.encrypt(req.body.password)
  };
  userService
    .signUp(user)
    .then(u => res.send(`${u.firstName} ${u.lastName}`))
    .catch(next);
};
