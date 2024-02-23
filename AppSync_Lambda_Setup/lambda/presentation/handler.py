def build_response(status_code, body):
    return {
        "statusCode": status_code,
        "body": json.dumps(body),
        "headers": {"Content-Type": "application/json"},
    }


import json
from http import HTTPStatus
import psycopg2

DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "WalkIn"
DB_USER = "postgres"
DB_PASSWORD = "2512"


def get_db_connection():
    connection = psycopg2.connect(
        host=DB_HOST, port=DB_PORT, dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD
    )
    return connection


def close_db_connection(connection):
    if connection:
        connection.close()


def handle_graphql(event, context):
    event = json.loads(event["body"])

    data = []
    print("hello")
    if type(event) == list:
        for each_event in event:
            data.append(handle_each_request(each_event))
    else:
        data = handle_each_request(event)

    return data


def handle_each_request(event):
    field_name = event["info"]["fieldName"]
    event_source = event["source"]
    event_arguments = event["arguments"]

    data = []

    # PostgreSQL database operations
    if field_name == "getAllWalkInDrives":
        print("1")
        connection = get_db_connection()
        print("2")
        try:
            cursor = connection.cursor()
            print("3")

            cursor.execute('SELECT * FROM "walk_in_drive" ')
            results = cursor.fetchall()
            print("hiiii")
            print(results)
            data = [
                {
                    "id": row[0],
                    "guid": row[1],
                    "drive_title": row[2],
                    "start_date": str(row[3]),
                    "end_date": str(row[4]),
                    "location": row[5],
                    "dt_created": str(row[6]),
                    "dt_modified": str(row[7]),
                }
                for row in results
            ]
        finally:
            cursor.close()
            close_db_connection(connection)

    return build_response(HTTPStatus.OK, data)