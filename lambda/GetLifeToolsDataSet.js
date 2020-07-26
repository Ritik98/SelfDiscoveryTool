const AWS = require('aws-sdk');
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Create JSON object with parameters for DynamoDB and store in a variable
    let category = (`${event.category}`);

        
var params = {
    TableName : "LifeToolsDataSet",
    KeyConditionExpression: "Category = :category",
    ExpressionAttributeValues: {
        ":category": category
    }
};

var value = '';


await dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("GetItem succeeded");
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        value= data;
    }
}).promise();
    return value.Items;
};
