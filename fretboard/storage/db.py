from api.exceptions import SessionNotFoundError

SessionID = str


class Db:
    _sessions: dict[SessionID, dict] = {}

    def put_session(self, session: SessionID):
        if self.session_exists(session):
            return

        Db._sessions[session] = {}

    def session_exists(self, session: SessionID) -> bool:
        return session in Db._sessions

    def get_session_data(self, session: SessionID) -> dict:
        try:
            return Db._sessions[session]
        except KeyError:
            raise SessionNotFoundError(f"Session '{session}' does not exists")
