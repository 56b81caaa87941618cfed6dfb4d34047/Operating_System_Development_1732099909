import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Operating_System_Development_1732099909/main/src/assets/images/15f406912bc341c9b80bc12af01b9155.jpeg")'}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Experience the Power of Windows</h1>
          <p className="text-xl mb-6">Your gateway to seamless productivity, creativity, and connectivity</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }