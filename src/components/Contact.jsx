import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaEnvelope className="text-cyan-400 text-4xl contact-icon" />,
    label: 'Email',
    link: 'mailto:your.email@example.com',
  },
  {
    icon: <FaLinkedin className="text-cyan-400 text-4xl contact-icon" />,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/yourprofile',
  },
  {
    icon: <FaGithub className="text-cyan-400 text-4xl contact-icon" />,
    label: 'GitHub',
    link: 'https://github.com/yourusername',
  },
  {
    icon: <FaPhone className="text-cyan-400 text-4xl contact-icon" />,
    label: 'Phone',
    link: 'tel:+911234567890',
  },
];

const Contact = () => {
  return (
    <div className="py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-cyan-400 text-4xl font-bold mb-10">Contact Me</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
        {contactItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            {item.icon}
            <span className="contact-label text-green-300 mt-2 text-sm">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
