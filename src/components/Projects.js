import React from 'react';
import './Projects.css';
import { FaGithub, FaPython, FaReact, FaRobot, FaNewspaper, FaChartLine, FaJava, FaImage, FaFire, FaWarehouse } from 'react-icons/fa';
import { SiJupyter, SiPandas, SiNumpy, SiScikitlearn, SiGooglecolab, SiTensorflow, SiOpencv, SiPlotly, SiGradle, SiJavascript } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Arabic Fake News Detection",
      description: "Machine learning system for detecting fake news in Arabic text using Natural Language Processing. Implemented multiple classification models with NLTK and scikit-learn, including Naive Bayes, Logistic Regression, Random Forest, and SVM.",
      technologies: [
        <FaPython title="Python" />, 
        <SiJupyter title="Jupyter Notebook" />, 
        <SiPandas title="Pandas" />, 
        <SiNumpy title="NumPy" />, 
        <SiScikitlearn title="scikit-learn" />, 
        <FaNewspaper title="NLTK" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Natural%20Language%20Processing%20(NLP)/Workshop%202%20Arabic%20Natural%20Language%20Processing%20(NLP)"
    },
    {
      title: "Car Sales Volume and Price Prediction",
      description: "Comprehensive analysis and prediction of car sales using multiple ML models including Linear Regression, Decision Trees, Random Forests, and Gradient Boosting. Features model evaluation, tuning, and interpretability using LIME and SHAP.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiPandas title="Pandas" />,
        <SiNumpy title="NumPy" />,
        <SiScikitlearn title="scikit-learn" />,
        <FaChartLine title="Data Visualization" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Machine%20Learning%20II"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, featuring responsive design, dynamic content loading, animated backgrounds, and interactive project cards.",
      technologies: [
        <FaReact title="React" />,
        <SiJavascript title="JavaScript" />
      ],
      github: "https://github.com/Samad-sama/AI-DS-Portfolio"
    },
    {
      title: "Exploring Autoencoder Architectures",
      description: "Developed multiple autoencoder architectures for tasks like image reconstruction and denoising. Implemented conventional AE and Variational AE (VAE) models.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiTensorflow title="TensorFlow" />,
        <SiNumpy title="NumPy" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2003"
    },
    {
      title: "Sentence Auto-Complete with RNNs",
      description: "Built a sentence auto-complete system using recurrent neural networks (RNNs) with LSTM architecture.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiPandas title="Pandas" />,
        <SiNumpy title="NumPy" />,
        <FaNewspaper title="NLTK" />,
        <SiTensorflow title="TensorFlow" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2004"
    },
    {
      title: "Time Series Forecasting for Electricity Transformers",
      description: "Predicted oil temperature of electricity transformers using time series forecasting models AR, ARIMA, Exponential Smoothing, Prophet, Dynamic AR, Ridge, and Ensemble Model (AR + Ridge).",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiNumpy title="NumPy" />,
        <SiPandas title="Pandas" />,
        <SiScikitlearn title="scikit-learn" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Machine%20learning%20applications"
    },
    {
      title: "CNN for Ear Print Classification",
      description: "Developed a Convolutional Neural Network (CNN) for classifying ear prints.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiNumpy title="NumPy" />,
        <SiTensorflow title="TensorFlow" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2002"
    },
    {
      title: "MLP from Scratch for Fruit Classification",
      description: "Built a multi-layer perceptron (MLP) from scratch to classify apples and lemons.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiNumpy title="NumPy" />,
        <SiScikitlearn title="scikit-learn" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2001"
    },
    {
      title: "Blood Vessel Segmentation",
      description: "Evaluated logistic regression and GLMs for binary segmentation of retinal blood vessel pixels.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiGooglecolab title="Google Colab" />,
        <SiScikitlearn title="scikit-learn" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/2nd%20semester/Machine%20Learning%201/Workshop"
    },
    {
      title: "Image Processing Techniques",
      description: "Explored image compression and frequency filtering with JPEG and Fourier transforms.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiNumpy title="NumPy" />,
        <SiOpencv title="OpenCV" />,
        <FaImage title="Image Processing" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/2nd%20semester/Image%20Processing%20and%20Computer%20Vision/Workshop%2002"
    },
    {
      title: "40 Tasks to Learn Image Manipulation",
      description: "A comprehensive collection of 40 tasks focused on image processing and manipulation techniques.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiNumpy title="NumPy" />,
        <SiOpencv title="OpenCV" />,
        <FaChartLine title="Data Visualization" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/1st%20semester/Digital%20Image"
    },
    {
      title: "Exploring Algerian Forest Fire Data",
      description: "A mini-project focused on exploratory data analysis and visualization of Algerian forest fire data.",
      technologies: [
        <FaPython title="Python" />,
        <SiJupyter title="Jupyter Notebook" />,
        <SiPlotly title="Plotly" />,
        <SiPandas title="Pandas" />,
        <SiScikitlearn title="scikit-learn" />,
        <FaFire title="Forest Fire Analysis" />
      ],
      github: "https://github.com/MoncefDj/AI-DS-Masters/tree/main/1st%20semester/Data%20exploration%20and%20visualization"
    },
    {
      title: "Product Stocking Optimization",
      description: "A desktop application for managing hazardous materials and optimizing product stocking.",
      technologies: [
        <FaJava title="Java" />,
        <SiGradle title="Gradle" />,
        <FaWarehouse title="Inventory Management" />
      ],
      github: "https://github.com/MoncefDj/IPM"
    }
  ];

  return (
    <div className="projects-content">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-icon" title={tech.props.title}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 