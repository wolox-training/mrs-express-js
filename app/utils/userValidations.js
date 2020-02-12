const passwordRegex = /^(?=.{8,})(?=.*\d)(?=.*[A-z])(?!.*\s).*$/;
const emailRegex = /\b[\w\\.-]+@wolox+\.\w{2,4}\.{0,1}\w{0,2}\b/;

exports.validateUser = user => {
  const errors = [];
  if (!user.body.email) {
    errors.push('Missing Email.');
  } else if (!user.body.email.match(emailRegex)) {
    errors.push('Email must be part of Wolox domain');
  }
  if (!user.body.password) {
    errors.push('Missing password.');
  } else if (!user.body.password.match(passwordRegex)) {
    errors.push('Invalid password');
  }
  if (!user.body.firstName) {
    errors.push('Missing first name.');
  }
  if (!user.body.lastName) {
    errors.push('Missing last name.');
  }
  return errors;
};
