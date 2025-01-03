import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import girlimg from "../../Assets/images/virtual-classroom-study-space.jpg"
// Feature Component as Functional Component
const Feature = ({ title, description }) => {
  return (
    <div className="bg-neutral-200 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
      <h2 className="text-xl font-semibold text-orange-500 mb-3">{title}</h2>
      <p className="text-neutral-950 text-font">{description}</p>
    </div>
  );
};

// Main Teaching Component as Functional Component
const Teaching = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Lifecycle method to handle visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'Flexible Schedule',
      description:
        'Create your own schedule and manage your teaching sessions at your convenience, giving you the freedom to balance your time effectively.',
    },
    {
      title: 'Expert Instructors',
      description:
        'Learn from professionals with years of industry experience who provide practical insights and knowledge.',
    },
    {
      title: 'Interactive Learning',
      description:
        'Engage in dynamic lessons, real-time discussions, and hands-on projects designed to enhance your learning experience.',
    },
  ];

  const handleGetStarted = () => {
    navigate('/admin'); // Navigate to your admin page
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-12 transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl pb-3 sm:text-5xl font-bold text-black leading-tight">
              <span className="text-orange-500">Share Your</span> Expertise with the World
            </h1>
            <p className="text-xl text-gray-700 text-font">
              Teach online and help learners across the globe. Upload your courses and create an impact with your knowledge anytime, anywhere.
            </p>
            <Link to="/Learn-hub-admin">
              <button 
                type="button" 
                onClick={handleGetStarted}
                className="group flex items-center justify-center w-full my-4 px-6 py-3 text-lg font-semibold bg-neutral-950 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105"
              >
                Upload Your Course
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src={girlimg}
              alt="Teacher uploading a course"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Teaching;
