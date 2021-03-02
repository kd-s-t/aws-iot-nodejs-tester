# Nodejs and AWS IoT Tester  

## Setup AWS  
AWS IoT Policies   
AWS IoT Thing  
AWS Cognito User   
AWS Cognito Identity Pool  
AWS IAM Role   
AWS IAM User  

## Setup Nodejs  
`git clone https://github.com/ollolollollooloo/aws-iot-nodejs-tester.git`  
`cd aws-iot-nodejs`  
`npm install`  
Replace certs folder  
Replace path.resolve according to your certs folder and name  

## To check current active profile in your computer windows 10  
run `aws configure list`  
<img src="./visuals/list.png" width="40%">  

## To check all profile in your computer windows 10  
run `vim ~/.aws/credentials`  
<img src="./visuals/all.png" width="40%">  

## To set specific profile in your computer windows 10  
run `setx AWS_PROFILE test5`  
check again the current active profile `aws configure list`  

## Usage  
run `node subscribe.js`  
run `node publish.js`  

## Take note  
If both end are communicating, that means AWS IoT has been successfully configured.  

## Youtube Tutorial
By Following this Tutorial  
[Youtube Tutorial Soon]  