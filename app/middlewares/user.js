const { validationResult, check } = require('express-validator');
const { badRequestError } = require('../errors');

const emailRegex = /\b[\w\\.-]+@wolox+\.\w{2,4}\b/;
const passwordRegex = /^(?=.{8,})(?=.*\d)(?=.*[A-z])(?!.*\s).*$/;

exports.validateSignUp = () => [
  check('firstName', 'Missing first name')
    .not()
    .isEmpty(),
  check('lastName', 'Missing last name')
    .not()
    .isEmpty(),
  check('email')
    .not()
    .isEmpty()
    .withMessage('Missing email')
    .isEmail()
    .custom(address => address.match(emailRegex))
    .withMessage('Email must be part of Wolox domain'),
  check('password', 'Invalid password')
    .not()
    .isEmpty()
    .custom(password => password.match(passwordRegex))
];

exports.validateError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(badRequestError(errors.array()));
  }
  return next();
};
