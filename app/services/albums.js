const requestPromise = require('request-promise');
const { externalApiError } = require('../errors');
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
    .then(res => res)
    .catch(error => {
      Promise.reject(externalApiError(error.message));
    });
};

exports.getAlbumPhotos = id => {
  options.uri = `${apiUrl}/${id}/photos`;
  requestPromise(options)
    .then(res => res)
    .catch(error => {
      Promise.reject(externalApiError(error.message));
    });
};
