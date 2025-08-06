-- UUID Support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Core Enums
CREATE TYPE pronoun_option AS ENUM ('She/Her/Hers', 'He/Him/His', 'They/Them');

CREATE TYPE meeting_frequency_option AS ENUM ('Monthly', 'Flexible');

CREATE TYPE mentor_style_option AS ENUM ('Goal-Oriented', 'Casual', 'Fun', 'Career-Focused', 'Hands-On');

CREATE TYPE skill_option AS ENUM ('Go-To-Market Strategy', 'Figma', 'Research', 'Design Principles', 'Communication', 'Machine Learning', 'Deep Learning', 'Software Engineering');

CREATE TYPE interest_option AS ENUM ('Hiking', 'Reading', 'Scrapbooking', 'Music', 'Volunteering', 'Knitting', 'Gaming', 'Running', 'Cycling', 'Language Acquisition');

CREATE TYPE session_structure_option AS ENUM ('Structured', 'Scheduled');

CREATE TYPE expertise_option AS ENUM ('Product Marketing', 'Product Design', 'DevOps', 'Cloud Computing', 'Backend Development', 'Data Science', 'Fullstack Development', 'Blockchain Development');

CREATE TYPE contact_method_option AS ENUM ('Microsoft Teams', 'Email');