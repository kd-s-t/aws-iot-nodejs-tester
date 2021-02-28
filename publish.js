const awsIot = require('aws-iot-device-sdk');
const path = require('path');

let device = awsIot.device({
  keyPath: path.resolve(__dirname, './test2-certs/f3c6674ea5-private.pem.key'),
 certPath: path.resolve(__dirname, './test2-certs/f3c6674ea5-certificate.pem.crt'),
   caPath: path.resolve(__dirname, './test2-certs/AmazonRootCA1.pem'),
 clientId: 'test1',
     host: 'a2b0xwckvjuafw-ats.iot.us-east-2.amazonaws.com' 
});
 
device.on('connect', function() {
    device.publish('test', JSON.stringify({ message: "test2 iot is connected"}));
});