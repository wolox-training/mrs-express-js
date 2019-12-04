const rp = require('request-promise');

let options = {
  uri: process.env.JSONPLACEHOLDER_BASE_URL,
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

function getAlbums() {
  options.uri = `${options.uri}/albums`;
  rp(options)
    .then(console.log)
    .catch((e) => { console.log(e.message) });
};

function getPhotos() {
  options.uri = `${options.uri}/photos`;
  rp(options)
    .then(console.log)
    .catch((e) => { console.log(e.message) });
};

module.exports = { getAlbums, getPhotos }