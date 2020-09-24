# Import Dependencies
from flask import Flask, jsonify, render_template
import psycopg2 # for database connection
from config import my_key
from pprint import pprint
import json
# Create app object
app = Flask(__name__)
# Create the route for Flask
@app.route("/")
def index():
    return render_template('index.html')
@app.route('/pitching_graph')
@app.route('/batting_graph')
@app.route('/writeup')
@app.route("/pitching")    
def pitching():
# Create Postgres connection path
    t_host = "localhost"
    t_dbname = "project2-db"
    t_pw = my_key
    db_conn = psycopg2.connect(host=t_host, dbname=t_dbname, user='postgres',password=t_pw)
    cur = db_conn.cursor()
    cur.execute("select * from pitching_averages")
    data = cur.fetchall()
    return jsonify(data)
@app.route('/batting')    
def batting():
# Create Postgres connection path
    t_host = "localhost"
    t_dbname = "project2-db"
    t_pw = my_key
    db_conn = psycopg2.connect(host=t_host, dbname=t_dbname, user='postgres',password=t_pw)
    cur = db_conn.cursor()
    cur.execute("select * from batting_stats")
    data = cur.fetchall()
    return jsonify(data)    
if __name__ == '__main__':
    app.run(debug=False)