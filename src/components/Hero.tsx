import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-space-cadet text-white py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/bPQ07nz/407856378-18235949134218216-2482480432303569113-n.jpg" 
          alt="Fitness background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-space-cadet opacity-75"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Unlock Your Full Potential: Start Your 7-Day Free Trial Today</h1>
          <p className="text-xl mb-8">Join our community of fitness enthusiasts and transform your life.</p>
          <button className="btn-primary text-xl">Start Your 7-Day Free Trial Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;