import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Our Gym</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full h-96"
            src="https://www.youtube.com/embed/L0ZCWTcNdqw" 
            title="Gym Tour"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Demo;