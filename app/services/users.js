const { databaseError, defaultError } = require('../errors');
const userModel = require('../models').User;

exports.signUp = user =>
  userModel
    .create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })
    .catch(error => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw defaultError('Email is already in use');
      }
      throw databaseError(error.message);
    });
