import React from 'react';
import { FaCopyright, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container-fluid text-white-50 bg-dark p-3 footer">
      <div className="container-md text-center">
        <p className="mb-0">
          copyright <FaRegCopyright /> Revanth M. Bontha
        </p>
        <p className="mb-0">{`${year}`}</p>
      </div>
    </div>
  );
};

export default Footer;
