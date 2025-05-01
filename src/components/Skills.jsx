import React from 'react';
import { FaReact, FaNode, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaJava, FaDocker } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="p-10">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">My Skills</h2>
      <div className="grid grid-cols-5 gap-12 justify-items-center">
        {/* Skill Icon 1 */}
        <div className="group relative flex flex-col items-center">
          <FaReact
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            React
          </span>
        </div>
        {/* Skill Icon 2 */}
        <div className="group relative flex flex-col items-center">
          <FaNode
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-green-500 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            Node.js
          </span>
        </div>
        {/* Skill Icon 3 */}
        <div className="group relative flex flex-col items-center">
          <FaPython
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            Python
          </span>
        </div>
        {/* Skill Icon 4 */}
        <div className="group relative flex flex-col items-center">
          <FaDatabase
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-red-500 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            SQL
          </span>
        </div>
        {/* Skill Icon 5 */}
        <div className="group relative flex flex-col items-center">
          <FaHtml5
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            HTML5
          </span>
        </div>
        {/* Skill Icon 6 */}
        <div className="group relative flex flex-col items-center">
          <FaCss3Alt
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            CSS3
          </span>
        </div>
        {/* Skill Icon 7 */}
        <div className="group relative flex flex-col items-center">
          <FaGithub
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-black group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            GitHub
          </span>
        </div>
        {/* Skill Icon 8 */}
        <div className="group relative flex flex-col items-center">
          <FaGitAlt
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-orange-400 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            Git
          </span>
        </div>
        {/* Skill Icon 9 */}
        <div className="group relative flex flex-col items-center">
          <FaJava
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-red-700 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            Java
          </span>
        </div>
        {/* Skill Icon 10 */}
        <div className="group relative flex flex-col items-center">
          <FaDocker
            className="text-5xl text-green-300 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-150 group-hover:glow"
          />
          <span className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            Docker
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
