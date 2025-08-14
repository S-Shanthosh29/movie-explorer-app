// src/App.js
import React from 'react';
import tmdbLogo from './assets/tmdb-logo.svg';
import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  return (
    <div className="App">
      <main className="main-content">
        {/* Your main app content here */}
        <h1>Welcome to Movie Explorer</h1>
        <p>Search by title, genre, or mood.</p>
      </main>

      <footer className="footer">
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={tmdbLogo}
            alt="TMDB Logo"
            className="tmdb-logo"
          />
        </a>
        <p className="credit-text">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </footer>
    </div>
  );
}

export default App;
