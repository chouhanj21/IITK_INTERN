from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from datetime import datetime,time
from db_connection import connection

from methods import custom_data_of_weather_aws3
from methods import custom_data_of_weather_aws4
from methods import daily_data_of_weather_aws3
from methods import daily_data_of_weather_aws4
from methods import weekly_data_of_weather_aws3
from methods import weekly_data_of_weather_aws4
from methods import soil_moisture
from methods import data_of_soil_moisture
from methods import data_of_plant_height_iitk_wheat
from methods import data_of_leaf_area_index_iitk_wheat
from methods import data_of_root_depth_iitk_wheat
from methods import data_of_plant_height_iitk_rice
from methods import data_of_leaf_area_index_iitk_rice
from methods import data_of_root_depth_iitk_rice
from methods import data_of_plant_height_bithoor_wheat
from methods import data_of_leaf_area_index_bithoor_wheat
from methods import data_of_root_depth_bithoor_wheat
from methods import wind_speed_from_weather_aws3
from methods import average_wind_speed_from_weather_aws3
from methods import max_wind_speed_from_weather_aws3
from methods import get_comparison_data_from_aws
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

@app.route('/data-collection/soil-moisture',methods=['POST'])
def soil_moisture_from_spectrum():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    id=data.get('id')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
    results=[]
    results=soil_moisture(start_date,end_date,id)
    return jsonify(results)

@app.route('/data-collection/wheat-crop/iitk',methods=['POST'])
def wheat_crop_from_spectrum():
    data = request.json
    id=data.get('id')
    year=data.get('year')
    plant_height_results=data_of_plant_height_iitk_wheat(id,year)
    leaf_area_index_results=data_of_leaf_area_index_iitk_wheat(id,year)
    root_depth_results=data_of_root_depth_iitk_wheat(id,year)
    results={
        'plant_height':plant_height_results,
        'leaf_area_index':leaf_area_index_results,
        'root_depth':root_depth_results
        }
    return jsonify(results)

@app.route('/data-collection/rice-crop/iitk',methods=['POST'])
def rice_crop_from_spectrum():
    data = request.json
    id=data.get('id')
    year=data.get('year')
    plant_height_results=data_of_plant_height_iitk_rice(id,year)
    leaf_area_index_results=data_of_leaf_area_index_iitk_rice(id,year)
    root_depth_results=data_of_root_depth_iitk_rice(id,year)
    results={
        'plant_height':plant_height_results,
        'leaf_area_index':leaf_area_index_results,
        'root_depth':root_depth_results
        }
    return jsonify(results)

@app.route('/data-collection/wheat-crop/bithoor',methods=['POST'])
def wheat_crop_for_bithoor():
    data = request.json
    year=data.get('year')
    plant_height_results=data_of_plant_height_bithoor_wheat(year)
    leaf_area_index_results=data_of_leaf_area_index_bithoor_wheat(year)
    root_depth_results=data_of_root_depth_bithoor_wheat(year)
    results={
        'plant_height':plant_height_results,
        'leaf_area_index':leaf_area_index_results,
        'root_depth':root_depth_results
        }
    return jsonify(results)

@app.route('/data-collection/weather/aws4',methods=['POST'])
def weather_aws4():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    option=data.get('type')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
    results=[]
    if(option=='custom'):
        results=custom_data_of_weather_aws4(start_date,end_date)
    if(option=='daily'):
        results=daily_data_of_weather_aws4(start_date,end_date)
    if(option=='weekly'):
        results=weekly_data_of_weather_aws4(start_date,end_date)
    return jsonify(results)

@app.route('/data-collection/weather/aws3/wind-rose',methods=['POST'])
def weather_aws3_wind_rose():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
    wind_speed_data= wind_speed_from_weather_aws3(start_date,end_date)
    average_wind_speed_data = average_wind_speed_from_weather_aws3(start_date,end_date)
    max_wind_speed_data=max_wind_speed_from_weather_aws3(start_date,end_date)
    return jsonify({
        'wind_speed_data':wind_speed_data,
        'average_wind_speed_data':average_wind_speed_data,
        'max_wind_speed_data':max_wind_speed_data
        })

@app.route('/data-collection/weather/aws/comparison',methods=['POST'])
def weather_aws_comparison():
    data=request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    variable=data.get('variable')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
    results=[]
    var_dict={
        'Temp1':{
            'aws3_var':'Temp1',
            'aws4_var':'Air_Temp1',
            'fun':'AVG'
        },
        'Temp2':{
            'aws3_var':'Temp2',
            'aws4_var':'Air_Temp2',
            'fun':'AVG'
        },
        'SHF1':{
            'aws3_var':'SHF1',
            'aws4_var':'SHF1',
            'fun':'AVG'
        },
        'SHF2':{
            'aws3_var':'SHF2',
            'aws4_var':'SHF2',
            'fun':'AVG'
        },
        'W_Speed':{
            'aws3_var':'W_Speed',
            'aws4_var':'Wind_Speed',
            'fun':'AVG'
        },
        'Max_W_Speed':{
            'aws3_var':'Max_W_Speed',
            'aws4_var':'Max_Wind_Speed',
            'fun':'AVG'
        },
        'W_Dir':{
            'aws3_var':'W_Dir',
            'aws4_var':'Wind_Direction',
            'fun':'AVG'
        },
        'SolarRadiation':{
            'aws3_var':'SolarRadiation',
            'aws4_var':'Solar_Radiation',
            'fun':'AVG'
        },
        'Rainfall':{
            'aws3_var':'Rain',
            'aws4_var':'Rainfall',
            'fun':'SUM'
        }
    }
    results=get_comparison_data_from_aws(start_date,end_date,var_dict[variable]['aws3_var'],var_dict[variable]['aws4_var'],var_dict[variable]['fun'])
    return jsonify(results)

@app.route('/data-collection/soil-moisture-<year>/spectrum/<id>')
def soil_moisture_spectrum(id,year):
    results=data_of_soil_moisture(id,year)
    return jsonify(results)
    
@app.route('/data-collection/plant-height-<year>/spectrum/<id>')
def plant_height_spectrum(id,year):
    results=data_of_plant_height_iitk_wheat(id,year)
    return jsonify(results)

@app.route('/data-collection/leaf-area-index-<year>/spectrum/<id>')
def leaf_area_index_spectrum(id,year):
    results=data_of_leaf_area_index_iitk_wheat(id,year)
    return jsonify(results)

@app.route('/data-collection/root-depth-<year>/spectrum/<id>')
def root_depth_spectrum(id,year):
    results=data_of_root_depth_iitk_wheat(id,year)
    return jsonify(results)