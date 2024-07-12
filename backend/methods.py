from db_connection import connection
from datetime import time
from decimal import Decimal

def custom_data_of_weather_aws3(start_date,end_date):
    try:
        cur=connection.cursor()
        cur.execute('SELECT * FROM "Weather"."aws3" WHERE "Date" BETWEEN %s AND %s', (start_date, end_date))
        rows=cur.fetchall()
        cur.close()
        results=[]
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name]=str(row[i]) if isinstance(row[i],time) else row[i]
            results.append(result)
        return results
    except:
        return []

def custom_data_of_weather_aws4(start_date,end_date):
    try:
        cur=connection.cursor()
        cur.execute('SELECT * FROM "Weather"."aws4" WHERE "Date" BETWEEN %s AND %s', (start_date, end_date))
        rows=cur.fetchall()
        cur.close()
        results=[]
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name]=str(row[i]) if isinstance(row[i],time) else row[i]
            results.append(result)
        return results
    except:
        return []

def daily_data_of_weather_aws3(start_date,end_date):
    try:
        cur=connection.cursor()
        cur.execute(''' SELECT 
                            "Date",
                            AVG("Temp1") AS "Temp1",
                            AVG("Temp2") AS "Temp2",
                            AVG("RH1") AS "RH1",
                            AVG("RH2") AS "RH2",
                            AVG("W_Speed") AS "W_Speed",
                            AVG("A_W_Speed") AS "A_W_Speed",
                            AVG("Max_W_Speed") AS "Max_W_Speed",
                            AVG("W_Dir") AS "W_Dir",
                            AVG("SolarRadiation") AS "SolarRadiation",
                            AVG("Baro_Press") AS "Baro_Press",
                            AVG("SHF1") AS "SHF1",
                            AVG("SHF2") AS "SHF2",
                            AVG("LavelInPan") AS "LavelInPan",
                            SUM("Rain") AS "Rain"
                        FROM "Weather"."aws3"
                        WHERE "Date" BETWEEN %s AND %s
                        GROUP BY "Date"
                        ORDER BY "Date"
                    ''', (start_date, end_date))
        rows=cur.fetchall()
        cur.close()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                value = row[i]
                # Check if the value is a floating-point number
                if isinstance(value, float):
                    # Format to two decimal places
                    value = round(value, 2)
                # Convert time objects to string
                elif isinstance(value, time):
                    value = str(value)
                result[column.name] = value
            results.append(result)
        return results
    except:
        return []
    

def daily_data_of_weather_aws4(start_date,end_date):
    try:
        cur=connection.cursor()
        cur.execute(''' SELECT 
                            "Date",
                            AVG("Air_Temp1") AS "Air_Temp1",
                            AVG("Air_Temp2") AS "Air_Temp2",
                            AVG("Air_Temp3") AS "Air_Temp3",
                            AVG("RH1") AS "RH1",
                            AVG("RH2") AS "RH2",
                            AVG("RH3") AS "RH3",
                            AVG("Wind_Speed") AS "Wind_Speed",
                            AVG("Max_Wind_Speed") AS "Max_Wind_Speed",
                            AVG("Min_Wind_Speed") AS "Min_Wind_Speed",
                            AVG("Wind_Direction") AS "Wind_Direction",
                            AVG("Solar_Radiation") AS "Solar_Radiation",
                            AVG("Atm_Pressure") AS "Atm_Pressure",
                            AVG("SHF1") AS "SHF1",
                            AVG("SHF2") AS "SHF2",
                            SUM("Rainfall") AS "Rainfall"
                        FROM "Weather"."aws4"
                        WHERE "Date" BETWEEN %s AND %s
                        GROUP BY "Date"
                        ORDER BY "Date"
                    ''', (start_date, end_date))
        rows=cur.fetchall()
        cur.close()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                value = row[i]
                # Check if the value is a floating-point number
                if isinstance(value, float):
                    # Format to two decimal places
                    value = round(value, 2)
                elif isinstance(value, Decimal):
                    value = round(float(value),0)
                # Convert time objects to string
                elif isinstance(value, time):
                    value = str(value)
                result[column.name] = value
            results.append(result)
        return results
    except:
        return []



def weekly_data_of_weather_aws3(start_date, end_date):
    try:
        cur = connection.cursor()
        cur.execute(''' SELECT 
                            DATE_TRUNC('week',"Date")::date AS "Date",
                            AVG("Temp1") AS "Temp1",
                            AVG("Temp2") AS "Temp2",
                            AVG("RH1") AS "RH1",
                            AVG("RH2") AS "RH2",
                            AVG("W_Speed") AS "W_Speed",
                            AVG("A_W_Speed") AS "A_W_Speed",
                            AVG("Max_W_Speed") AS "Max_W_Speed",
                            AVG("W_Dir") AS "W_Dir",
                            AVG("SolarRadiation") AS "SolarRadiation",
                            AVG("Baro_Press") AS "Baro_Press",
                            AVG("SHF1") AS "SHF1",
                            AVG("SHF2") AS "SHF2",
                            AVG("LavelInPan") AS "LavelInPan",
                            SUM("Rain") AS "Rain"
                        FROM "Weather"."aws3"
                        WHERE "Date" BETWEEN %s AND %s
                        GROUP BY DATE_TRUNC('week',"Date")::date
                        ORDER BY DATE_TRUNC('week',"Date")::date
                    ''', (start_date, end_date))
        rows = cur.fetchall()
        cur.close()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                value = row[i]
                # Check if the value is a floating-point number
                if isinstance(value, float):
                    # Format to two decimal places
                    value = round(value, 2)
                # Convert time objects to string
                elif isinstance(value, time):
                    value = str(value)
                result[column.name] = value
            results.append(result)
        return results
    except:
        return []
    

def weekly_data_of_weather_aws4(start_date, end_date):
    try:
        cur = connection.cursor()
        cur.execute(''' SELECT 
                            DATE_TRUNC('week',"Date")::date AS "Date",
                            AVG("Air_Temp1") AS "Air_Temp1",
                            AVG("Air_Temp2") AS "Air_Temp2",
                            AVG("Air_Temp3") AS "Air_Temp3",
                            AVG("RH1") AS "RH1",
                            AVG("RH2") AS "RH2",
                            AVG("Wind_Speed") AS "Wind_Speed",
                            AVG("Max_Wind_Speed") AS "Max_Wind_Speed",
                            AVG("Min_Wind_Speed") AS "Min_Wind_Speed",
                            AVG("Wind_Direction") AS "Wind_Direction",
                            AVG("Solar_Radiation") AS "Solar_Radiation",
                            AVG("Atm_Pressure") AS "Atm_Pressure",
                            AVG("SHF1") AS "SHF1",
                            AVG("SHF2") AS "SHF2",
                            SUM("Rainfall") AS "Rainfall"
                        FROM "Weather"."aws4"
                        WHERE "Date" BETWEEN %s AND %s
                        GROUP BY DATE_TRUNC('week',"Date")::date
                        ORDER BY DATE_TRUNC('week',"Date")::date
                    ''', (start_date, end_date))
        rows = cur.fetchall()
        cur.close()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                value = row[i]
                # Check if the value is a floating-point number
                if isinstance(value, float):
                    # Format to two decimal places
                    value = round(value, 2)
                elif isinstance(value,Decimal):
                    value = round(float(value),0)
                # Convert time objects to string
                elif isinstance(value, time):
                    value = str(value)
                result[column.name] = value
            results.append(result)
        return results
    except:
        return []


def soil_moisture(start_date,end_date,id):
    try:
        cur = connection.cursor()
        cur.execute('SELECT * FROM "Soil Moisture"."spectrum%s" WHERE "Date" BETWEEN %s AND %s',(id,start_date,end_date))
        rows = cur.fetchall()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
            results.append(result)
        
        cur.close()
        return results
    except:
        return []

    
def data_of_soil_moisture(id,year):
    try:
        cur = connection.cursor()
        cur.execute(f'SELECT * FROM "Soil Moisture {year}"."spectrum{id}"')
        rows = cur.fetchall()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
            results.append(result)
        
        cur.close()
        return results
    except:
        return []

def data_of_plant_height(id,year):
    try:
        cur = connection.cursor()
        cur.execute(f'''SELECT "Date", "AVG{id}", "SE{id}" FROM "Plant Height"."plant_height_{year}" WHERE "AVG{id}" != 'NAN' AND "SE{id}" !='NAN' ''')
        rows = cur.fetchall()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
            results.append(result)
        cur.close()
        return results
    except:
        return []

def data_of_leaf_area_index(id,year):
    try:
        cur = connection.cursor()
        cur.execute(f'''SELECT "Date" , "Plot{id}" FROM "Leaf Area Index"."leaf_area_index_{year}" WHERE "Plot{id}" != 'NAN' ''')
        rows = cur.fetchall()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
            results.append(result)
        cur.close()
        return results
    except:
        return []
    
def data_of_root_depth(id,year):
    try:
        cur = connection.cursor()
        cur.execute(f'''SELECT "Date" , "Plot{id}" FROM "Root Depth"."root_depth_{year}" WHERE "Plot{id}" != 'NAN' ''')
        rows = cur.fetchall()
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
            results.append(result)
        cur.close()
        return results
    except:
        return []
    
def wind_speed_from_weather_aws3(start_date,end_date):
    cur=connection.cursor()
    cur.execute('''
                WITH BetweenDates AS (
	                SELECT * FROM  "Weather"."aws3"
	                WHERE "Date" BETWEEN %s AND %s
                ),
                Speed_Group_Count AS (
    SELECT
        CASE 
            WHEN "W_Dir" <= 30 THEN 'Group_1'
            WHEN "W_Dir" > 30 AND "W_Dir" <= 60 THEN 'Group_2'
            WHEN "W_Dir" > 60 AND "W_Dir" <= 90 THEN 'Group_3'
            WHEN "W_Dir" > 90 AND "W_Dir" <= 120 THEN 'Group_4'
            WHEN "W_Dir" > 120 AND "W_Dir" <= 150 THEN 'Group_5'
            WHEN "W_Dir" > 150 AND "W_Dir" <= 180 THEN 'Group_6'
			WHEN "W_Dir" > 180 AND "W_Dir" <= 210 THEN 'Group_7'
            WHEN "W_Dir" > 210 AND "W_Dir" <= 240 THEN 'Group_8'
            WHEN "W_Dir" > 240 AND "W_Dir" <= 270 THEN 'Group_9'
            WHEN "W_Dir" > 270 AND "W_Dir" <= 300 THEN 'Group_10'
            WHEN "W_Dir" > 300 AND "W_Dir" <= 330 THEN 'Group_11'
            WHEN "W_Dir" > 330 THEN 'Group_12'
        END AS Group_id,
        CASE
            WHEN "W_Speed" <= 0.5 THEN 'Speed_0'
            WHEN "W_Speed" > 0.5 AND "W_Speed" <= 1 THEN 'Speed_1'
			WHEN "W_Speed" > 1 AND "W_Speed" <= 2 THEN 'Speed_2'
			WHEN "W_Speed" > 2 AND "W_Speed" <= 3 THEN 'Speed_3'
			WHEN "W_Speed" > 3 AND "W_Speed" <= 4 THEN 'Speed_4'
            WHEN "W_Speed" > 4 AND "W_Speed" <= 5 THEN 'Speed_5'
            WHEN "W_Speed" > 5 THEN 'Speed_6'
        END AS Speed_id,
        COUNT(*) AS Count_Per_Group_Speed
    FROM 
        BetweenDates
    GROUP BY 
        Group_id, Speed_id
),
Overall_Count AS (
    SELECT 
        COUNT(*) AS Total_Count
    FROM 
        BetweenDates
)

SELECT 
    Group_id,
    Speed_id,
    Count_Per_Group_Speed,
    (Count_Per_Group_Speed * 100.0) / (SELECT Total_Count FROM Overall_Count) AS Percentage
FROM 
    Speed_Group_Count;
                ''',(start_date,end_date))
    rows=cur.fetchall()
    cur.close()
    pairs_dict = {}
    for group in range(1, 13):
        for speed in range(0, 7):
            pairs_dict[("Group_" + str(group)+"Speed_" + str(speed))] = 0

    for row in rows:
        group_id = row[0]
        speed_id = row[1]
        percentage = "%.4f" % row[3]  # Assuming percentage is the fourth column in the query result
        pairs_dict[(group_id+speed_id)] = float(percentage)
    newData = {
        f"set{i}": [] for i in range(0, 7)
    }
    for i in range(0, 7):
        for j in range(1, 13):
            newData[f"set{i}"].append(pairs_dict[f"Group_{j}Speed_{i}"])
    
    return newData

 
def average_wind_speed_from_weather_aws3(start_date,end_date):
    cur=connection.cursor()
    cur.execute('''
                WITH BetweenDates AS (
	                SELECT * FROM  "Weather"."aws3"
	                WHERE "Date" BETWEEN %s AND %s
                ),
                Speed_Group_Count AS (
    SELECT
        CASE 
            WHEN "W_Dir" <= 30 THEN 'Group_1'
            WHEN "W_Dir" > 30 AND "W_Dir" <= 60 THEN 'Group_2'
            WHEN "W_Dir" > 60 AND "W_Dir" <= 90 THEN 'Group_3'
            WHEN "W_Dir" > 90 AND "W_Dir" <= 120 THEN 'Group_4'
            WHEN "W_Dir" > 120 AND "W_Dir" <= 150 THEN 'Group_5'
            WHEN "W_Dir" > 150 AND "W_Dir" <= 180 THEN 'Group_6'
			WHEN "W_Dir" > 180 AND "W_Dir" <= 210 THEN 'Group_7'
            WHEN "W_Dir" > 210 AND "W_Dir" <= 240 THEN 'Group_8'
            WHEN "W_Dir" > 240 AND "W_Dir" <= 270 THEN 'Group_9'
            WHEN "W_Dir" > 270 AND "W_Dir" <= 300 THEN 'Group_10'
            WHEN "W_Dir" > 300 AND "W_Dir" <= 330 THEN 'Group_11'
            WHEN "W_Dir" > 330 THEN 'Group_12'
        END AS Group_id,
        CASE
            WHEN "A_W_Speed" <= 0.5 THEN 'Speed_0'
            WHEN "A_W_Speed" > 0.5 AND "A_W_Speed" <= 1 THEN 'Speed_1'
			WHEN "A_W_Speed" > 1 AND "A_W_Speed" <= 2 THEN 'Speed_2'
			WHEN "A_W_Speed" > 2 AND "A_W_Speed" <= 3 THEN 'Speed_3'
			WHEN "A_W_Speed" > 3 AND "A_W_Speed" <= 4 THEN 'Speed_4'
            WHEN "A_W_Speed" > 4 AND "A_W_Speed" <= 5 THEN 'Speed_5'
            WHEN "A_W_Speed" > 5 THEN 'Speed_6'
        END AS Speed_id,
        COUNT(*) AS Count_Per_Group_Speed
    FROM 
        BetweenDates
    GROUP BY 
        Group_id, Speed_id
),
Overall_Count AS (
    SELECT 
        COUNT(*) AS Total_Count
    FROM 
        BetweenDates
)

SELECT 
    Group_id,
    Speed_id,
    Count_Per_Group_Speed,
    (Count_Per_Group_Speed * 100.0) / (SELECT Total_Count FROM Overall_Count) AS Percentage
FROM 
    Speed_Group_Count;
                ''',(start_date,end_date))
    rows=cur.fetchall()
    cur.close()
    pairs_dict = {}
    for group in range(1, 13):
        for speed in range(0, 7):
            pairs_dict[("Group_" + str(group)+"Speed_" + str(speed))] = 0

    for row in rows:
        group_id = row[0]
        speed_id = row[1]
        percentage = "%.4f" % row[3]  # Assuming percentage is the fourth column in the query result
        pairs_dict[(group_id+speed_id)] = float(percentage)
    newData = {
        f"set{i}": [] for i in range(0, 7)
    }
    for i in range(0, 7):
        for j in range(1, 13):
            newData[f"set{i}"].append(pairs_dict[f"Group_{j}Speed_{i}"])
    
    return newData


def max_wind_speed_from_weather_aws3(start_date,end_date):
    cur=connection.cursor()
    cur.execute('''
                WITH BetweenDates AS (
	                SELECT * FROM  "Weather"."aws3"
	                WHERE "Date" BETWEEN %s AND %s
                ),
                Speed_Group_Count AS (
    SELECT
        CASE 
            WHEN "W_Dir" <= 30 THEN 'Group_1'
            WHEN "W_Dir" > 30 AND "W_Dir" <= 60 THEN 'Group_2'
            WHEN "W_Dir" > 60 AND "W_Dir" <= 90 THEN 'Group_3'
            WHEN "W_Dir" > 90 AND "W_Dir" <= 120 THEN 'Group_4'
            WHEN "W_Dir" > 120 AND "W_Dir" <= 150 THEN 'Group_5'
            WHEN "W_Dir" > 150 AND "W_Dir" <= 180 THEN 'Group_6'
			WHEN "W_Dir" > 180 AND "W_Dir" <= 210 THEN 'Group_7'
            WHEN "W_Dir" > 210 AND "W_Dir" <= 240 THEN 'Group_8'
            WHEN "W_Dir" > 240 AND "W_Dir" <= 270 THEN 'Group_9'
            WHEN "W_Dir" > 270 AND "W_Dir" <= 300 THEN 'Group_10'
            WHEN "W_Dir" > 300 AND "W_Dir" <= 330 THEN 'Group_11'
            WHEN "W_Dir" > 330 THEN 'Group_12'
        END AS Group_id,
        CASE
            WHEN "Max_W_Speed" <= 0.5 THEN 'Speed_0'
            WHEN "Max_W_Speed" > 0.5 AND "Max_W_Speed" <= 1 THEN 'Speed_1'
			WHEN "Max_W_Speed" > 1 AND "Max_W_Speed" <= 2 THEN 'Speed_2'
			WHEN "Max_W_Speed" > 2 AND "Max_W_Speed" <= 3 THEN 'Speed_3'
			WHEN "Max_W_Speed" > 3 AND "Max_W_Speed" <= 4 THEN 'Speed_4'
            WHEN "Max_W_Speed" > 4 AND "Max_W_Speed" <= 5 THEN 'Speed_5'
            WHEN "Max_W_Speed" > 5 THEN 'Speed_6'
        END AS Speed_id,
        COUNT(*) AS Count_Per_Group_Speed
    FROM 
        BetweenDates
    GROUP BY 
        Group_id, Speed_id
),
Overall_Count AS (
    SELECT 
        COUNT(*) AS Total_Count
    FROM 
        BetweenDates
)

SELECT 
    Group_id,
    Speed_id,
    Count_Per_Group_Speed,
    (Count_Per_Group_Speed * 100.0) / (SELECT Total_Count FROM Overall_Count) AS Percentage
FROM 
    Speed_Group_Count;
                ''',(start_date,end_date))
    rows=cur.fetchall()
    cur.close()
    pairs_dict = {}
    for group in range(1, 13):
        for speed in range(0, 7):
            pairs_dict[("Group_" + str(group)+"Speed_" + str(speed))] = 0

    for row in rows:
        group_id = row[0]
        speed_id = row[1]
        percentage = "%.4f" % row[3]  # Assuming percentage is the fourth column in the query result
        pairs_dict[(group_id+speed_id)] = float(percentage)
    newData = {
        f"set{i}": [] for i in range(0, 7)
    }
    for i in range(0, 7):
        for j in range(1, 13):
            newData[f"set{i}"].append(pairs_dict[f"Group_{j}Speed_{i}"])
    
    return newData
def get_comparison_data_from_aws(start_date, end_date, aws3_var, aws4_var, fun):
    try:
        cur = connection.cursor()
        cur.execute(f'''
            WITH AWS3_DATA AS (
                SELECT "Date", {fun}("{aws3_var}") AS "{aws3_var}"
                FROM "Weather"."aws3"
                WHERE "Date" BETWEEN '{start_date}' AND '{end_date}'
                GROUP BY "Date"
            ),
            AWS4_DATA AS (
                SELECT "Date", {fun}("{aws4_var}") AS "{aws4_var}"
                FROM "Weather"."aws4"
                WHERE "Date" BETWEEN '{start_date}' AND '{end_date}'
                GROUP BY "Date"
            )
            SELECT A3."Date" AS "Date", A3."{aws3_var}" AS "AWS3_{aws3_var}", A4."{aws4_var}" AS "AWS4_{aws4_var}"
            FROM AWS3_DATA AS A3
            JOIN AWS4_DATA AS A4
            ON A3."Date" = A4."Date"
            ORDER BY A3."Date"
        ''')
        rows = cur.fetchall()
        cur.close()
        
        results = []
        for row in rows:
            result = {}
            for i, column in enumerate(cur.description):
                value = row[i]
                if isinstance(value, float):
                    value = round(value, 2)
                elif isinstance(value, Decimal):
                    value = round(float(value), 0)
                elif isinstance(value, time):
                    value = str(value)
                result[column.name] = value
            results.append(result)
        return results
    except:
        return []