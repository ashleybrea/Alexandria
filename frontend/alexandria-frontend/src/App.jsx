// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import MenteeProfile from "./pages/MenteeProfile";

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-wrapper">
//         {/* Header */}
//         <header className="app-header">
//           <div className="logo">
//             <img src="/images/fico-logo.png" alt="FICO Logo" className="logo-img" />
//           </div>
//           <nav className="app-nav">
//             <ul>
//               <li>
//                 <Link to="/">Mentee Profile</Link>
//               </li>
//               {/* Future pages */}
//               {/* <li><Link to="/mentors">Mentors</Link></li> */}
//             </ul>
//           </nav>
//         </header>

//         {/* Main Content */}
//         <main className="app-main">
//           <Routes>
//             <Route path="/" element={<MenteeProfile />} />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <footer className="app-footer">
//           <p>© {new Date().getFullYear()} MentorConnect • Built for mentees & mentors</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import MenteePage from "./pages/MenteeProfile.jsx";

function App() {
  return (
    <div>
      <MenteePage />
    </div>
  );
}

export default App;