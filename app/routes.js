const albumsController = require('./controllers/albums');
const userController = require('./controllers/users');
const { healthCheck } = require('./controllers/healthCheck');
const userMiddleware = require('./middlewares/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums/', albumsController.getAlbums);
  app.get('/albums/:id', albumsController.getAlbums);
  app.get('/albums/:id/photos', albumsController.getPhotos);
  app.post('/users', [userMiddleware.validateSignUp(), userMiddleware.validateError], userController.signUp);
};
