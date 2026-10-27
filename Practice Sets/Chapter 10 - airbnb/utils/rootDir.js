const path = require('path');

// Helper to get the root directory of the application
const rootDir = (require.main && require.main.filename)
  ? path.dirname(require.main.filename)
  : path.join(__dirname, '..');

module.exports = rootDir;
module.exports.rootDir = rootDir;
