import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <>
<Header/>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Our Stock Market Analyzer</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to our Stock Market Analyzer, a cutting-edge tool designed to help investors make informed decisions in the fast-paced world of finance. Our platform offers comprehensive data analysis, real-time stock tracking, and insightful market trends that empower both novice and experienced traders.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our mission is to provide a user-friendly interface that simplifies complex financial data into actionable insights. We understand that the stock market can be overwhelming, so we strive to make investing accessible to everyone, regardless of their experience level.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Built with the latest technologies, including ReactJS for a dynamic user experience and Tailwind CSS for a sleek and responsive design, our platform is engineered to deliver performance and reliability. Whether you're tracking your portfolio or exploring new investment opportunities, our tools are designed to support your financial journey.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          We envision a world where financial literacy is within everyone's reach, and investing is no longer reserved for a select few. Our goal is to bridge the gap between technology and finance, providing a powerful tool that transforms how people interact with the stock market.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
