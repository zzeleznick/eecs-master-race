#!flask/bin/python
import os

from app import app

# app.config.from_object(os.environ['APP_SETTINGS'])
# print('Runner using', app.config['SQLALCHEMY_DATABASE_URI'], '& DEBUG:', app.config['DEBUG'] )
app.run()
