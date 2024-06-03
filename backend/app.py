from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from datetime import datetime,time
from db_connection import connection

from methods import custom_data_of_weather_aws3
from methods import daily_data_of_weather_aws3
from methods import weekly_data_of_weather_aws3
from methods import data_of_plant_height
from methods import data_of_soil_moisture
from methods import data_of_leaf_area_index
from methods import data_of_root_depth
app = Flask(__name__)
# CORS(app, resources={r"/data-collection/weather/aws3": {"origins": "http://localhost:3000"}})
CORS(app)


@app.route('/data-collection/weather/aws3',methods=['POST'])
def weather_aws3():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    option=data.get('type')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
    results=[]
    if(option=='custom'):
        results=custom_data_of_weather_aws3(start_date,end_date)
    if(option=='daily'):
        results=daily_data_of_weather_aws3(start_date,end_date)
    if(option=='weekly'):
        results=weekly_data_of_weather_aws3(start_date,end_date)
    return jsonify(results)

@app.route('/data-collection/soil-moisture-<year>/spectrum/<id>')
def soil_moisture_spectrum(id,year):
    results=data_of_soil_moisture(id,year)
    return jsonify(results)
    
@app.route('/data-collection/plant-height-<year>/spectrum/<id>')
def plant_height_spectrum(id,year):
    results=data_of_plant_height(id,year)
    return jsonify(results)

@app.route('/data-collection/leaf-area-index-<year>/spectrum/<id>')
def leaf_area_index_spectrum(id,year):
    results=data_of_leaf_area_index(id,year)
    return jsonify(results)

@app.route('/data-collection/root-depth-<year>/spectrum/<id>')
def root_depth_spectrum(id,year):
    results=data_of_root_depth(id,year)
    print(results)
    return jsonify(results)


@app.route('/data-collection/weather/aws4',methods=['POST'])
def weather_aws4():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
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
    return jsonify(results)

@app.route('/data-collection/weather/aws3/wind-rose')
def weather_aws3_wind_rose():
    cur=connection.cursor()
    cur.execute('''
                WITH Speed_Group_Count AS (
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
            WHEN "W_Speed" <= 1 THEN 'Speed_1'
			WHEN "W_Speed" > 1 AND "W_Speed" <= 2 THEN 'Speed_2'
			WHEN "W_Speed" > 2 AND "W_Speed" <= 3 THEN 'Speed_3'
			WHEN "W_Speed" > 3 AND "W_Speed" <= 4 THEN 'Speed_4'
            WHEN "W_Speed" > 4 AND "W_Speed" <= 5 THEN 'Speed_5'
            WHEN "W_Speed" > 5 THEN 'Speed_6'
        END AS Speed_id,
        COUNT(*) AS Count_Per_Group_Speed
    FROM 
        "Weather"."aws3"
    GROUP BY 
        Group_id, Speed_id
),
Overall_Count AS (
    SELECT 
        COUNT(*) AS Total_Count
    FROM 
        "Weather"."aws3"
)

SELECT 
    Group_id,
    Speed_id,
    Count_Per_Group_Speed,
    (Count_Per_Group_Speed * 100.0) / (SELECT Total_Count FROM Overall_Count) AS Percentage
FROM 
    Speed_Group_Count;
                ''')
    rows=cur.fetchall()
    cur.close()
    pairs_dict = {}

    for group in range(1, 13):
        for speed in range(1, 6):
            pairs_dict[("Group_" + str(group)+"Speed_" + str(speed))] = 0

    for row in rows:
        group_id = row[0]
        speed_id = row[1]
        percentage = "%.4f" % row[3]  # Assuming percentage is the fourth column in the query result
        pairs_dict[(group_id+speed_id)] = float(percentage)
    newData = {
        f"set{i}": [] for i in range(1, 7)
    }
    for i in range(1, 7):
        for j in range(1, 13):
            newData[f"set{i}"].append(pairs_dict[f"Group_{j}Speed_{i}"])    
    return jsonify(newData)