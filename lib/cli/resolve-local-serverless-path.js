'use strict';

const path = require('path');
const memoizee = require('memoizee');
const resolveSync = require('ncjsm/resolve/sync');

module.exports = memoizee(() => {
  try {
    return path.resolve(path.dirname(resolveSync(process.cwd(), 'serverless').realPath), '..');
  } catch {
    return null;
  }
});
