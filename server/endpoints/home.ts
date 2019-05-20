import { APIGatewayProxyCallback, Callback, Context } from "aws-lambda";
import 'source-map-support/register';

const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(Promise);

const tableName = process.env.DYNAMODB_TABLE;
const docClient = new AWS.DynamoDB.DocumentClient();

// @ts-ignore
export const handler: APIGatewayProxyCallback = (event: any, context: Context, callback: Callback) => {
  const params = {
    TableName: tableName
  };

  console.log('something for log test');
  docClient.scan(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {'Content-Type': 'text/plain'},
        body: 'couldn\'t create the form item.',
      });
    }

    // VO to Convert Data or Mapper

    console.log('aaa');
    callback(null, {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*" // Required for CORS support to work
      },
      body: JSON.stringify(data),
    });
  });
};
