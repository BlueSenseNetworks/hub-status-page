'use strict';

const childProcess = require('child_process');

class ChildProcessAdapter {
  constructor(childProcess) {
    this._childProcess = childProcess;
  }

  exec(command, options) {
    return new Promise((resolve, reject) => {
      this._childProcess.exec(command, options, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

module.exports = ChildProcessAdapter;

/* istanbul ignore next */
module.exports.create = function() {
  return new ChildProcessAdapter(childProcess);
};