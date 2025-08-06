CREATE TABLE mentor (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    pronouns pronoun_option,
    location VARCHAR,
    preferred_meeting_frequency meeting_frequency_option,
    mentor_style mentor_style_option,
    skills skill_option[] NOT NULL,
    interests interest_option[] NOT NULL,
    session_structure session_structure_option,
    fields_of_expertise expertise_option[] NOT NULL CHECK (cardinality(fields_of_expertise) <= 2),
    preferred_contact_method contact_method_option,
    role VARCHAR,
    department VARCHAR,
    education VARCHAR,
    current_mentees_count INT DEFAULT 0 CHECK (current_mentees_count >= 0),
    max_mentees_allowed INT DEFAULT 0 CHECK (max_mentees_allowed >= 0),
    work_experience TEXT,
    bio TEXT
);

CREATE TABLE mentee (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    pronouns pronoun_option,
    location VARCHAR,
    preferred_meeting_frequency meeting_frequency_option,
    mentor_style mentor_style_option,
    skills skill_option[] NOT NULL,
    interests interest_option[] NOT NULL,
    session_structure session_structure_option,
    fields_of_expertise expertise_option[] NOT NULL CHECK (cardinality(fields_of_expertise) <= 2),
    preferred_contact_method contact_method_option,
    role VARCHAR,
    department VARCHAR,
    education VARCHAR,
    work_experience TEXT,
    bio TEXT
);

CREATE TABLE mentor_mentee_map (
    mentor_id UUID REFERENCES mentor(id) ON DELETE CASCADE,
    mentee_id UUID REFERENCES mentee(id) ON DELETE CASCADE,
    PRIMARY KEY (mentor_id, mentee_id)
);

CREATE TABLE mentor_mentee_map (
    mentor_id UUID REFERENCES mentor(id) ON DELETE CASCADE,
    mentee_id UUID REFERENCES mentee(id) ON DELETE CASCADE,
    PRIMARY KEY (mentor_id, mentee_id)
);