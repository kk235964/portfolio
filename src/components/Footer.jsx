import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 bg-black bg-opacity-20">
      <p>&copy; {new Date().getFullYear()} Kamal Ahmad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;