import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import EmailList from '../src/component/EmailList';
import EmailCorrespondence from './component/EmailCorrespondence';


function App() {
  return (
    <div className="App">
      <h3>Eamil correspondence APP</h3>
      
      <Router>
         <Routes>
          <Route path="/" element={<EmailList/>} />
          <Route path="/email" element={<EmailCorrespondence/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
