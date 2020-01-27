const albumsService = require('../services/albums');

const getAlbums = (req, res, next) => {
  albumsService
    .getAlbumsSource(`/${req.params.id}`)
    .then(albums => res.status(200).send(albums))
    .catch(next);
};

const getPhotos = (req, res, next) => {
  albumsService
    .getAlbumsSource(`/${req.params.id}/photos`)
    .then(albums => res.status(200).send(albums))
    .catch(next);
};

module.exports = { getAlbums, getPhotos };
