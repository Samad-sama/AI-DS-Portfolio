import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Abdessamad Sadoudi",
      link: "https://www.linkedin.com/in/abdessamad-sadoudi-59a3a1308/",
      ariaLabel: "Visit LinkedIn profile"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "Samad-sama",
      link: "https://github.com/Samad-sama",
      ariaLabel: "Visit GitHub profile"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sadoudi.abdessamad@univ-ouargla.dz",
      link: "mailto:sadoudi.abdessamad@univ-ouargla.dz",
      ariaLabel: "Send email"
    }
  ];

  return (
    <div className="contact-content">
      <h1 className="contact-title">Get In Touch</h1>
      <div className="contact-grid">
        {contactInfo.map((info, index) => (
          <a
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            key={index}
            aria-label={info.ariaLabel}
          >
            <div className="contact-icon">{info.icon}</div>
            <div className="contact-text-wrapper">
              <h3 className="contact-info-title">{info.title}</h3>
              <p className="contact-value">{info.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact; 