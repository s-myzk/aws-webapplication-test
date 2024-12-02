import json
import boto3

dynamodb = boto3.resource('dynamodb')
TABLE_NAME = 'Users'

def lambda_handler(event, context):
    table = dynamodb.Table(TABLE_NAME)
    http_method = event["requestContext"]["http"]["method"]

    # HTTP POST Request - DynamoDBへのデータ保存
    if http_method == "POST":
        body = json.loads(event["body"])
        # DynamoDBへのデータ保存
        table.put_item(
            Item = {
                "name": body["name"],
                "location": body["location"]
            }
        )
        result = {"msg": "Data Inserted"}
        status_code = 200

    # HTTP GET Request - DynamoDBへのデータ取得
    elif http_method == "GET":
        result = table.scan()
        status_code = 200

    return {
        'statusCode': status_code,
        'body': json.dumps(result),
        'headers': {
            'content-type': 'application/json'
        }
    }