const albumsController = require('./controllers/albums');
const { healthCheck } = require('./controllers/healthCheck');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums/', albumsController.getAlbums);
  app.get('/albums/:id', albumsController.getAlbums);
  app.get('/albums/:id/photos', albumsController.getPhotos);
};
