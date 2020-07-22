# Preparation
Open a AWS account
Log on to console

Make yourself comfortable with basic AWS competencies
https://aws.amazon.com/getting-started/learning-path-full-stack-developer/

Create a dynamodb table named "Baselines", and have a key named "Quality"

Create a new Lambda Function to Push data in the Baselines table, using code from lambda/AddQuality.js

{
  "qualityName": "TestBaseline",
  "qualityDesc": "TestBaseline Description"
}

You should see this response 

Response:
{
  "statusCode": 200,
  "body": "\"Your quality TestBaseline with meaning TestBaseline Description is recorded\""
}

Go to the dynamodb and delete all the records from Baselines table

Create a Post API using AWS API Gateway

Test the API using the JSON payload 
{
  "qualityName": "TestBaseline",
  "qualityDesc": "TestBaseline Description"
}

You should see this response 

Response:
{
  "statusCode": 200,
  "body": "\"Your quality TestBaseline with meaning TestBaseline Description is recorded\""
}

Go to the dynamodb and delete all the records from Baselines table

Deploy the API and use the URL to upload your Baselines Data

## Upload Baselines Data

Update baslines.txt to keep the baselines you need

replace  value of API_ENDPOINT in LoadBaselines.py with your URL

execute LoadBaselines.py as 
python LoadBaselines.py baselines.txt

Verify that the baselines are available in your dynamodb database

## Create lambda function to get baselines from dynamodb

Create a new Lambda Function GetQualities to Get data from the Baselines table, using code from lambda/GetQualities.js

## Create REST API to get data from baselines table by calling GetQualities lambda
Enable CORS & Deploy

## Update your URL in the interface/qualities.js

qualities.js

## Create a S3 Bucket

Upload all files from interface folder to the newly created s3 bucket

Congratulations!! you are ready to go

