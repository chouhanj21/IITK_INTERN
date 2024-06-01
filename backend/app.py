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