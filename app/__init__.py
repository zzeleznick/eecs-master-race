import time
import os

# flask
from flask import Flask, render_template, jsonify
from .utils import *

from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config.from_object(os.environ['APP_SETTINGS'])
# print('Init running', app.config['SQLALCHEMY_DATABASE_URI'], '& DEBUG:', app.config['DEBUG'] )
# db = SQLAlchemy(app)


@app.route('/')
def hello():
    offset = 28800
    date = time.strftime("%a, %b %d, %Y", time.gmtime(time.time() - offset))
    return render_template('index.html', date = date)

@app.route('/data/<name>')
def hello_name(name):
    return "Hi %s" % name