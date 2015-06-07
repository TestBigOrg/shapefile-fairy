var path = require('path');

module.exports = {
  valid: {
    world: path.join(__dirname, 'valid.world.zip'),
    caps: path.join(__dirname, 'valid.world.caps.zip')
  },
  invalid: {
    noshp: path.join(__dirname, 'invalid.noshp.zip'),
    nodbf: path.join(__dirname, 'invalid.nodbf.zip'),
    noshx: path.join(__dirname, 'invalid.noshx.zip'),
    nozip: path.join(__dirname, 'invalid-zip')
  }
};
