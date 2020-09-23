import psycopg2
import sys
from  flask import Flask,render_template
from flask import jsonify
import config
from config import my_key
app=Flask(__name__)
@app.route('/data')
def get_data():
    con = psycopg2.connect("host='localhost' dbname='project2-db' user='postgres' password='")  
    cur = con.cursor()
    cur.execute("select * from pitching_averages")
    data = [col for col in cur]
    cur.close()
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=False)
