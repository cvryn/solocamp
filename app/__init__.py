from flask import Flask, jsonify
from .config import Configuration
from flask_migrate import Migrate
from .models import db
from .routes import bp


app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)

# app.register_blueprint(bp)


@app.route("/api")
def main():
    print("IS THIS STILL HITTING?")
    # dog = {"id": 1, "name": "Spot", "age": 5.5}
    return {"message": "hello"}


# @app.route("/")
# def index():
# return "<h1>Welcome Home: Flask SQLAlchemy</h1>"
