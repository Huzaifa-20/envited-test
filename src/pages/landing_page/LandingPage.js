import React, { useState, useEffect } from 'react';

import CustomButton from '../../components/custom_button/CustomButton';
import Card from '../../images/card.svg';
import './LandingPage.css';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const LandingPage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="heading-container">
        <h1 className="page-heading">
          Imagine if
          <br />
          <span className="page-span"> Snapchat </span>
          <br />
          had events.
        </h1>
        <p className="page-text">
          Easily host and share events with your friends across any social
          media.
        </p>
        {windowSize.innerWidth > 768 && (
          <CustomButton text="🎉 Create my event" linkTo="/create" />
        )}
      </div>
      <img className="card-image" alt="card" src={Card} />

      {windowSize.innerWidth <= 768 && (
        <CustomButton text="🎉 Create my event" linkTo="/create" />
      )}
    </div>
  );
};

export default LandingPage;
