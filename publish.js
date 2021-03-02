const awsIot = require('aws-iot-device-sdk');
const path = require('path');

let device = awsIot.device({
  keyPath: path.resolve(__dirname, './certs/6c48f6ccab-private.pem.key'),
 certPath: path.resolve(__dirname, './certs/6c48f6ccab-certificate.pem.crt'),
   caPath: path.resolve(__dirname, './certs/AmazonRootCA1.pem'),
 clientId: 'test5',
     host: 'a2b0xwckvjuafw-ats.iot.us-east-2.amazonaws.com' 
});
 
device.on('connect', function() {
    device.publish('test', JSON.stringify({ message: "test5 iot is connected"}));
});