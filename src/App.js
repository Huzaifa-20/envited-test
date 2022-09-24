import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing_page/LandingPage';
import CreatePage from './pages/create_page/CreatePage';
import EventPage from './pages/event_page/EventPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
};

export default App;
