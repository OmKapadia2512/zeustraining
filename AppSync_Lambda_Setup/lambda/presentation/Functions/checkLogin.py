import json
from http import HTTPStatus
import jwt
from datetime import datetime, timedelta
from ..db_utils import get_db_connection, close_db_connection, build_response
from flask import request

# Define a secret key for JWT token
SECRET_KEY = 'your_secret_key_here'

def checkLogin(event):

    
    connection = get_db_connection()
    try:
        cursor = connection.cursor()
        user_email = event['arguments']['loginCredentials']['userEmail']
        user_password = event['arguments']['loginCredentials']['userPassword']
        cursor.execute("""
            SELECT id, guid, first_name, last_name, email, password, phone_no, profile_pic 
            FROM "user" 
            WHERE email = %s
        """, (user_email,))
        row = cursor.fetchone()
        if row:
            stored_password = row[5]
            if user_password == stored_password:
                
                jwt_payload = {
                    'id': row[0],
                    'guid': row[1],
                    'first_name': row[2],
                    'last_name': row[3],
                    "email": row[4],
                    "profile_pic": row[7]
                     
                }
                jwt_token = jwt.encode(jwt_payload, SECRET_KEY, algorithm='HS256')

                print(jwt_token)
                
                user_data = {
                    'id': row[0],
                    'guid': row[1],
                    'first_name': row[2],
                    'last_name': row[3],
                    'email': row[4],
                    'phone_no': row[5],
                    'resume': row[6],
                    'profile_pic': row[7],
                    'token': jwt_token  # Add token to user data
                }
                
                # Return response with user data and HTTP OK status
                return build_response(HTTPStatus.OK, user_data)
            else:
                # Return unauthorized status if password is incorrect
                return build_response(HTTPStatus.UNAUTHORIZED, "Wrong Password")
        else:
            # Return not found status if user does not exist
            return build_response(HTTPStatus.NOT_FOUND, "No user found.")
    except Exception as e:
        # Return internal server error status if an exception occurs
        return build_response(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": str(e)})
    finally:
        # Close database connection
        close_db_connection(connection)
