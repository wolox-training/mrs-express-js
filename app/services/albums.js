const request_promise = require('request-promise');
const { externalApiError } = require('../errors');
const api_url = require('../../config').common.albumsApiURL;

const options = {
  uri: `${api_url}`,
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

exports.getAlbums = id => {
  if (id) options.uri = `${api_url}/${id}/photos`;
  return request_promise(options)
    .then(res => res)
    .catch(error => {
      Promise.reject(externalApiError(error.message));
    });
};
