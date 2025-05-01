import React, {useState} from 'react';
import './Hero.css';
import resume from '../assets/Kamal_Resume.pdf';


const Hero = () => {

  const [flipped, setFlipped] = useState(false);
  
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 animate-fade-in-down">
      <h2 className="text-5xl font-bold mb-4">Hi 👋, I'm <span className="text-cyan-400">Kamal Ahmad</span></h2>
      <p className="text-xl max-w-xl text-gray-300">A Passionate <span className="text-yellow-300">Full Stack Developer</span>, <span className="text-pink-300">Data Enthusiast</span>, and <span className="text-green-300">Tech Explorer</span></p>

      <div
        className="absolute top-6 right-6 w-40 h-20 perspective2"
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`flip-card2 ${flipped ? 'flipped' : ''}`}> 
          <div className="flip-card-front2 flex items-center justify-center bg-white bg-opacity-10 border border-yellow-400 rounded-xl shadow-lg cursor-pointer">
            <span className="text-yellow-300 font-semibold">View Resume</span>
          </div>
          <div className="flip-card-back2 flex flex-col items-center justify-center bg-white bg-opacity-10 border border-yellow-400 rounded-xl shadow-lg">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline mb-2"
            >
              View Online
            </a>
            <a
              href={resume}
              download
              className="text-green-300 underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
