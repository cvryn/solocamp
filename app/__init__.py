from flask import Flask
from .config import Configuration
from flask_migrate import Migrate
from .models import db
from .routes import bp


app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)

app.register_blueprint(bp)


@app.route("/api/one")
def main():
    print("IS THIS STILL HITTING?")
    dog = {"id": 1, "name": "Spot", "age": 5.5}
    return dog


@app.route("/api")
@app.route("/api/two")
def main_two():
    cat = {"id": 2, "name": "Kitty", "age": 2.3}
    return cat


@app.route("/home")
@app.route("/")
def index():
    return "<h1>Welcome Home: Flask SQLAlchemy</h1>"
