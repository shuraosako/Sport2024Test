// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import DataModification from './components/DataModification';
import MemberDetails from './components/MemberDetails'; // 追加

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/datamodification" element={<DataModification />} />
        <Route path="/member/:id" element={<MemberDetails />} /> // 追加
      </Routes>
    </Router>
  );
};

export default App;