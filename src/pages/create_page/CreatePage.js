import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/custom_button/CustomButton';
import './CreatePage.css';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const CreatePage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [formValues, setFormValues] = useState({
    eventName: '',
    hostName: '',
    startTime: '',
    endTime: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.eventName !== '' &&
      formValues.hostName !== '' &&
      formValues.startTime !== '' &&
      formValues.startTime !== ''
    ) {
      navigate('/event');
    }
  };

  return (
    <div className="page-container">
      <div className="heading-container">
        <h1 className="page-heading">
          Create your
          <br />
          <span className="page-span"> Event </span>
        </h1>
        <p className="page-text">
          Fill out the required details to conveniently create you personal
          event.
        </p>
        {windowSize.innerWidth > 768 && (
          <CustomButton text="🥳 Next" linkTo="/event" />
        )}
      </div>
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="create-form__label">
          Event Name
          <input
            className="create-form__input"
            type="text"
            name="eventName"
            value={formValues.eventName}
            placeholder="Birthday Bash"
            onChange={handleChange}
          />
        </label>

        <label className="create-form__label">
          Host Name
          <input
            className="create-form__input"
            type="text"
            name="hostName"
            value={formValues.hostName}
            placeholder="Huzaifa"
            onChange={handleChange}
          />
        </label>

        <label className="create-form__label">
          Start Time
          <input
            className="create-form__input"
            type="text"
            name="startTime"
            value={formValues.startTime}
            placeholder="18 August 6:00PM"
            onChange={handleChange}
          />
        </label>

        <label className="create-form__label">
          End Time
          <input
            className="create-form__input"
            type="text"
            name="endTime"
            value={formValues.endTime}
            placeholder="19 August 1:00AM"
            onChange={handleChange}
          />
        </label>
      </form>

      {windowSize.innerWidth <= 768 && (
        <CustomButton text="🥳 Next" linkTo="/event" />
      )}
    </div>
  );
};

export default CreatePage;
