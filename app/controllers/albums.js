const albumsService = require('../services/albums');

const getAlbums = (req, res, next) => {
  albumsService
    .getAlbums()
    .then(albums => res.json(albums))
    .catch(next);
};

const getPhotos = (req, res, next) => {
  const albumId = req.params.id;
  albumsService
    .getAlbums(albumId)
    .then(photos => res.json(photos))
    .catch(next);
};

module.exports = { getAlbums, getPhotos };
