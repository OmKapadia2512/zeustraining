import json
from http import HTTPStatus
import jwt
from datetime import datetime, timedelta
from ..db_utils import build_response

SECRET_KEY = "your_secret_key_here"


def authentication(event):

    data = []
    event_arguments=event['arguments']
    token = event_arguments["token"]
    print(token)

    jwt_token = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])

    data = {
        "id": jwt_token["id"],
        "guid": jwt_token["guid"],
        "first_name": jwt_token["first_name"],
        "last_name": jwt_token["last_name"],
        "email": jwt_token["email"],
        "profile_pic": jwt_token["profile_pic"],
    }

    return build_response(HTTPStatus.OK, data)