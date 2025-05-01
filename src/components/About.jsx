import React, { useState } from 'react';
import { FaUniversity, FaLightbulb, FaRocket, FaBrain } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { motion } from 'framer-motion';

const aboutItems = [
  {
    icon: <FaUniversity />,
    text: 'Final-year B.Tech in Mechanical Engineering at MNNIT, Allahabad',
  },
  {
    icon: <FaLightbulb />,
    text: 'Exploring roles in Software Development, Web Development, Data Analytics, and Data Science',
  },
  {
    icon: <MdOutlineWork />,
    text: 'Currently working on full-stack web applications and machine learning models',
  },
  {
    icon: <FaRocket />,
    text: 'Built projects like Event Management Website, Audio Transcription Tool, and a Pizza Delivery Web App',
  },
  {
    icon: <FaBrain />,
    text: 'Member of Robotics Club and SAE Club, managing the Robotics Club website',
  },
];

const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="py-12 px-6 md:px-20 font-sans text-green-300">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-cyan-400"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4 p-5 border border-green-300 rounded-xl 
              backdrop-blur-md bg-white/10 shadow-lg 
              hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] 
              transition duration-300"
          >
            {/* Wiggle Icon on hover */}
            <motion.div
              animate={hoverIndex === index ? { rotate: [0, 15, -15, 10, -10, 0] } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl text-cyan-400"
            >
              {item.icon}
            </motion.div>
            <p className="text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
