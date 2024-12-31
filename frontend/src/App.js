// frontend/src/App.js (or BookSearch.js)

import React from 'react';
import './styles.css';
import BookSearch from './components/BookSearch';  // Your BookSearch component

const App = () => {
  return (
    <div className="App">
      <BookSearch />  {/* Your search component */}
      
      {/* Footer */}
      <div className="footer">
        Created by Lakmewan Gambheera Arachchi
      </div>
    </div>
  );
};

export default App;
