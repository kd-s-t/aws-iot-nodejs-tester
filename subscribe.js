const awsIot = require('aws-iot-device-sdk');
const path = require('path');

let device = awsIot.device({
  keyPath: path.resolve(__dirname, './certs/06f142bc14-private.pem.key'),
 certPath: path.resolve(__dirname, './certs/06f142bc14-certificate.pem.crt'),
   caPath: path.resolve(__dirname, './certs/AmazonRootCA1.pem'),
 clientId: 'test6',
     host: 'a2b0xwckvjuafw-ats.iot.us-east-2.amazonaws.com', 
autoResubscribe: true
});
 
device.on('connect', function() {
    device.subscribe('channel-test');
});
 
device.on('message', function(topic, payload) {
  console.log('message', topic, payload.toString());
});