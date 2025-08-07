from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy import create_engine, Column, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import Enum, Integer, CheckConstraint
import bcrypt
from pydantic import BaseModel, EmailStr
from sqlalchemy.dialects.postgresql import UUID
import uuid
import os
from dotenv import load_dotenv
from enum import Enum as PyEnum
from typing import List
from sqlalchemy.dialects.postgresql import ARRAY

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not set in the .env file")

# --- Database Setup ---
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# --- FastAPI App ---
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Alexandria API"}

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

pronoun_options = ('She/Her/Hers', 'He/Him/His', 'They/Them')
meeting_frequency_options = ('Monthly', 'Flexible')
mentor_style_options = ('Goal-Oriented', 'Casual', 'Fun', 'Career-Focused', 'Hands-On')
skills_options = ('Go-To-Market Strategy', 'Figma', 'Research', 'Design Principles', 'Communication', 'Machine Learning', 'Deep Learning', 'Software Engineering')
interests_options = ('Hiking', 'Reading', 'Scrapbooking', 'Music', 'Volunteering', 'Knitting', 'Gaming', 'Running', 'Cycling', 'Language Acquisition')
session_structure_options = ('Structured', 'Scheduled')
expertise_options = ('Product Marketing', 'Product Design', 'DevOps', 'Cloud Computing', 'Backend Development', 'Data Science', 'Fullstack Development', 'Blockchain Development')
contact_method_options = ('Microsoft Teams', 'Email')


# --- SQLAlchemy Models ---
class Mentor(Base):
    __tablename__ = "mentor"
    id = Column(UUID(as_uuid=True), primary_key=True, server_default="uuid_generate_v4()")
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    pronouns = Column(Enum(*pronoun_options, name="pronoun_option"), nullable=False)
    location = Column(String, nullable=True)
    preferred_meeting_frequency = Column(Enum(*meeting_frequency_options, name="meeting_frequency_option"), nullable=False)
    mentor_style = Column(Enum(*mentor_style_options, name="mentor_style_option"), nullable=False)
    skills = Column(ARRAY(Enum(*skills_options, name="skill_option")), nullable=False)
    interests = Column(ARRAY(Enum(*interests_options, name="interest_option")), nullable=False)
    session_structure = Column(Enum(*session_structure_options, name="session_structure_option"), nullable=False)
    fields_of_expertise = Column(ARRAY(Enum(*expertise_options, name="expertise_option")), nullable=False)
    preferred_contact_method = Column(Enum(*contact_method_options, name="contact_method_option"), nullable=False)
    role = Column(String, nullable=True)  
    department = Column(String, nullable=True)
    education = Column(String, nullable=True)
    current_mentees_count = Column(Integer, default=0, nullable=False) 
    max_mentees_allowed = Column(Integer, default=5, nullable=False)
    work_experience = Column(Text)
    bio = Column(Text)

class Mentee(Base):
    __tablename__ = "mentee"
    id = Column(UUID(as_uuid=True), primary_key=True, server_default="uuid_generate_v4()")
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    pronouns = Column(Enum(*pronoun_options, name="pronoun_option"), nullable=False)
    location = Column(String, nullable=True)
    preferred_meeting_frequency = Column(Enum(*meeting_frequency_options, name="meeting_frequency_option"), nullable=False)
    mentor_style = Column(Enum(*mentor_style_options, name="mentor_style_option"), nullable=False)
    skills = Column(ARRAY(Enum(*skills_options, name="skill_option")), nullable=False)
    interests = Column(ARRAY(Enum(*interests_options, name="interest_option")), nullable=False)
    session_structure = Column(Enum(*session_structure_options, name="session_structure_option"), nullable=False)
    fields_of_expertise = Column(ARRAY(Enum(*expertise_options, name="expertise_option")), nullable=False)
    preferred_contact_method = Column(Enum(*contact_method_options, name="contact_method_option"), nullable=False)  # <-- Add this
    role = Column(String, nullable=True)  
    department = Column(String, nullable=True)
    education = Column(String, nullable=True) 
    work_experience = Column(Text)
    bio = Column(Text)
    __table_args__ = (
        CheckConstraint('cardinality(fields_of_expertise) <= 2', name='max_two_expertise'),
    )

Base.metadata.create_all(bind=engine)

# --- Pydantic Schemas ---
class PronounOption(str, PyEnum):
    she_her = "She/Her/Hers"
    he_him = "He/Him/His"
    they_them = "They/Them"

class MeetingFrequencyOption(str, PyEnum):
    monthly = "Monthly"
    flexible = "Flexible"

class MentorStyleOption(str, PyEnum):
    goal_oriented = "Goal-Oriented"
    casual = "Casual"
    fun = "Fun"
    career_focused = "Career-Focused"
    hands_on = "Hands-On"    

class SkillsOption(str, PyEnum):
    go_to_market_strategy = "Go-To-Market Strategy"
    figma = "Figma"
    research = "Research"
    design_principles = "Design Principles"
    communication = "Communication"
    machine_learning = "Machine Learning"
    deep_learning = "Deep Learning"
    software_engineering = "Software Engineering"

class InterestsOption(str, PyEnum):
    hiking = "Hiking"
    reading = "Reading"
    scrapbooking = "Scrapbooking"
    music = "Music"
    volunteering = "Volunteering"
    knitting = "Knitting"
    gaming = "Gaming"
    running = "Running"
    cycling = "Cycling"
    language_acquisition = "Language Acquisition"

class SessionStructureOption(str, PyEnum):
    structured = "Structured"
    scheduled = "Scheduled"

class ExpertiseOption(str, PyEnum):
    product_marketing = "Product Marketing"
    product_design = "Product Design"
    devops = "DevOps"
    cloud_computing = "Cloud Computing"
    backend_development = "Backend Development"
    data_science = "Data Science"
    fullstack_development = "Fullstack Development"
    blockchain_development = "Blockchain Development"

class ContactMethodOption(str, PyEnum):
    microsoft_teams = "Microsoft Teams"
    email = "Email"        

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str
    pronouns: PronounOption
    meeting_frequency: MeetingFrequencyOption
    mentor_style: MentorStyleOption
    skills: List[SkillsOption]
    interests: List[InterestsOption]
    session_structure: SessionStructureOption
    expertise: List[ExpertiseOption]
    contact_method: ContactMethodOption
    bio: str | None = None
    location: str | None = None
    role: str | None = None
    department: str | None = None
    education: str | None = None
    work_experience: str | None = None

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

# --- Mentor Routes ---
@app.post("/register/mentor")
def register_mentor(mentor: UserCreate, db: Session = Depends(get_db)):
    if db.query(Mentor).filter_by(email=mentor.email).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    hashed_password = bcrypt.hashpw(mentor.password.encode(), bcrypt.gensalt()).decode()
    db_mentor = Mentor(
        email=mentor.email,
        password_hash=hashed_password,
        name=mentor.name,
        pronouns=mentor.pronouns,
        preferred_meeting_frequency=mentor.meeting_frequency,
        mentor_style=mentor.mentor_style,
        skills=mentor.skills,
        interests=mentor.interests,
        session_structure=mentor.session_structure,
        fields_of_expertise=mentor.expertise,
        preferred_contact_method=mentor.contact_method,
        bio=mentor.bio,
        location=mentor.location,
        role=mentor.role,
        department=mentor.department,
        education=mentor.education,
        work_experience=mentor.work_experience
    )
    db.add(db_mentor)
    db.commit()
    db.refresh(db_mentor)
    return {"id": db_mentor.id, "email": db_mentor.email}

class MentorResponse(BaseModel):
    id: uuid.UUID
    email: EmailStr
    name: str
    pronouns: PronounOption
    location: str | None = None
    preferred_meeting_frequency: MeetingFrequencyOption
    mentor_style: MentorStyleOption
    skills: List[SkillsOption]
    interests: List[InterestsOption]
    session_structure: SessionStructureOption
    fields_of_expertise: List[ExpertiseOption]
    preferred_contact_method: ContactMethodOption
    role: str | None = None
    department: str | None = None
    education: str | None = None
    work_experience: str | None = None
    bio: str | None = None

    class Config:
        orm_mode = True

@app.get("/mentors", response_model=List[MentorResponse])
def get_all_mentors(db: Session = Depends(get_db)):
    return db.query(Mentor).all()

# --- Mentee Routes ---
@app.post("/register/mentee")
def register_mentee(mentee: UserCreate, db: Session = Depends(get_db)):
    if db.query(Mentee).filter_by(email=mentee.email).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    hashed_password = bcrypt.hashpw(mentee.password.encode(), bcrypt.gensalt()).decode()
    db_mentee = Mentee(
        email=mentee.email,
        password_hash=hashed_password,
        name=mentee.name,
        pronouns=mentee.pronouns,
        location=mentee.location,
        preferred_meeting_frequency=mentee.meeting_frequency,
        mentor_style=mentee.mentor_style,
        skills=mentee.skills,
        interests=mentee.interests,
        session_structure=mentee.session_structure,
        fields_of_expertise=mentee.expertise,
        preferred_contact_method=mentee.contact_method,
        role=mentee.role,
        department=mentee.department,
        education=mentee.education,
        work_experience=mentee.work_experience,
        bio=mentee.bio
    )
    db.add(db_mentee)
    db.commit()
    db.refresh(db_mentee)
    return {"id": db_mentee.id, "email": db_mentee.email}

class MenteeResponse(BaseModel):
    id: uuid.UUID
    email: EmailStr
    name: str
    pronouns: PronounOption
    location: str | None = None
    preferred_meeting_frequency: MeetingFrequencyOption
    mentor_style: MentorStyleOption
    skills: List[SkillsOption]
    interests: List[InterestsOption]
    session_structure: SessionStructureOption
    fields_of_expertise: List[ExpertiseOption]
    preferred_contact_method: ContactMethodOption
    role: str | None = None
    department: str | None = None
    education: str | None = None
    work_experience: str | None = None
    bio: str | None = None

    class Config:
        orm_mode = True

@app.get("/mentees", response_model=List[MenteeResponse])
def get_all_mentees(db: Session = Depends(get_db)):
    return db.query(Mentee).all()

# --- Shared Login ---
@app.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(Mentor).filter_by(email=data.email).first()
    role = "mentor"
    if not user:
        user = db.query(Mentee).filter_by(email=data.email).first()
        role = "mentee"
    if not user or not bcrypt.checkpw(data.password.encode(), user.password_hash.encode()):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    return {"id": user.id, "email": user.email, "role": role}