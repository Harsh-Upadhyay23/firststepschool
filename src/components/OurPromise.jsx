// OurPromise.jsx
import React from 'react';
import './OurPromise.css';

const OurPromise = () => {
  const promises = [
    {
      icon: '🏠',
      title: 'A Nurturing Second Home',
      description: 'Our single classroom ensures a safe, familiar, and comforting environment where every child is known and valued.'
    },
    {
      icon: '🌱',
      title: 'Personalized Learning Journey',
      description: 'With small, intimate classes, we tailor activities to each child\'s pace, ensuring no one is left behind and every talent is nurtured.'
    },
    {
      icon: '🧱',
      title: 'Building the Foundation',
      description: 'We focus on core pre-primary skills—language, social interaction, motor skills—to prepare your child for a confident leap into formal schooling.'
    }
  ];

  return (
    <section className="our-promise">
      <div className="stars-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}></div>
        ))}
      </div>
      
      <h2 className="section-title">Our Promise to You</h2>
      
      <div className="promises-container">
        {promises.map((promise, index) => (
          <div 
            key={index} 
            className="promise-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="promise-icon">{promise.icon}</div>
            <h3>{promise.title}</h3>
            <p>{promise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPromise;