class DbError(Exception):
    pass


class SessionNotFoundError(DbError):
    pass
