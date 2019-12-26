const requestPromise = require('request-promise');
const { logger } = require('express-wolox-logger');
const apiUrl = require('../../config').common.albumsApiURL;

const options = {
  uri: `${apiUrl}`,
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

exports.getAlbums = id => {
  if (id) options.uri = `${apiUrl}/${id}`;
  requestPromise(options)
    .then(logger.info)
    .catch(error => {
      logger.error(error.message);
    });
};

exports.getAlbumPhotos = id => {
  options.uri = `${apiUrl}/${id}/photos`;
  requestPromise(options)
    .then(logger.info)
    .catch(error => {
      logger.error(error.message);
    });
};
