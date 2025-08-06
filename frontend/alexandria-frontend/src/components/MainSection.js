import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MEETING_FREQUENCY_OPTIONS = [
  'Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Flexible', 'On Demand', 'Every Other Month', 'Annually', 'As Needed', 'No Preference'
];
const SESSION_STRUCTURE_OPTIONS = [
  'Structured', 'Unstructured', 'Scheduled', 'Ad Hoc', 'Agenda-Based', 'Casual', 'Mentor-Led', 'Mentee-Led', 'Hybrid', 'No Preference'
];
const CONTACT_METHOD_OPTIONS = [
  'Microsoft Teams', 'Zoom', 'Google Meet', 'Slack', 'Email', 'Phone', 'In Person', 'Webex', 'Discord', 'Other'
];
const MENTOR_STYLE_OPTIONS = [
  'Goal-Oriented', 'Casual', 'Fun', 'Supportive', 'Direct', 'Analytical', 'Empathetic', 'Challenging', 'Collaborative', 'Flexible', 'Inspirational', 'Practical', 'Visionary', 'Listener', 'Motivational'
];
const FIELDS_OF_EXPERTISE_OPTIONS = [
  'Product Marketing', 'Product Design', 'Data Analysis', 'Go-To-Market Strategy', 'Research', 'Brand Management', 'UX/UI', 'Sales Enablement', 'Digital Marketing', 'Content Strategy', 'Customer Success', 'Market Research', 'Growth Hacking', 'Business Development', 'Project Management'
];
const SKILLS_OPTIONS = [
  'Go-To-Market Strategy', 'Figma', 'Research', 'Data Analysis', 'Brand Management', 'UX/UI', 'Sales Enablement', 'Digital Marketing', 'Content Strategy', 'Customer Success', 'Market Research', 'Growth Hacking', 'Business Development', 'Project Management', 'Copywriting'
];
const INTERESTS_OPTIONS = [
  'Hiking', 'Reading', 'Scrapbooking', 'Music', 'Travel', 'Cooking', 'Photography', 'Fitness', 'Gaming', 'Art', 'Technology', 'Volunteering', 'Movies', 'Sports', 'Fashion'
];

const editBtnStyle = {
  cursor: 'pointer',
  background: 'linear-gradient(90deg, #4a90e2 60%, #6cb6f7 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  padding: '4px 18px',
  fontWeight: 500,
  fontSize: 15,
  boxShadow: '0 1px 4px rgba(74,144,226,0.08)',
  marginLeft: 8,
  letterSpacing: 0.5,
  textTransform: 'none',
  transition: 'background 0.2s',
};

function MainSection() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Optional: Clear any user state, localStorage, etc.
    navigate('/');
  };
  // About section state
  const [aboutEditing, setAboutEditing] = useState(false);
  const [about, setAbout] = useState(
    "Abel Tesfaye, known to the world as The Weeknd, rose to international fame as a groundbreaking singer and performer. After years of topping charts and selling out arenas, he has now transitioned into a new chapter as a Product Marketing Manager, bringing his creativity, vision, and passion for connecting with audiences into the world of business."
  );
  const [aboutDraft, setAboutDraft] = useState(about);

  // Preferences section state
  const [prefsEditing, setPrefsEditing] = useState(false);
  const [meetingFrequency, setMeetingFrequency] = useState('Monthly, Flexible');
  const [sessionStructure, setSessionStructure] = useState('Structured, Scheduled');
  const [contactMethod, setContactMethod] = useState('Microsoft Teams');
  const [mentorStyle, setMentorStyle] = useState(['Goal-Oriented', 'Casual', 'Fun']);
  const [fieldsOfExpertise, setFieldsOfExpertise] = useState(['Product Marketing', 'Product Design']);
  const [meetingFrequencyDraft, setMeetingFrequencyDraft] = useState(meetingFrequency);
  const [sessionStructureDraft, setSessionStructureDraft] = useState(sessionStructure);
  const [contactMethodDraft, setContactMethodDraft] = useState(contactMethod);
  const [mentorStyleDraft, setMentorStyleDraft] = useState(mentorStyle);
  const [fieldsOfExpertiseDraft, setFieldsOfExpertiseDraft] = useState(fieldsOfExpertise);

  // Skills section state
  const [skillsEditing, setSkillsEditing] = useState(false);
  const [skills, setSkills] = useState(['Go-To-Market Strategy', 'Figma', 'Research', 'Data Analysis']);
  const [skillsDraft, setSkillsDraft] = useState(skills);

  // Interests section state
  const [interestsEditing, setInterestsEditing] = useState(false);
  const [interests, setInterests] = useState(['Hiking', 'Reading', 'Scrapbooking', 'Music']);
  const [interestsDraft, setInterestsDraft] = useState(interests);

  // Work Experience section state
  const [workEditing, setWorkEditing] = useState(false);
  const [work, setWork] = useState([
    {
      title: 'Product Marketing Manager',
      company: 'FICO',
      duration: '2018 - Present',
      bullets: [
        'Lead go-to-market strategies for B2B analytics solutions serving financial services clients',
        'Drive product positioning and messaging for credit risk management platforms',
        'Collaborate with sales teams to develop competitive battle cards and customer success stories',
      ],
    },
    {
      title: 'Senior Product Designer',
      company: 'TechFlow Solutions',
      duration: '2016 - 2018',
      bullets: [
        'Designed user experiences for B2B SaaS platforms serving enterprise clients',
        'Conducted user research and usability testing to inform product development decisions',
        'Partnered with product management to translate business requirements into intuitive designs',
      ],
    },
    {
      title: 'Product Designer',
      company: 'DataVision Inc.',
      duration: '2015 - 2016',
      bullets: [
        'Created wireframes, prototypes, and design systems for business intelligence tools',
        'Collaborated with engineering teams to implement design solutions for B2B dashboards',
        'Supported customer onboarding through user-centered design improvements',
      ],
    },
    {
      title: 'Associate Product Marketing Specialist',
      company: 'CloudTech Systems',
      duration: '2013 - 2015',
      bullets: [
        'Assisted in developing marketing collateral for B2B cloud infrastructure services',
        'Analyzed competitive landscape and customer feedback to inform product roadmap',
        'Supported trade show presence and lead generation campaigns',
      ],
    },
  ]);
  const [workDraft, setWorkDraft] = useState(JSON.parse(JSON.stringify(work)));

  // About
  const handleAboutEdit = () => {
    setAboutDraft(about);
    setAboutEditing(true);
  };
  const handleAboutSave = () => {
    setAbout(aboutDraft);
    setAboutEditing(false);
  };
  const handleAboutCancel = () => {
    setAboutEditing(false);
  };

  // Preferences
  const handlePrefsEdit = () => {
    setMeetingFrequencyDraft(meetingFrequency);
    setSessionStructureDraft(sessionStructure);
    setContactMethodDraft(contactMethod);
    setMentorStyleDraft(mentorStyle);
    setFieldsOfExpertiseDraft(fieldsOfExpertise);
    setPrefsEditing(true);
  };
  const handlePrefsSave = () => {
    setMeetingFrequency(meetingFrequencyDraft);
    setSessionStructure(sessionStructureDraft);
    setContactMethod(contactMethodDraft);
    setMentorStyle(mentorStyleDraft);
    setFieldsOfExpertise(fieldsOfExpertiseDraft);
    setPrefsEditing(false);
  };
  const handlePrefsCancel = () => {
    setPrefsEditing(false);
  };
  const handleMentorStyleChange = (option) => {
    setMentorStyleDraft((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : prev.length < 3
        ? [...prev, option]
        : prev
    );
  };
  const handleFieldsOfExpertiseChange = (option) => {
    setFieldsOfExpertiseDraft((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : prev.length < 2
        ? [...prev, option]
        : prev
    );
  };

  // Skills
  const handleSkillsEdit = () => {
    setSkillsDraft(skills);
    setSkillsEditing(true);
  };
  const handleSkillsSave = () => {
    setSkills(skillsDraft);
    setSkillsEditing(false);
  };
  const handleSkillsCancel = () => {
    setSkillsEditing(false);
  };
  const handleSkillsChange = (option) => {
    setSkillsDraft((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Interests
  const handleInterestsEdit = () => {
    setInterestsDraft(interests);
    setInterestsEditing(true);
  };
  const handleInterestsSave = () => {
    setInterests(interestsDraft);
    setInterestsEditing(false);
  };
  const handleInterestsCancel = () => {
    setInterestsEditing(false);
  };
  const handleInterestsChange = (option) => {
    setInterestsDraft((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Work Experience
  const handleWorkEdit = () => {
    setWorkDraft(JSON.parse(JSON.stringify(work)));
    setWorkEditing(true);
  };
  const handleWorkSave = () => {
    setWork(workDraft);
    setWorkEditing(false);
  };
  const handleWorkCancel = () => {
    setWorkEditing(false);
  };
  const handleWorkChange = (idx, field, value) => {
    setWorkDraft((prev) => {
      const updated = [...prev];
      if (field === 'bullets') {
        updated[idx][field] = value.split('\n');
      } else {
        updated[idx][field] = value;
      }
      return updated;
    });
  };

  return (
    <div className="main-section">
      {/* About Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">About</h3>
          <button
            className="edit-btn"
            style={aboutEditing ? { ...editBtnStyle, visibility: 'hidden' } : editBtnStyle}
            onClick={aboutEditing ? undefined : handleAboutEdit}
            title="Edit about section"
          >
            Edit
          </button>
        </div>
        <div className="about-section">
          {aboutEditing ? (
            <>
              <textarea
                value={aboutDraft}
                onChange={e => setAboutDraft(e.target.value)}
                rows={4}
                style={{ width: '100%', marginBottom: 10, fontSize: 16 }}
              />
              <button
                onClick={handleAboutSave}
                style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer', marginRight: 8 }}
              >
                Save
              </button>
              <button
                onClick={handleAboutCancel}
                style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #aaa', background: '#fff', color: '#333', fontWeight: 500, cursor: 'pointer' }}
              >
                Cancel
              </button>
            </>
          ) : (
            <p className="about-text">{about}</p>
          )}
        </div>
      </div>

      {/* Preferences Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Preferences</h3>
          <button
            className="edit-btn"
            style={prefsEditing ? { ...editBtnStyle, visibility: 'hidden' } : editBtnStyle}
            onClick={prefsEditing ? undefined : handlePrefsEdit}
            title="Edit preferences section"
          >
            Edit
          </button>
        </div>
        <div className="preferences-grid">
          <div className="pref-item">
            <h5>Preferred Meeting Frequency:</h5>
            {prefsEditing ? (
              <select
                value={meetingFrequencyDraft}
                onChange={e => setMeetingFrequencyDraft(e.target.value)}
                style={{ width: '100%' }}
              >
                {MEETING_FREQUENCY_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <p>{meetingFrequency}</p>
            )}
          </div>
          <div className="pref-item">
            <h5>Session Structured:</h5>
            {prefsEditing ? (
              <select
                value={sessionStructureDraft}
                onChange={e => setSessionStructureDraft(e.target.value)}
                style={{ width: '100%' }}
              >
                {SESSION_STRUCTURE_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <p>{sessionStructure}</p>
            )}
          </div>
          <div className="pref-item">
            <h5>Preferred Contact Method:</h5>
            {prefsEditing ? (
              <select
                value={contactMethodDraft}
                onChange={e => setContactMethodDraft(e.target.value)}
                style={{ width: '100%' }}
              >
                {CONTACT_METHOD_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <p>{contactMethod}</p>
            )}
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div className="pref-item">
            <h5>3 Words to Describe Your Mentor Style:</h5>
            {prefsEditing ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {MENTOR_STYLE_OPTIONS.map(option => (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <input
                      type="checkbox"
                      checked={mentorStyleDraft.includes(option)}
                      onChange={() => handleMentorStyleChange(option)}
                      disabled={
                        !mentorStyleDraft.includes(option) && mentorStyleDraft.length >= 3
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <p>{mentorStyle.join(', ')}</p>
            )}
          </div>
          <div className="pref-item" style={{ marginTop: '15px' }}>
            <h5>Fields of Expertise (Max. 2):</h5>
            {prefsEditing ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {FIELDS_OF_EXPERTISE_OPTIONS.map(option => (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <input
                      type="checkbox"
                      checked={fieldsOfExpertiseDraft.includes(option)}
                      onChange={() => handleFieldsOfExpertiseChange(option)}
                      disabled={
                        !fieldsOfExpertiseDraft.includes(option) && fieldsOfExpertiseDraft.length >= 2
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <p>{fieldsOfExpertise.join(', ')}</p>
            )}
          </div>
        </div>
        {prefsEditing && (
          <div style={{ marginTop: 16 }}>
            <button
              onClick={handlePrefsSave}
              style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer', marginRight: 8 }}
            >
              Save
            </button>
            <button
              onClick={handlePrefsCancel}
              style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #aaa', background: '#fff', color: '#333', fontWeight: 500, cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Skills</h3>
          <button
            className="edit-btn"
            style={skillsEditing ? { ...editBtnStyle, visibility: 'hidden' } : editBtnStyle}
            onClick={skillsEditing ? undefined : handleSkillsEdit}
            title="Edit skills section"
          >
            Edit
          </button>
        </div>
        <div className="tags-container">
          {skillsEditing ? (
            <>
              {SKILLS_OPTIONS.map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 4, marginRight: 8 }}>
                  <input
                    type="checkbox"
                    checked={skillsDraft.includes(option)}
                    onChange={() => handleSkillsChange(option)}
                  />
                  {option}
                </label>
              ))}
              <div style={{ marginTop: 16 }}>
                <button
                  onClick={handleSkillsSave}
                  style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer', marginRight: 8 }}
                >
                  Save
                </button>
                <button
                  onClick={handleSkillsCancel}
                  style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #aaa', background: '#fff', color: '#333', fontWeight: 500, cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            skills.map(skill => <span key={skill} className="tag">{skill}</span>)
          )}
        </div>
      </div>

      {/* Interests Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Interests</h3>
          <button
            className="edit-btn"
            style={interestsEditing ? { ...editBtnStyle, visibility: 'hidden' } : editBtnStyle}
            onClick={interestsEditing ? undefined : handleInterestsEdit}
            title="Edit interests section"
          >
            Edit
          </button>
        </div>
        <div className="tags-container">
          {interestsEditing ? (
            <>
              {INTERESTS_OPTIONS.map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 4, marginRight: 8 }}>
                  <input
                    type="checkbox"
                    checked={interestsDraft.includes(option)}
                    onChange={() => handleInterestsChange(option)}
                  />
                  {option}
                </label>
              ))}
              <div style={{ marginTop: 16 }}>
                <button
                  onClick={handleInterestsSave}
                  style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer', marginRight: 8 }}
                >
                  Save
                </button>
                <button
                  onClick={handleInterestsCancel}
                  style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #aaa', background: '#fff', color: '#333', fontWeight: 500, cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            interests.map(interest => <span key={interest} className="tag">{interest}</span>)
          )}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Work Experience</h3>
          <button
            className="edit-btn"
            style={workEditing ? { ...editBtnStyle, visibility: 'hidden' } : editBtnStyle}
            onClick={workEditing ? undefined : handleWorkEdit}
            title="Edit work experience section"
          >
            Edit
          </button>
        </div>
        {workEditing ? (
          workDraft.map((item, idx) => (
            <div className="work-item" key={idx}>
              <div className="work-header">
                <div>
                  <input
                    type="text"
                    value={item.title}
                    onChange={e => handleWorkChange(idx, 'title', e.target.value)}
                    style={{ fontWeight: 600, fontSize: 16, color: '#2c3e50', marginBottom: 4, width: '100%' }}
                  />
                  <span className="work-company">
                    <input
                      type="text"
                      value={item.company}
                      onChange={e => handleWorkChange(idx, 'company', e.target.value)}
                      style={{ color: '#4a90e2', fontWeight: 400, width: 180, marginLeft: 8 }}
                    />
                  </span>
                </div>
                <input
                  type="text"
                  value={item.duration}
                  onChange={e => handleWorkChange(idx, 'duration', e.target.value)}
                  style={{ fontSize: 14, color: '#7f8c8d', fontStyle: 'italic', width: 120 }}
                />
              </div>
              <div className="work-description">
                <textarea
                  value={item.bullets.join('\n')}
                  onChange={e => handleWorkChange(idx, 'bullets', e.target.value)}
                  rows={item.bullets.length + 1}
                  style={{ width: '100%', fontSize: 14, marginTop: 8 }}
                />
              </div>
            </div>
          ))
        ) : (
          work.map((item, idx) => (
            <div className="work-item" key={idx}>
              <div className="work-header">
                <div>
                  <div className="work-title">{item.title} | <span className="work-company">{item.company}</span></div>
                </div>
                <div className="work-duration">{item.duration}</div>
              </div>
              <div className="work-description">
                <ul>
                  {item.bullets.map((bullet, bidx) => (
                    <li key={bidx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
        {workEditing && (
          <div style={{ marginTop: 16 }}>
            <button
              onClick={handleWorkSave}
              style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer', marginRight: 8 }}
            >
              Save
            </button>
            <button
              onClick={handleWorkCancel}
              style={{ padding: '6px 16px', borderRadius: 4, border: '1px solid #aaa', background: '#fff', color: '#333', fontWeight: 500, cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 24px',
          backgroundColor: '#e74c3c',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#c0392b')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#e74c3c')}
      >
        Log Out
      </button>
    </div>
    </div>
  );
}

export default MainSection; 