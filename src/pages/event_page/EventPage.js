import React from 'react';

import './EventPage.css';

const EventPage = () => {
  return (
    <div
      className="page-container"
      style={{ justifyContent: 'start', padding: '0' }}
    >
      <div className="image-container" />
      <div className="heading-container">
        <h1 className="page-heading" style={{ textAlign: 'start' }}>
          Birthday Bash
        </h1>
        <p className="page-text">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
    </div>
  );
};

export default EventPage;
