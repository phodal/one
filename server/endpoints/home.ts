import { APIGatewayProxyCallback, Callback, Context } from "aws-lambda";
import 'source-map-support/register';

const AWS = require('aws-sdk');
const shortid = require('shortid');

AWS.config.setPromisesDependency(Promise);

const tableName = process.env.DYNAMODB_TABLE;
const docClient = new AWS.DynamoDB.DocumentClient();

// @ts-ignore
export const handler: APIGatewayProxyCallback = (event: any, context: Context, callback: Callback) => {
  const timestamp = new Date().getTime();
  const params = {
    TableName: tableName,
    Item: {
      title: 'hello',
      id: shortid.generate(),
      createdAt: timestamp
    }
  };

  console.log('something for log test');
  docClient.put(params, (error) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {'Content-Type': 'text/plain'},
        body: 'couldn\'t create the form item.',
      });
    }

    console.log('aaa');
    callback(null, {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
      },
      body: JSON.stringify(params.Item),
    });
  });
};
