var event = {
  "Records": [
    {
      "awsRegion"     : "north-east-1",
      "sequenceNumber": "123",
      "partitionKey"  : "hoge",
      "eventSource"   : "fuga",
      "data"          : "piyo"
    }
  ]
};

var context = {
  invodeid: 'invokeid',
  done: function (err, message) {
    return;
  }
};

var lambda = require("./firstTest");
lambda.handler(event, context);
