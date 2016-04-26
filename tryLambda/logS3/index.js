console.log('Load Lambda function');
var AWS = require('aws-sdk');

exports.handler = function (event, context) {
  console.log("Received event");
  var bucket = event.Records[0].s3.bucket.name;
  var object = event.Records[0].s3.object.key;
  console.log("bucket name: " + bucket + " / object key: " + object);
  console.log("done");
};
