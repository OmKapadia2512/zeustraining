import psycopg2
from http import HTTPStatus
from ..db_utils import get_db_connection, close_db_connection, build_response

def allWalkInDrives(event):
    connection = get_db_connection()
    try:
        cursor = connection.cursor()

        drive_query = """
                        SELECT id, guid, drive_title, dt_created, dt_modified, start_date, end_date, location
                        FROM walk_in_drive
                    """
        job_title_query = """
                            SELECT  jr.job_title
                            FROM job_role jr
                            JOIN drive_has_job_role dhjr ON jr.id = dhjr.job_role_id
                            WHERE dhjr.drive_id = %s
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
                    'job_title':row[0]
                }
                )
                
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
                
            }
            results.append(result)
            # print(results)

        return build_response(HTTPStatus.OK, results)

    finally:
        close_db_connection(connection)
