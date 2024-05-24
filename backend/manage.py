from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/Database-Collection'
db=SQLAlchemy(app)

class Student(db.Model):
    __tablename__='students'
    id=db.Column(db.integer,primary_key=True)
    fname=db.Column(db.String(40))
    lname=db.Column(db.String(40))

    def __init__(self,fname,lname):
        self.fname=fname
        self.lname=lname

@app.route("/")
def hello_world():
    return "<p>Used For Manage Database!!!</p>"