import React from 'react';
// import Login from './views/auth/Login';
import Entry from './views/entry/Entry'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    );
}

export default App;
