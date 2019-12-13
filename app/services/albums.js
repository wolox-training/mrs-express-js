const rp = require('request-promise');
const { defaultError } = require('../errors');
const api_url = require('../../config').common.albumsApiURL;

const options = {
  uri: api_url,
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

const getAlbums = () => {
  options.uri = `${options.uri}/albums`;
  return rp(options)
    .then(res => res)
    .catch(e => {
      Promise.reject(defaultError(e.message));
    });
};

const getPhotos = id => {
  options.uri = `${options.uri}/albums/${id}/photos`;
  return rp(options)
    .then(res => res)
    .catch(e => {
      Promise.reject(defaultError(e.message));
    });
};

module.exports = { getAlbums, getPhotos };
