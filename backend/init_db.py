import psycopg2
from methods import printall
#postgres is default schema which is passing as an arguement
connection = psycopg2.connect(database='postgres',host='localhost',user='postgres',password='password',port='5433')
connection.autocommit = True


# cur = connection.cursor()

"""Create Database"""
# cur.execute('''CREATE DATABASE mydatabase''')

"""Delete Database"""
# cur.execute('''DROP DATABASE IF EXISTS mydatabase''')

"""Create a Schema"""
# cur.execute('''CREATE SCHEMA IF NOT EXISTS myschema''')

"""Delete a Schema"""
# cur.execute('''DROP SCHEMA IF EXISTS myschema CASCADE''')

"""Create a Table in A Schema"""
# schema_name="myschema"
# table_name="mytable"
# cur.execute(f'''CREATE TABLE IF NOT EXISTS {schema_name}.{table_name} (
#                 id SERIAL PRIMARY KEY,
#                 name VARCHAR(100),
#                 description VARCHAR(100)
#             )''')

"""Drop a Table"""
# schema_name="myschema"
# table_name="mytable"
# cur.execute(f'''DROP TABLE  IF EXISTS {schema_name}.{table_name}''')


"""Create a Table in public Schema"""
# cur.execute('''
# CREATE TABLE weather (
#     city            varchar(80),
#     temp_lo         int,           -- low temperature (these are comments after --)
#     temp_hi         int,           -- high temperature
#     prcp            real,          -- precipitation
#     date            date
# )''')

"""Insert Data in Table"""
# cur.execute('''INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27')''')
# cur.execute('''INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
#   VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29')''')
# cur.execute('''INSERT INTO weather (date, temp_lo, temp_hi, prcp, city)
#   VALUES ('1991-11-29', 43, 57, 0.0, 'Hayward')''')

"""Querying in Table"""
# cur.execute('''SELECT * FROM weather''')
# printall(cur)

# cur.execute('''SELECT city FROM weather''')
# printall(cur)

# cur.execute('''SELECT DISTINCT city FROM weather''')
# printall(cur)

# cur.execute('''SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather''')
# printall(cur)

# cur.execute('''SELECT * FROM weather WHERE city = 'San Francisco' AND prcp > 0.0''')
# printall(cur)

# cur.execute('''SELECT * FROM weather ORDER BY city''')
# printall(cur)

# cur.execute('''SELECT * FROM weather ORDER BY city, temp_lo''')
# printall(cur)

# cur.execute('''SELECT max(temp_lo) FROM weather''')
# printall(cur)

# cur.execute('''SELECT city from weather where temp_lo = (SELECT max(temp_lo) FROM weather)''')
# printall(cur)

# cur.execute('''SELECT city, count(*), max(temp_lo) FROM weather GROUP BY city''')
# printall(cur)

# cur.execute('''SELECT city, count(*), max(temp_lo) FROM weather GROUP BY city HAVING max(temp_lo) < 45''')
# printall(cur)

# cur.close()
# connection.close()



