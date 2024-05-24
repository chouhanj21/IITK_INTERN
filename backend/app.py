from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from datetime import datetime,time
from db_connection import connection
app = Flask(__name__)
# CORS(app, resources={r"/data-collection/weather/aws3": {"origins": "http://localhost:3000"}})
CORS(app)

@app.route('/data-collection/soil-moisture/spectrum/<id>')
def soil_moisture_spectrum(id):
    cur=connection.cursor()
    cur.execute(f'SELECT * FROM "Soil Moisture"."spectrum{id}"')
    rows=cur.fetchall()
    cur.close()
    results = []
    for row in rows:
        result = {}
        for i, column in enumerate(cur.description):
            result[column.name] = str(row[i]) if isinstance(row[i], time) else row[i]
        results.append(result)
    return jsonify(results)

@app.route('/data-collection/weather/aws3',methods=['POST'])
def weather_aws3():
    data = request.json
    start_date_str = data.get('start_date')
    end_date_str = data.get('end_date')
    start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
    end_date = datetime.strptime(end_date_str, '%Y-%m-%d')
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