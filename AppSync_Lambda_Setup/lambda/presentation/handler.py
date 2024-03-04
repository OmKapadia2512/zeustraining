import json
from .Functions.allWalkInDrives import allWalkInDrives
from .Functions.checkLogin import checkLogin
from .Functions.appliedDrive import appliedDrive
from .Functions.createUser import createUser
from .Functions.walkInDriveById import walkInDriveById
from .Functions.authentication import authentication

def handle_graphql(event, context):
    
    print("line 10")
    # print(event)
    
    if 'body' in event:
        event_body = json.loads(event["body"])
    else:
        event_body = event

    data = []
    if isinstance(event_body, list):
        for each_event in event_body:
            data.append(handle_each_request(each_event))
    else:
        data = handle_each_request(event_body)

    return data

def handle_each_request(event):
    field_name = event.get('info', {}).get('fieldName')
    print(field_name)
    

    if field_name == 'allWalkInDrives':
        return allWalkInDrives(event)
    elif field_name == 'checkLogin':
        return checkLogin(event)
    elif field_name == 'appliedDrive':
        
        return appliedDrive(event) 
    
    elif field_name == 'createUser':
        return createUser(event)
    elif field_name == 'walkInDriveById':
        return walkInDriveById(event.get('arguments', {}).get('input'))
    elif field_name == 'authentication':
            print("line 43")
            return authentication(event)
    else:
        return {
            'statusCode': 404,
            'body': 'Handler not found for field name: {}'.format(field_name),
            'headers': {'Content-Type': 'application/json'}
        }
