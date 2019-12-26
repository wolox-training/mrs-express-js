const albumsService = require('../services/albums');

const getAlbums = (req, res, next) => {
  albumsService
    .getAlbums(req.params.id)
    .then(albums => res.status(200).send(albums))
    .catch(next);
};

const getPhotos = (req, res, next) => {
  const albumId = req.params.id;
  albumsService
    .getAlbumPhotos(albumId)
    .then(photos => res.status(200).send(photos))
    .catch(next);
};

module.exports = { getAlbums, getPhotos };
