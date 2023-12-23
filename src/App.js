
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signin from './Components/Signin';
import ProfilePage from './Components/ProfilePage';

const App = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<div><Signin /></div>} />
          <Route path="/second" element={<ProfilePage />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;

