import React from 'react';

const Navbar = ({ onScrollToAbout, onScrollToProjects, onScrollToContact, onScrollToHome, onScrollToSkills, activeSection }) => {
  const getLinkClass = (section) =>
    `relative group text-white transition-all duration-300 cursor-pointer 
     ${activeSection === section ? 'text-yellow-300 font-bold' : ''}`;

     const getUnderlineClass = (section) => {
      const isActive = activeSection === section;
      return `
        absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-transform duration-300 ease-in-out 
        transform ${isActive ? 'scale-x-100 origin-left' : 'scale-x-0 origin-right'} w-full
      `;
    };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-20 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-cyan-400">Kamal Ahmad</h1>
      <ul className="flex gap-6 text-lg">
        <li className="relative group">
          <button onClick={onScrollToHome} className={getLinkClass('hero')}>
            Home
            <span className={getUnderlineClass('hero')}></span>
          </button>
        </li>
        <li className="relative group">
          <button onClick={onScrollToAbout} className={getLinkClass('about')}>
            About
            <span className={getUnderlineClass('about')}></span>
          </button>
        </li>
        <li className="relative group">
          <button onClick={onScrollToSkills} className={getLinkClass('skills')}>
            Skills
            <span className={getUnderlineClass('skills')}></span>
          </button>
        </li>
        <li className="relative group">
          <button onClick={onScrollToProjects} className={getLinkClass('projects')}>
            Projects
            <span className={getUnderlineClass('projects')}></span>
          </button>
        </li>
        <li className="relative group">
          <button onClick={onScrollToContact} className={getLinkClass('contact')}>
            Contact
            <span className={getUnderlineClass('contact')}></span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
