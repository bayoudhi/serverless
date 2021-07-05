'use strict';

const memoizee = require('memoizee');
const path = require('path');
const { spawnSync } = require('child_process');

const serverlessPackageRoot = path.resolve(__dirname, '../../../');

module.exports = memoizee(() => {
  const npmPackagesRoot = (() => {
    try {
      return String(spawnSync('npm', ['root', '-g']).stdoutBuffer).trim();
    } catch {
      return null;
    }
  })();
  if (!npmPackagesRoot) return false;
  return path.resolve(npmPackagesRoot, 'serverless') === serverlessPackageRoot;
});
