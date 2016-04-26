var async = require('async');
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

exports.handler = function(event, context) {
  var bucket = event.Records[0].s3.bucket.name;
  var srcKey = event.Records[0].s3.object.key;
  var dstKey = "copy-" + srcKey;

  if (srcKey.substr(0,5) ==  'copy-') {
    return;
  }

  async.waterfall([
    function download(callback) {
      console.log('download start:' + srcKey);
      s3.getObject({
        Bucket: bucket,
        Key: srcKey
      }, function(err, data) {
           if (err) { callback(err); }
           try {
             callback(null, data);
           } catch (e) {
             callback(e);
           }
         }
      );
    },
    function upload(arg1, callback) {
      console.log('upload start:' + dstKey);
      console.log('data:' + arg1.Body);
      s3.putObject({
        Bucket: bucket,
        Key: dstKey,
        Body: arg1.Body
      }, function(err, data) {
           if (err) { callback(err); }
           try {
             callback(null);
           } catch (e) {
             callback(e);
           }
         }
      );
    }
  ], function (err) {
    if (err) { console.log('Error:' + err); }
    console.log('all done. ');
  });
};
