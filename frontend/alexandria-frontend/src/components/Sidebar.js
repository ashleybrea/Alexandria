import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialMentees = [
  {
    name: 'Ariana Grande',
    since: 'June 2023',
    role: 'Product Design Associate',
    badge: 'Microsoft Teams',
    avatar: '',
  },
  {
    name: 'Alex Hamilton',
    since: 'May 2019',
    role: 'Product Marketing Intern',
    badge: 'Microsoft Teams',
    avatar: ''
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const [mentees, setMentees] = useState(initialMentees);
  const [editing, setEditing] = useState(false);

  // Explore section state
  const [exploreEditing, setExploreEditing] = useState(false);
  const [explore, setExplore] = useState({
    name: 'Abel Tesfaye',
    since: 'June 2023',
    role: 'Product Marketing Manager',
    quote: 'Hello there! I am always happy to share insights based on my career journey',
  });
  const [exploreDraft, setExploreDraft] = useState(explore);

  const handleRemoveMentee = (idx) => {
    setMentees(mentees.filter((_, i) => i !== idx));
  };

  const handleExploreEdit = () => {
    setExploreDraft(explore);
    setExploreEditing(true);
  };
  const handleExploreSave = () => {
    setExplore(exploreDraft);
    setExploreEditing(false);
  };
  const handleExploreCancel = () => {
    setExploreEditing(false);
  };

  return (
    <div className="sidebar">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Your Mentees</h3>
          <button
            style={{ background: '#4a90e2', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}
            onClick={() => setEditing(!editing)}
          >
            {editing ? 'Done' : 'Edit'}
          </button>
        </div>
        {mentees.map((mentee, idx) => (
          <div
            className="mentee-item"
            key={idx}
            style={{ cursor: 'pointer', border: '1px solid #e0e6ed', borderRadius: 12, marginBottom: 8, background: '#f9fbfd', boxShadow: '0 1px 4px rgba(74,144,226,0.04)' }}
            tabIndex={0}
            onClick={() => !editing && navigate(`/mentee/${mentee.name}`)}
          >
            <div className="mentee-avatar" style={{ background: '#ddd', width: 50, height: 50, borderRadius: '50%' }}></div>
            <div className="mentee-info">
              <h5>{mentee.name}</h5>
              <p>Since {mentee.since}</p>
              <p>{mentee.role}</p>
              {mentee.badge && <div className="mentee-badge">{mentee.badge}</div>}
              {editing && (
                <button
                  onClick={e => { e.stopPropagation(); handleRemoveMentee(idx); }}
                  style={{ marginTop: 8, background: '#fff', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: 8, padding: '4px 10px', fontWeight: 500, fontSize: 13, cursor: 'pointer' }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* How You Appear in Explore Section */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">How You Appear in Explore</h3>
          {exploreEditing ? null : (
            <button
              style={{ background: '#4a90e2', color: '#fff', border: 'none', borderRadius: 16, padding: '4px 14px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}
              onClick={handleExploreEdit}
            >
              Edit
            </button>
          )}
        </div>
        <div className="mentee-item">
          <div className="mentee-avatar"></div>
          <div className="mentee-info">
            {exploreEditing ? (
              <>
                <input
                  type="text"
                  value={exploreDraft.name}
                  onChange={e => setExploreDraft({ ...exploreDraft, name: e.target.value })}
                  placeholder="Name"
                  style={{ width: '100%', marginBottom: 6, fontSize: 15, borderRadius: 4, border: '1px solid #ccc', padding: 4 }}
                />
                <input
                  type="text"
                  value={exploreDraft.since}
                  onChange={e => setExploreDraft({ ...exploreDraft, since: e.target.value })}
                  placeholder="Since (e.g. June 2023)"
                  style={{ width: '100%', marginBottom: 6, fontSize: 15, borderRadius: 4, border: '1px solid #ccc', padding: 4 }}
                />
                <input
                  type="text"
                  value={exploreDraft.role}
                  onChange={e => setExploreDraft({ ...exploreDraft, role: e.target.value })}
                  placeholder="Role"
                  style={{ width: '100%', marginBottom: 6, fontSize: 15, borderRadius: 4, border: '1px solid #ccc', padding: 4 }}
                />
                <textarea
                  value={exploreDraft.quote}
                  onChange={e => setExploreDraft({ ...exploreDraft, quote: e.target.value })}
                  placeholder="Quote"
                  rows={2}
                  style={{ width: '100%', marginBottom: 6, fontSize: 15, borderRadius: 4, border: '1px solid #ccc', padding: 4 }}
                />
                <button
                  onClick={handleExploreSave}
                  style={{ background: '#4a90e2', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 500, fontSize: 15, marginRight: 8, cursor: 'pointer' }}
                >
                  Save
                </button>
                <button
                  onClick={handleExploreCancel}
                  style={{ background: '#fff', color: '#333', border: '1px solid #aaa', borderRadius: 8, padding: '6px 16px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h5>{explore.name}</h5>
                <p>Since {explore.since}</p>
                <p>{explore.role}</p>
                <div className="quote-section">
                  "{explore.quote}"
                </div>
                <button className="view-profile-btn">View Profile</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar; 