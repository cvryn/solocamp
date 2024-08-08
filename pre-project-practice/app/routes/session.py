from flask import Blueprint


session_bp = Blueprint("session", __name__, url_prefix="/session")


@session_bp.route("/", methods=["GET"])
def session():
    pass
