import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container-fluid loading d-flex justify-content-center align-items-center">
      <Link to={'/'} className="mx-2 card">
        <img
          className=""
          src="./error-message.png"
          alt="Error. Drink not found!"
        />
      </Link>
    </div>
  );
};

export default Error;
// https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg
