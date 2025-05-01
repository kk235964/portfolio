import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Event Management',
    description: 'Web app to manage and track events with admin panel.',
    techStack: 'React, Node.js, MongoDB',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Pizza Delivery',
    description: 'Food ordering app with real-time delivery tracking.',
    techStack: 'React, Express, Firebase',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Audio Transcription',
    description: 'Converts audio into accurate text using AI.',
    techStack: 'Python, Whisper, Flask',
    image: 'https://images.unsplash.com/photo-1581093588401-b8f2b5d1b21d?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio with animations.',
    techStack: 'React, Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1614843601975-0e1f5a594ca1?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

const Projects = () => {
  return (
    <>
     <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">
      My Projects
    </h2>

    <div className="min-h-screen py-16 px-6 bg-transparent flex flex-wrap justify-center gap-10">
      {projects.map((project, idx) => (
        <div key={idx} className="flip-card w-72 h-96">
          <div className="flip-card-inner">
            {/* Front */}
            <div className="flip-card-front bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            </div>

            {/* Back */}
            <div className="flip-card-back bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-md text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <p className="text-xs italic mb-4">{project.techStack}</p>
              <a href={project.link} className="text-cyan-400 underline hover:text-cyan-300">View Project</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
