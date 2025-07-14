# SQL alchemy is not a database, it is a ORM (Object Relational Mapping) tool that sits between python code and an actual DB
from sqlalchemy import Column, Integer, String, DateTime, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

engine = create_engine('sqlite:///database.db', echo=True)

# When class inherits from this, it transforms it to a 'Database Aware ORM Model'
# You are declaring database schemas inside classes
Base = declarative_base()


class Challenge(Base):
    __tablename__ = "challenges"
    id = Column(Integer, primary_key=True)
    difficulty = Column(String, nullable=False)  # can't be null
    date_created = Column(DateTime, default=datetime.now)
    created_by = Column(String, nullable=False)
    title = Column(String, nullable=False)
    options = Column(String, nullable=False)
    correct_answer_id = Column(Integer, nullable=False)
    explanation = Column(String, nullable=False)


class ChallengeQuota(Base):
    __tablename__ = "challenge_quotas"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, unique=True)
    quota_remaining = Column(
        Integer, nullable=False, default=50
    )  # starting value for quota
    last_reset_date = Column(DateTime, default=datetime.now)


# Will create the defined tables in sql
Base.metadata.create_all(engine)

# Blueprint for creating database connections
# autocommit = transactions won't commit unless we specify commit()
# autoflush = prevents automating syncing of pending changes to the db
# bind = connects session to the sqlite db engine
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Creates DB, pauses on yield, when you are done it closes the db
def get_db():
    db = SessionLocal()
    try:
        yield db # Gives DB and waits until you are done
    finally:
        db.close()
