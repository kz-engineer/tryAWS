console.log('start function');
var async = require('async');

exports.handler = function (event, context) {
    console.log('event called');
    async.series([
    function (callback) {
      console.log('one');
      callback(null, 'one');
    },
    function (callback) {
      console.log('two');
      callback(null, 'two');
    }
  ], function (err, results) {
    if (err) {
      throw err;
    }
    console.log('all done. ' + results);
  });
};
