const { databaseError, defaultError } = require('../errors');
const userModel = require('../models').User;

exports.signUp = user =>
  userModel.create(user).catch(error => {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw defaultError('Email is already in use');
    }
    throw databaseError(error.message);
  });
