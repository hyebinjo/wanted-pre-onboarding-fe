import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getStorage } from './utils/storage';
import Login from './pages/Login';
import Main from './pages/Mains';

function App() {
  const userAccount = getStorage('userAccount', null);

  return (
    <Routes>
      <Route
        path="/"
        element={userAccount ? <Navigate to="/main" /> : <Login />}
      />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
