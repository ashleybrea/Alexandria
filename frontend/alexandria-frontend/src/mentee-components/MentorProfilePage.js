import React from 'react';
import { MentorProfileHeader } from './ProfileHeader';

function MentorProfilePage({ mentor }) {
  return (
    <div>
      <MentorProfileHeader
        name={mentor.name}
        pronouns={mentor.pronouns}
        location={mentor.location}
        profileImg={mentor.profileImg}
        role={mentor.role}
        department={mentor.department}
        education={mentor.education}
      />
      <div className="main-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">About</h3>
          </div>
          <div className="about-section">
            <p className="about-text">{mentor.about}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Skills</h3>
          </div>
          <div className="tags-container">
            {mentor.skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Interests</h3>
          </div>
          <div className="tags-container">
            {mentor.interests.map(interest => (
              <span key={interest} className="tag">{interest}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Work Experience</h3>
          </div>
          {mentor.work.map((item, idx) => (
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

export default MentorProfilePage;