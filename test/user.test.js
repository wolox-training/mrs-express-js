const request = require('supertest');
const app = require('../app');

describe('Sign Up tests', () => {
  test('Succesful case', () => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      firstName: 'User',
      lastName: 'Test',
      password: 'Asdf1234'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .expect(200);
  });

  test('Invalid password 1: Less than 8 characters', () => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      firstName: 'User',
      lastName: 'Test',
      password: 'Asd123'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(res => {
        expect(400);
        expect(res.body.message).toMatch(/Invalid password/);
      });
  });

  test('Invalid password 2: Not alpanumeric', () => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      firstName: 'User',
      lastName: 'Test',
      password: '123123123123123'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(res => {
        expect(400);
        expect(res.body.message).toMatch(/Invalid password/);
      });
  });

  test('Invalid model 1: Mail is not part of Wolox domain', () => {
    const userToCreate = {
      email: 'user@wolx.com.ar',
      firstName: 'User',
      lastName: 'Test',
      password: 'Asdasdasd123'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(res => {
        expect(400);
        expect(res.body.message).toMatch(/Email must be part of Wolox domain/);
      });
  });

  test('Invalid model 2: No first name', () => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      lastName: 'Test',
      password: 'Asdasdasd123'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(res => {
        expect(400);
        expect(res.body.message).toMatch(/Missing first name/);
      });
  });

  test('Invalid model 3: No last name', () => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      firstName: 'User',
      password: 'Asdasdasd123'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(res => {
        expect(400);
        expect(res.body.message).toMatch(/Missing last name/);
      });
  });

  test('Email is already in use', done => {
    const userToCreate = {
      email: 'user@wolox.com.ar',
      firstName: 'User',
      lastName: 'Test',
      password: 'Asd123456'
    };
    return request(app)
      .post('/users')
      .send(userToCreate)
      .then(() => {
        expect(500);
        done();
      });
  });
});
