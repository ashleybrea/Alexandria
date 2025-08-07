import React from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import MenteeProfilePage from './components/MenteeProfilePage';

// import Header from './mentee-components/Header';
import ProfileHeader1 from './mentee-components/ProfileHeader';
import Sidebar1 from './mentee-components/Sidebar';
import MainSection1 from './mentee-components/MainSection';
import MentorProfilePage from './mentee-components/MentorProfilePage.js';

import LoginPage from "./login.js"
import Banner from './components/Banner';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const mentee1 = {
  name: 'Ariana Grande',
  pronouns: 'she/her/hers',
  location: 'California',
  profileImg: process.env.PUBLIC_URL + '/ariana-grande.png',
  role: 'Product Design Associate',
  department: 'Product Design',
  education: 'UCLA',
  about: 'Ariana Grande-Butera, born June 26, 1993, is an American singer, songwriter, and actress. She is known for her impressive four-octave vocal range, which includes the whistle register, and has been recognized as a pop icon and influential figure in popular music.',
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
  profileImg: process.env.PUBLIC_URL + '/alex-hamilton.png',
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

const mentor1 = {
  name: 'The weeknd',
  pronouns: 'he/him/his',
  location: 'New York',
  profileImg: process.env.PUBLIC_URL + '/weekend-headshot.jpg',
  role: 'Product Marketing Director',
  department: 'Global Marketing',
  education: 'Monster\'s University',
  about: 'Abel Tesfaye, known to the world as The Weeknd, rose to international fame as a groundbreaking singer and performer. After years of topping charts and selling out arenas, he has now transitioned into a new chapter as a Product Marketing Manager, bringing his creativity, vision, and passion for connecting with audiences into the world of business.',
  skills: ['Go-To-Market Strategy',
"Figma",
'Research',
"Data Analysis"],
  interests: ['Hiking',
'Reading',
'Scrapbooking',
'Music'],
  work: [
    {
      title: 'Product Marketing Director',
      company: 'FICO',
      duration: '2018 - Present',
      bullets: [
        'Lead go-to-market strategies for B2B analytics solutions serving financial services clients',
        'Drive product positioning and messaging for credit risk management platforms',
        'Collaborate with sales teams to develop competitive battle cards and customer success stories'
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
    }
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* login page */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Mentee static pages */}
        <Route
          path="/mentee/Ariana Grande"
          element={
            <>
            <Banner />
            <MenteeProfilePage mentee={mentee1} />
            </>
          }
        />
        <Route
          path="/mentee/Alex Hamilton"
          element={
            <>
            <Banner />
            <MenteeProfilePage mentee={mentee2} />
            </>
          }
        />

        {/* Mentee profile page - pov */}
        <Route
            path="/mentee/arianagrande"
            element={
              <>
              <Banner/>
              <div className="container">
                <ProfileHeader1 />
                <div className="main-content">
                  <Sidebar1 />
                  <MainSection1 />
                </div>
              </div>
              </>
            }
          />

        {/* mentor profile page - pov */}
        <Route
          path="/mentor/theweeknd"
          element={
            <>
            <Banner/>
            <div className="container">
              <ProfileHeader />
              <div className="main-content">
                <Sidebar />
                <MainSection />
              </div>
            </div>
            </>
          }
          
        />

        {/* mentor static page */}
        <Route
          path="/mentor/The weeknd"
          element={
            <>
            <Banner />
            <MentorProfilePage mentor={mentor1} />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App; 