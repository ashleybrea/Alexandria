import React from 'react';
import { MenteeProfileHeader } from './ProfileHeader';

function MenteeProfilePage({ mentee }) {
  return (
    <div>
      <MenteeProfileHeader
        name={mentee.name}
        pronouns={mentee.pronouns}
        location={mentee.location}
        profileImg={mentee.profileImg}
        role={mentee.role}
        department={mentee.department}
        education={mentee.education}
      />
      <div className="main-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">About</h3>
          </div>
          <div className="about-section">
            <p className="about-text">{mentee.about}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Skills</h3>
          </div>
          <div className="tags-container">
            {mentee.skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Interests</h3>
          </div>
          <div className="tags-container">
            {mentee.interests.map(interest => (
              <span key={interest} className="tag">{interest}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Work Experience</h3>
          </div>
          {mentee.work.map((item, idx) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenteeProfilePage;