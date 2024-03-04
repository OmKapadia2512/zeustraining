import psycopg2
from psycopg2 import extras
from ..db_utils import get_db_connection, close_db_connection, build_response

def createUser(event):
    print("inside createUSer")
    event_arguments = event.get('arguments', {})
    personalInfo = event_arguments.get('userInput', {}).get('personalInfo')
    educationalQualification = event_arguments.get('userInput', {}).get('educationalQualification')
    professionalQualification = event_arguments.get('userInput', {}).get('professionalQualification')

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        first_name = personalInfo.get('first_name')
        last_name = personalInfo.get('last_name')
        email = personalInfo.get('email')
        password = personalInfo.get('password')
        phone_no = personalInfo.get('phone_no')
        resume = personalInfo.get('resume')
        portfolio_url = personalInfo.get('portfolio_url')
        profile_pic = personalInfo.get('profile_pic')
        preferred_Job_roles_id = personalInfo.get('preferred_Job_roles_id')

        aggregate_percentage = educationalQualification.get('aggregate_percentage')
        passing_year = educationalQualification.get('passing_year')
        degree = educationalQualification.get('degree')
        stream = educationalQualification.get('stream')
        college = educationalQualification.get('college')
        college_city = educationalQualification.get('college_city')

        applicant_type = professionalQualification.get('applicant_type')
        applied_test = professionalQualification.get('applied_test')
        applied_test_role = professionalQualification.get('applied_test_role')
        familiarTechnologies = professionalQualification.get('familiarTechnologies')
        experienced_qualification = professionalQualification.get('experienced_qualification')

        cursor.execute("""
            INSERT INTO "user" (first_name, last_name, email, password, phone_no, resume, portfolio_url, profile_pic)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        """, (first_name, last_name, email, password, phone_no, resume, portfolio_url, profile_pic))

        user_id = cursor.fetchone()[0]

        user_jobRole_data = [(user_id, job_role_id) for job_role_id in preferred_Job_roles_id]
        sql_user_has_job_role = """
            INSERT INTO user_has_job_role (user_id, job_role_id)
            VALUES %s
        """
        extras.execute_values(cursor, sql_user_has_job_role, user_jobRole_data)

        cursor.execute("""
            INSERT INTO educational_qualifications (user_id, aggregate_percentage, passing_year, degree, stream, college, college_city)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (user_id, aggregate_percentage, passing_year, degree, stream, college, college_city))

        experienced_qualification_id = None
        if experienced_qualification:
            cursor.execute("""
                INSERT INTO experienced_qualification (experience_year, current_ctc, expected_ctc, notice_period, notice_period_end, notice_period_duration)
                VALUES (%s, %s, %s, %s, %s, %s)
                RETURNING id
            """, (experienced_qualification['experience_year'], experienced_qualification['current_ctc'], experienced_qualification['expected_ctc'], experienced_qualification['notice_period'], experienced_qualification['notice_period_end'], experienced_qualification['notice_period_duration']))

            experienced_qualification_id = cursor.fetchone()[0]

            expertise_technology_records = [(experienced_qualification_id, technology_id) for technology_id in experienced_qualification['expertiseTechnologies']]
            sql_expertise_technology = """
                INSERT INTO expertise_technology (experienced_qualification_id, technology_id)
                VALUES %s
            """
            extras.execute_values(cursor, sql_expertise_technology, expertise_technology_records)

        cursor.execute("""
            INSERT INTO professional_qualification (user_id, applicant_type, applied_test, applied_test_role, experienced_qualification_id)
            VALUES (%s, %s, %s, %s, %s)
            RETURNING id
        """, (user_id, applicant_type, applied_test, applied_test_role, experienced_qualification_id))

        professional_qualification_id = cursor.fetchone()[0]

        familiarTechnologies_records = [(professional_qualification_id, technology_id) for technology_id in familiarTechnologies]
        sql_familiar_technology = """
            INSERT INTO familiar_technology (professional_qualification_id, technology_id)
            VALUES %s
        """
        extras.execute_values(cursor, sql_familiar_technology, familiarTechnologies_records)

        connection.commit()
        print("registrationSuccefull")
        results = {
            "message": "Registration successful",
            "user_id": user_id
        }

        return build_response(200, results)

    except Exception as e:
        print("Error inserting data:", e)
        connection.rollback()
        # Creating and returning error message
        error_message = "Error occurred while creating user"
        return build_response(500, {"message": error_message})

    finally:
        cursor.close()
        close_db_connection(connection)
