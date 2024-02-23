def build_response(status_code, body):
    return {
        "statusCode": status_code,
        "body": json.dumps(body, default=str),
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

            drive_query = """
                            SELECT id, guid, drive_title, dt_created, dt_modified, start_date, end_date, location
                            FROM walk_in_drive
                        """
            job_title_query = """
                                SELECT jr.job_title,jr.package,jr.job_description,job_requirements
                                FROM job_role jr
                                JOIN drive_has_job_role dhjr ON jr.id = dhjr.job_role_id
                                WHERE dhjr.drive_id = %s
                            """
            time_slot_query = """
                                SELECT ts.slot_timings
                                FROM time_slot ts
                                JOIN drive_has_time_slot dhts ON ts.id = dhts.time_slot_id
                                WHERE dhts.drive_id = %s
                                """

            cursor.execute(drive_query)
            drives = cursor.fetchall()
            cursor.close()
            
            results = []


            for drive in drives:
                drive_id = drive[0]
                
                cursor = connection.cursor()
                cursor.execute(job_title_query, (drive_id,))
                job_details = []

                for row in cursor.fetchall():
                    job_details.append({
                        'job_title': row[0],
                        'package': row[1],
                        'job_description': row[2],
                        'job_requirements': row[3]
                    })
                cursor.execute(time_slot_query, (drive_id,))
                time_slots = [row[0] for row in cursor.fetchall()]
                cursor.close()
                result = {
                    'id': drive[0],
                    'guid': drive[1],
                    'drive_title': drive[2],
                    'dt_created': drive[3],
                    'dt_modified': drive[4],
                    'start_date': drive[5],
                    'end_date': drive[6],
                    'location': drive[7],
                    'job_Roles': job_details,
                    'time_Slots': time_slots
                }
                results.append(result)

            # Print the results
            for result in results:
                print(result)

            # Close the connection
            cursor.close()

        finally:
            cursor.close()
            close_db_connection(connection)

    return build_response(HTTPStatus.OK, results)