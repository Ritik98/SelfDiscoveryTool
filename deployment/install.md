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









# Step 1

# Step 2

# Step 3

