from typing import Optional

from fastapi import Header, Request

from fretboard.entities.user import User
from fretboard.repositories.users import UserRepository


async def verify_user(
    request: Request, x_user_id: Optional[str] = Header(None)
) -> Optional[User]:
    users_db = UserRepository()
    if x_user_id:
        return users_db.get_or_create(x_user_id)

    client_host = request.client.host
    if client_host:
        return users_db.get_or_create(client_host)

    return None
