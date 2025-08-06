import React from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import MenteeProfilePage from './components/MenteeProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const mentee1 = {
  name: 'Ariana Grande',
  pronouns: 'she/her/hers',
  location: 'California',
  profileImg: process.env.PUBLIC_URL + '/weekend-headshot.jpg',
  role: 'Product Design Associate',
  department: 'Product Design',
  education: 'UCLA',
  about: 'Ariana is passionate about design and user experience. She loves collaborating with teams to create beautiful and functional products.',
  skills: ['Figma', 'UX/UI', 'Collaboration'],
  interests: ['Music', 'Art', 'Travel'],
  work: [
    {
      title: 'Product Design Associate',
      company: 'TechFlow Solutions',
      duration: '2022 - Present',
      bullets: [
        'Designed user interfaces for mobile and web apps',
        'Worked closely with engineers and product managers',
        'Conducted user research and usability testing',
      ],
    },
  ],
};

const mentee2 = {
  name: 'Alex Hamilton',
  pronouns: 'he/him/his',
  location: 'New York',
  profileImg: process.env.PUBLIC_URL + '/weekend-headshot.jpg',
  role: 'Product Marketing Intern',
  department: 'Marketing',
  education: 'NYU',
  about: 'Alex is a marketing enthusiast with a keen interest in digital campaigns and analytics.',
  skills: ['Digital Marketing', 'Data Analysis'],
  interests: ['Reading', 'Sports', 'Technology'],
  work: [
    {
      title: 'Product Marketing Intern',
      company: 'FICO',
      duration: '2023 - Present',
      bullets: [
        'Assisted in campaign planning and execution',
        'Analyzed marketing data and created reports',
        'Supported the team in various marketing initiatives',
      ],
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/mentee/ariana"
          element={<MenteeProfilePage mentee={mentee1} />}
        />
        <Route
          path="/mentee/alex"
          element={<MenteeProfilePage mentee={mentee2} />}
        />
        <Route
          path="/"
          element={
            <div className="container">
              <ProfileHeader />
              <div className="main-content">
                <Sidebar />
                <MainSection />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 