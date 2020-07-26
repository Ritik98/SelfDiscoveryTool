const AWS = require('aws-sdk');
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Extract values from event and format as strings
    let property = (`${event.property}`);
    let description= (`${event.description}`);
    let category = (`${event.category}`);
    
    let msg = JSON.stringify(`Added Property ${event.property} having description ${event.description}`);

    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'LifeToolsDataSet',
        Item: {
            'Property': property,
            'Meaning': description,
            'Category': category,
            'Status':'0',
            'Level':'1'
        }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
    await dynamodb.put(params).promise();
    // Create a JSON object with our response and store it in a constant
    const response = {
        statusCode: 200,
        body: msg
    };
    // Return the response constant
    return response;
};
