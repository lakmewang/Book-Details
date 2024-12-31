// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated for React 18
import App from './App';  // Import the App component
import './styles.css';  // Optional: Import styles for the app

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root for React app
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
