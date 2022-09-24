import React from 'react';
import { Link } from 'react-router-dom';

import './CustomButton.css';

const CustomButton = ({ text, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className="landing-button" type="button">
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
