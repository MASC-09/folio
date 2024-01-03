import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import Home from './components/Home/Home'; // Import Home component
import Portfolio from './components/Portfolio/Portfolio'; // Import Home component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
