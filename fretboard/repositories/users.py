import copy
from datetime import datetime, timedelta
from typing import Optional

from fretboard.entities.user import LearningScaleData, ScaleLearningSession, User
from fretboard.music_theory import Scale


class UserRepository:
    _users: dict[str, User] = {}
    _user_ttl: timedelta = timedelta(minutes=30)

    def __init__(self):
        self.flush()

    def get(self, user_id: str) -> Optional[User]:
        user = UserRepository._users.get(user_id)
        if user:
            user.last_activity = datetime.utcnow()
        return user

    def get_or_create(self, user_id: str):
        user = self.get(user_id)
        if not user:
            user = self.create(user_id)
        return user

    def create(self, user_id: Optional[str] = None) -> User:
        user = User()
        if user_id:
            user.id = user_id
        UserRepository._users[user.id] = user
        return user

    def expired(self, user: User) -> bool:
        if not user:
            return True

        return (datetime.utcnow() - user.last_activity) > UserRepository._user_ttl

    def flush(self):
        expired_user_ids: list[str] = []

        for user_id, user in UserRepository._users.items():
            if self.expired(user):
                expired_user_ids.append(user_id)

        for user_id in expired_user_ids:
            UserRepository._users.pop(user_id)

    def get_next_learning_scale(self, user: User, session_id: str) -> Optional[Scale]:
        if not user.scale_learning_session:
            return None

        if user.scale_learning_session.id != session_id:
            return None

        next_scale = user.scale_learning_session.learning_scales.next_scale()

        self.save(user)

        return next_scale

    def set_learning_scales(self, user: User, session_id: str, scales: list[Scale]):
        user.scale_learning_session = ScaleLearningSession(
            id=session_id,
            learning_scales=LearningScaleData(
                scales=[(s.root_note, s.key) for s in scales]
            ),
        )

        self.save(user)

    def save(self, user: User):
        user.last_activity = datetime.utcnow()
        UserRepository._users[user.id] = user

    @staticmethod
    def clear():
        UserRepository._users = {}

    @staticmethod
    def all() -> dict[str, User]:
        return copy.deepcopy(UserRepository._users)
