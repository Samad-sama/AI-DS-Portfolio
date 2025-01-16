import React from 'react';
import './About.css';
import { FaBrain, FaCode, FaRobot, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

function About() {
  const technicalSkills = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Deep Learning, Neural Networks, NLP"
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      description: "Python, Java, JavaScript, React"
    },
    {
      icon: <FaRobot />,
      title: "AI Development",
      description: "Computer Vision, Reinforcement Learning"
    }
  ];

  const softSkills = [
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Strong communication, leadership, and teamwork abilities"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution design"
    },
    {
      icon: <FaChartLine />,
      title: "Project Management",
      description: "Agile methodologies and deadline-driven development"
    }
  ];

  return (
    <div className="about-content">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
        I'm a dedicated AI and Data Science professional with expertise in machine learning and software engineering. 
        I thrive on transforming complex data into valuable insights and creating cutting-edge solutions.
      </p>
      
      <h2 className="skills-section-title">Technical Skills</h2>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>

      <h2 className="skills-section-title">Soft Skills</h2>
      <div className="skills-grid">
        {softSkills.map((skill, index) => (
          <div className="skill-card soft-skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About; 