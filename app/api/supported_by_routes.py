from flask import Blueprint, request
from app.models import db, SupportedBy
from app.forms import SupportedByForm
from flask_login import login_required, current_user

supported_by_routes = Blueprint("supported_bys", __name__)


# GET ALL supported_bys
@supported_by_routes.route("/all", methods=["GET"])
def all_supported_bys():
    supported_bys = SupportedBy.query.all()
    return [supported_by.to_dict() for supported_by in supported_bys], 200


# GET Supported_Bys by Album Id
@supported_by_routes.route("/<int:supported_by_id>", methods=["GET"])
def supported_bys_album_id(supported_by_id):
    supported_by = SupportedBy.query.get(supported_by_id)

    if supported_by is None:
        return {"error": "Supported_by not found"}, 404

    return supported_by.to_dict(), 200


# Edit Supported_By by supported_by_id
@supported_by_routes.route("/<int:supported_by_id>", methods=["PUT"])
# @login_required
def edit_supported_by(supported_by_id):
    if not current_user.is_authenticated:
        return {"error": "User not authenticated"}, 401

    supported_by = SupportedBy.query.get(supported_by_id)

    form = SupportedByForm()
    form.csrf_token.data = request.cookies.get("csrf_token")

    # Check if supported by exists
    if supported_by is None:
        return {"error": "Supported by not found"}, 404

    # Check if current user owns this supported_by
    if supported_by.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    if form.validate_on_submit():
        # Update
        supported_by.description = form.data["description"]

        db.session.commit()
        return supported_by.to_dict(), 200

    return {"errors": form.errors}, 400


# Delete supported_By by supported_by supported_by_id
@supported_by_routes.route("/<int:supported_by_id>", methods=["DELETE"])
# @login_required
def delete_supported_By(supported_by_id):
    supported_by = SupportedBy.query.get(supported_by_id)

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

    return {"message": "Supported By deleted successfully"}, 200
