from flask import Blueprint, request
from app.models import db, SupportedBy, Album
from app.forms import SupportedByForm
from flask_login import login_required, current_user

supportedby_routes = Blueprint("supported_bys", __name__)


# GET ALL supportedbys
@supportedby_routes.route("/all", methods=["GET"])
def all_supportedbys():
    supportedbys = SupportedBy.query.all()
    return [supportedby.to_dict() for supportedby in supportedbys], 200


# GET SupportedBys by Album Id
@supportedby_routes.route("/<int:supportedby_id>", methods=["GET"])
def supported_bys_album_id(supportedby_id):
    supportedby = SupportedBy.query.get(supportedby_id)

    if supportedby is None:
        return {"error": "Supportedby not found"}, 404

    return supportedby.to_dict(), 200


# Edit SupportedBy by supportedby_id
@supportedby_routes.route("/<int:supportedby_id>", methods=["PUT"])
# @login_required
def edit_supported_by(supportedby_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    supported_by = SupportedBy.query.get(supportedby_id)

    form = SupportedByForm()
    form.csrf_token.data = request.cookies.get("csrf_token")

    # Check if supported by exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Check if current user owns this supportedby
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    if form.validate_on_submit():
        # Update
        supported_by.description = form.data["description"]

        db.session.commit()
        return supported_by.to_dict(), 200

    return {"errors": form.errors}, 400


# Delete supportedBy by supportedby supportedby_id
@supportedby_routes.route("/<int:supportedby_id>", methods=["DELETE"])
# @login_required
def delete_supportedBy(supportedby_id):
    supported_by = SupportedBy.query.get(supportedby_id)

    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    # Check if exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Can only delete if it belongs to the user
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    db.session.delete(supported_by)
    db.session.commit()

    return {"message": "SupportedBy deleted successfully"}, 200
