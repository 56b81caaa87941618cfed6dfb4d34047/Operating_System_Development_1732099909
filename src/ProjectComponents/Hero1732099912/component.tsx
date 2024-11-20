import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Operating_System_Development_1732099909/main/src/assets/images/3da0d35e35414855bf3c0af852d3be15.jpeg")'}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Operating_System_Development_1732099909/main/src/assets/images/19c50c8dd2f248cbbf1cd1825cb225de.jpeg" alt="Hero" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-6xl font-bold mb-6 text-center md:text-left">WIIIW</h1>
          <h1 className="text-4xl font-bold mb-4">Experience the Power of Windows</h1>
          <p className="text-xl mb-6">Your gateway to seamless productivity, creativity, and connectivity</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }