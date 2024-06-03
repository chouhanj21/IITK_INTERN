from db_connection import connection
from datetime import time

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
        cur.execute(f'SELECT "Date", "AVG{id}", "SE{id}" FROM "Plant Height"."plant_height_{year}"')
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