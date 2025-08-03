import React, { useRef } from "react";
import "../style/MenteePage.css";

const MenteePage = () => {
  const menteeCarousel = useRef(null);

  const scroll = (direction) => {
    menteeCarousel.current.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="mentee-page">
      {/* Header */}
      <header className="header">
        <img src="src/assets/fico-logo.png" alt="FICO Logo" className="fico-logo" />
      </header>

      {/* Banner */}
      <div className="banner">
        <img src="src/assets/banner.png" alt="City Skyline" className="banner-img" />
        <div className="page-container">
          <div className="profile-card">
            <div className="profile-left">
              <img src="src/assets/ariana.png" alt="Ariana" className="profile-pic" />
            </div>
            <div className="profile-info">
              <h1>
                Ariana Grande <span>(She/Her/Hers)</span>
              </h1>
              <p>📍 New York, NY</p>
              <div className="profile-meta">
                <div>
                  <strong>Role</strong>
                  Product Design Associate
                </div>
                <div>
                  <strong>Department</strong>
                  Software
                </div>
                <div>
                  <strong>Education</strong>
                  Monster’s University
                </div>
                <div>
                  <strong>Since</strong>
                  May 2023
                </div>
              </div>
              <div className="profile-actions">
                <button className="btn-teams">Microsoft Teams</button>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732223.png" alt="Outlook" />
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-container">
        <div className="content-layout">
          {/* Sidebar */}
          <aside className="mentor-card">
            <h4>Mentor</h4>
            <img src="src/assets/jane.png" alt="Jane" />
            <h3>Jane Doe</h3>
            <p>Product Marketing Director</p>
            <p>Since June 2023</p>
            <button className="btn-secondary">View Profile</button>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <section className="card">
              <h2>About</h2>
              <p>
                Hi! My name is Ariana, and I am a Product Design Associate eager to learn more 
                about design and marketing. I love exploring how design thinking applies to 
                marketing challenges including positioning, messaging, user research, and launch strategies.
              </p>
            </section>

            <section className="card">
              <h2>Preferences</h2>
              <div className="preferences">
                <div><strong>Preferred Meeting Frequency:</strong> Monthly</div>
                <div><strong>Session Structured:</strong> Structured, Scheduled</div>
                <div><strong>Preferred Contact Method:</strong> Microsoft Teams</div>
                <div><strong>3 Words:</strong> Goal-Oriented, Casual, Fun</div>
                <div><strong>Fields of Expertise:</strong> Product Design, Software Engineering</div>
              </div>
            </section>

            <section className="card split">
              <div>
                <h2>Skills</h2>
                <div className="tags">
                  <span>Figma</span><span>Communication</span><span>Design Principles</span>
                </div>
              </div>
              <div>
                <h2>Interests</h2>
                <div className="tags">
                  <span>Hiking</span><span>Reading</span><span>Volunteering</span>
                </div>
              </div>
            </section>

            <section className="card">
              <h2>Work Experience</h2>
              <h3>Product Design Associate | FICO <span>(May 2023 – Present)</span></h3>
              <ul>
                <li>Design user interfaces and experiences for B2B financial analytics products</li>
                <li>Collaborate with product marketing teams</li>
                <li>Create wireframes, prototypes, and design mockups</li>
                <li>Participate in user research sessions</li>
              </ul>
            </section>

            <section className="card">
              <h2>Explore Mentees</h2>
              <div className="carousel-container">
                <button className="arrow left" onClick={() => scroll("left")}>‹</button>
                <div className="mentees-carousel" ref={menteeCarousel}>
                  {[1,2,3,4].map((id) => (
                    <div key={id} className="mentee-card">
                      <img src="src/assets/jamie.png" alt="Jamie" />
                      <h4>Jamie Wallword</h4>
                      <p>UX Researcher</p>
                      <p>Looking for a fun, low-commitment mentor-mentee relationship?</p>
                      <button className="btn-secondary">View Profile</button>
                    </div>
                  ))}
                </div>
                <button className="arrow right" onClick={() => scroll("right")}>›</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MenteePage;