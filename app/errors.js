const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.EXTERNAL_API_ERROR = 'external_api_error';
exports.externalApiError = message => internalError(message, exports.EXTERNAL_API_ERROR);

exports.SIGN_UP_ERROR = 'sign_up_error  ';
exports.signUpError = message => internalError(message, exports.SIGN_UP_ERROR);

exports.PARAMS_VALIDATION_ERROR = 'params_validation_error';
exports.paramsValidationErrors = message => internalError(message, exports.PARAMS_VALIDATION_ERROR);
