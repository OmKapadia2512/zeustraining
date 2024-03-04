import psycopg2
from http import HTTPStatus
from ..db_utils import get_db_connection, close_db_connection, build_response

def walkInDriveById(guid):
   
    print(guid)
    connection = get_db_connection()
    try:
        cursor = connection.cursor()

        drive_query = """
                        SELECT id, guid, drive_title, start_date, end_date, location
                        FROM walk_in_drive WHERE guid=%s
                    """
        job_title_query = """
                            SELECT  jr.id,jr.job_title,jr.package,jr.job_description,job_requirements
                            FROM job_role jr
                            JOIN drive_has_job_role dhjr ON jr.id = dhjr.job_role_id
                            WHERE dhjr.drive_id = %s
                        """
        
        time_slots_query = """
            SELECT ts.id, ts.slot_timings
            FROM time_slot ts
            JOIN drive_has_time_slot dhts ON dhts.time_slot_id = ts.id   
            WHERE dhts.drive_id = %s
        """

        cursor.execute(drive_query, (guid,))
        drive = cursor.fetchone()
        if not drive:
            return build_response(HTTPStatus.NOT_FOUND, "Drive not found")

        drive_id = drive[0]
        # print(drive_id)
        
        # Fetching JobRole_details 
        cursor.execute(job_title_query, (drive_id,))
        job_details = []
        for row in cursor.fetchall():
            job_details.append({
                'id': row[0],
                'job_title': row[1],
                'package': row[2],
                'job_description': row[3],
                'job_requirements': row[4]
            })
        
        # Fetching TimeSlot Details
        cursor.execute(time_slots_query, (drive_id,))
        time_slots_details = []
        for row in cursor.fetchall():
            time_slots_details.append({
                'id': row[0],
                'time_slot': row[1]
            })
        
        # Close the cursor after all necessary operations
        cursor.close()

        result = {
            'id': drive[0],
            'guid': drive[1],
            'drive_title': drive[2],
            'start_date': drive[3],
            'end_date': drive[4],
            'location': drive[5],
            'job_Roles': job_details,
            'time_slots': time_slots_details
        }
        # print(result)
        return build_response(HTTPStatus.OK, result)

    except psycopg2.Error as e:
        return build_response(HTTPStatus.INTERNAL_SERVER_ERROR, f"Database error: {str(e)}")
    
    finally:
        close_db_connection(connection)
