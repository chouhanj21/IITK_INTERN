import psycopg2
import os
# If Environment Variable not works then uncomment these two lines (try)
# from dotenv import load_dotenv
# load_dotenv()

connection = psycopg2.connect(
    database=os.getenv('DATABASE_NAME'),
    host=os.getenv('DATABASE_HOST'),
    user=os.getenv('DATABASE_USER'),
    password=os.getenv('DATABASE_PASSWORD'),
    port=os.getenv('DATABASE_PORT')
)
connection.autocommit = True