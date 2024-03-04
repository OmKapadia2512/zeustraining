import psycopg2
from psycopg2 import extras
from ..db_utils import get_db_connection, close_db_connection

def appliedDrive(event):
    print("applied_drive")
    connection = get_db_connection()
    event_arguments = event.get('arguments', {})
    user_id = event_arguments.get('appliedDriveInput', {}).get('user_id')
    walk_in_drive_id = event_arguments.get('appliedDriveInput', {}).get('walk_in_drive_id')
    time_slot_id = event_arguments.get('appliedDriveInput', {}).get('time_slot_id')
    updated_resume = event_arguments.get('appliedDriveInput', {}).get('updated_resume')
    job_role_id = event_arguments.get('appliedDriveInput', {}).get('job_role_id')

    

    try:
        cursor = connection.cursor()
        sql = """
            INSERT INTO applied_drive (user_id, updated_resume, time_slot_id, walk_in_drive_id)
            VALUES (%s, %s, %s, %s)
            RETURNING id
        """
        sql_applied_drive_job_role = """
            INSERT INTO applied_drive_job_role (applied_drive_id, job_role_id)
            VALUES %s
        """
        cursor.execute(sql, (user_id, updated_resume, time_slot_id, walk_in_drive_id))
        inserted_id = cursor.fetchone()[0]
        print(inserted_id)
        
        applied_drive_job_role_records = [(inserted_id, role_id) for role_id in job_role_id]
        extras.execute_values(cursor, sql_applied_drive_job_role, applied_drive_job_role_records)

        connection.commit()
        print("Applied drive record inserted successfully!")
        
        return {"statusCode": 200, "body": "Applied drive record inserted successfully!"}
    except Exception as e:
        print("Error inserting applied drive record:", e)
        connection.rollback()
        return {"statusCode": 500, "body": "Error inserting applied drive record: " + str(e)}
    finally:
        cursor.close()
        close_db_connection(connection)
