# FICO Profile App

A React application that displays a professional profile page for Jane Doe, a Product Marketing Director at FICO.

## Features

- Modern, responsive design
- Professional profile layout with header, sidebar, and main content sections
- Profile information including role, department, education, and mentee count
- About section with personal description
- Preferences and mentor style information
- Skills and interests displayed as tags
- Detailed work experience section
- Mentee management section
- Explore profile preview

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd fico-profile-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
fico-profile-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProfileHeader.js
│   │   ├── Sidebar.js
│   │   └── MainSection.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- CSS3 with modern layout techniques (Grid, Flexbox)
- Responsive design principles
- SVG data URLs for placeholder images

## Customization

The app is built with modular components, making it easy to customize:

- Update profile information in `ProfileHeader.js`
- Modify mentee data in `Sidebar.js`
- Edit work experience in `MainSection.js`
- Adjust styling in `index.css`

## Browser Support

The app is designed to work on modern browsers that support:
- CSS Grid
- CSS Flexbox
- ES6+ JavaScript features 