from flask import Blueprint
from . import session


bp = Blueprint("main", __name__)


bp.register_blueprint(session.session_bp)
