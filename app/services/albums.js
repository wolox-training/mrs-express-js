const requestPromise = require('request-promise');
const { externalApiError } = require('../errors');
const apiUrl = require('../../config').common.albumsApiURL;

exports.getAlbumsSource = source => {
  const options = {
    uri: `${apiUrl + source}`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  return requestPromise(options).catch(error => {
    Promise.reject(externalApiError(error.message));
  });
};
