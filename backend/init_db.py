import psycopg2
# from methods import printall
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



## SELECT QUERY FOR DAILY AVERAGE
# SELECT "aws3"."Date",
# AVG("aws3"."Temp1") AS AvgTemp
# FROM "Weather"."aws3"
# WHERE "aws3"."Date" BETWEEN '2023-01-01' AND '2023-01-30'
# GROUP BY "aws3"."Date"


# SELECT DATE_TRUNC('week', "aws3"."Date")::date AS WeekStart,
#        AVG("aws3"."Temp1") AS AvgTemp
# FROM "Weather"."aws3"
# WHERE "aws3"."Date" BETWEEN '2023-01-01' AND '2023-01-30'
# GROUP BY DATE_TRUNC('week', "aws3"."Date")::date
# ORDER BY DATE_TRUNC('week', "aws3"."Date")::date






# WITH Speed_Group_Count AS (
#     SELECT
#         CASE 
#             WHEN "W_Dir" <= 30 THEN 'Group_1'
#             WHEN "W_Dir" > 30 AND "W_Dir" <= 60 THEN 'Group_2'
#             WHEN "W_Dir" > 60 AND "W_Dir" <= 90 THEN 'Group_3'
#             WHEN "W_Dir" > 90 AND "W_Dir" <= 120 THEN 'Group_4'
#             WHEN "W_Dir" > 120 AND "W_Dir" <= 150 THEN 'Group_5'
#             WHEN "W_Dir" > 150 AND "W_Dir" <= 180 THEN 'Group_6'
# 			WHEN "W_Dir" > 180 AND "W_Dir" <= 210 THEN 'Group_7'
#             WHEN "W_Dir" > 210 AND "W_Dir" <= 240 THEN 'Group_8'
#             WHEN "W_Dir" > 240 AND "W_Dir" <= 270 THEN 'Group_9'
#             WHEN "W_Dir" > 270 AND "W_Dir" <= 300 THEN 'Group_10'
#             WHEN "W_Dir" > 300 AND "W_Dir" <= 330 THEN 'Group_11'
#             WHEN "W_Dir" > 330 THEN 'Group_12'
#         END AS Group_id,
#         CASE
#             WHEN "W_Speed" <= 1 THEN 'Speed_1'
# 			WHEN "W_Speed" > 1 AND "W_Speed" <= 2 THEN 'Speed_2'
# 			WHEN "W_Speed" > 2 AND "W_Speed" <= 3 THEN 'Speed_3'
# 			WHEN "W_Speed" > 3 AND "W_Speed" <= 4 THEN 'Speed_4'
#             WHEN "W_Speed" > 4 AND "W_Speed" <= 5 THEN 'Speed_5'
#             WHEN "W_Speed" > 5 THEN 'Speed_6'
#         END AS Speed_id,
#         COUNT(*) AS Count_Per_Group_Speed
#     FROM 
#         "Weather"."aws3"
#     GROUP BY 
#         Group_id, Speed_id
# ),
# Overall_Count AS (
#     SELECT 
#         COUNT(*) AS Total_Count
#     FROM 
#         "Weather"."aws3"
# )

# SELECT 
#     Group_id,
#     Speed_id,
#     Count_Per_Group_Speed,
#     (Count_Per_Group_Speed * 100.0) / (SELECT Total_Count FROM Overall_Count) AS Percentage
# FROM 
#     Speed_Group_Count;

# -- ALTER TABLE "Leaf Area Index".leaf_area_index_2023
# -- RENAME TO leaf_area_index_iitk_wheat_2023;
# -- ALTER TABLE "Leaf Area Index".leaf_area_index_iitk_wheat_2023
# -- RENAME CONSTRAINT leaf_area_index_2023_pkey TO leaf_area_index_iitk_wheat_2023_pkey;



