
if ('function' == typeof importScripts) {
  importScripts('qrclient.js');

  var client = new QRClient();

  this.onmessage = function(e) {
    imageData = e.data;
    client.decode(imageData, function(result) {
      postMessage(result);
    });
  };
}
