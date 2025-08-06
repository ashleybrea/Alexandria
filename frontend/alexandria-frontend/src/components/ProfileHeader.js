import React, { useRef, useState } from 'react';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

function ProfileHeader() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Abel Tesfaye');
  const [pronouns, setPronouns] = useState('he/him/his');
  const [location, setLocation] = useState('New York');
  const [profileImg, setProfileImg] = useState(process.env.PUBLIC_URL + '/weekend-headshot.jpg');
  const [teamsUrl, setTeamsUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="profile-header">
      <div className="profile-image" style={{ position: 'relative' }}>
        <img src={profileImg} alt={name} />
        <div
          className="edit-badge"
          style={{ cursor: 'pointer' }}
          onClick={() => fileInputRef.current.click()}
          title="Edit profile picture"
        >
          ✏️
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
      <div className="profile-info">
        {editing ? (
          <>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ fontSize: 36, fontWeight: 300, marginBottom: 5, color: '#2c3e50', width: '100%' }}
            />
            <input
              type="text"
              value={pronouns}
              onChange={e => setPronouns(e.target.value)}
              style={{ color: '#7f8c8d', fontSize: 14, marginBottom: 20, width: '100%' }}
            />
            <select
              value={location}
              onChange={e => setLocation(e.target.value)}
              style={{ color: '#7f8c8d', fontSize: 14, marginBottom: 20, width: '100%' }}
            >
              {US_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <input
              type="url"
              placeholder="Microsoft Teams link"
              value={teamsUrl}
              onChange={e => setTeamsUrl(e.target.value)}
              style={{ marginBottom: 8, width: '100%', fontSize: 14 }}
            />
            <input
              type="url"
              placeholder="LinkedIn profile link"
              value={linkedinUrl}
              onChange={e => setLinkedinUrl(e.target.value)}
              style={{ marginBottom: 8, width: '100%', fontSize: 14 }}
            />
            <button onClick={handleSave} style={{ marginTop: 8, padding: '6px 16px', borderRadius: 4, border: '1px solid #4a90e2', background: '#4a90e2', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Save</button>
          </>
        ) : (
          <>
            <h1 className="profile-name">{name}</h1>
            <div className="profile-pronouns">{pronouns}</div>
            <div className="profile-location">📍 {location}, NY</div>
          </>
        )}
        <div className="profile-details">
          <div className="detail-section">
            <h4>Role</h4>
            <p>Product Marketing Director</p>
            <div className="sub-text">since May 2018</div>
          </div>
          <div className="detail-section">
            <h4>Department</h4>
            <p>Global Marketing</p>
          </div>
          <div className="detail-section">
            <h4>Education</h4>
            <p>Monster's University</p>
          </div>
          <div className="detail-section">
            <h4>Mentees</h4>
            <p>2/3</p>
            <div className="sub-text">1 spot remaining</div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a
          href={teamsUrl || '#'}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="Microsoft Teams"
          style={{ background: 'transparent', padding: 0 }}
        >
          <img src={process.env.PUBLIC_URL + '/teams-logo.jpg'} alt="Teams" style={{ width: 32, height: 32, borderRadius: 4 }} />
        </a>
        <a
          href={linkedinUrl || '#'}
          className="social-icon linkedin"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={{ background: 'transparent', padding: 0 }}
        >
          <img src={process.env.PUBLIC_URL + '/linkedin-logo.png'} alt="LinkedIn" style={{ width: 32, height: 32, borderRadius: 4 }} />
        </a>
        <div
          className="edit-icon"
          style={{ cursor: 'pointer' }}
          onClick={() => setEditing(true)}
          title="Edit profile section"
        >
          ✏️
        </div>
      </div>
    </div>
  );
}

export function MenteeProfileHeader({ name, pronouns, location, profileImg, role, department, education }) {
  return (
    <div className="profile-header">
      <div className="profile-image" style={{ position: 'relative' }}>
        <img src={profileImg} alt={name} />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <div className="profile-pronouns">{pronouns}</div>
        <div className="profile-location">📍 {location}</div>
        <div className="profile-details">
          <div className="detail-section">
            <h4>Role</h4>
            <p>{role}</p>
          </div>
          <div className="detail-section">
            <h4>Department</h4>
            <p>{department}</p>
          </div>
          <div className="detail-section">
            <h4>Education</h4>
            <p>{education}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader; 