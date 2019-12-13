const rp = require('request-promise');
const api_url = require('../../config').common.albumsApiURL;

const options = {
  uri: api_url,
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

function getAlbums() {
  options.uri = `${options.uri}/albums`;
  rp(options)
    .then(console.log)
    .catch(e => {
      console.log(e.message);
    });
}

function getPhotos() {
  options.uri = `${options.uri}/photos`;
  rp(options)
    .then(console.log)
    .catch(e => {
      console.log(e.message);
    });
}

module.exports = { getAlbums, getPhotos };
