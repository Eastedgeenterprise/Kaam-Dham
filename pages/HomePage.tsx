
import React from 'https://esm.sh/react@18.2.0';
import { Link } from 'https://esm.sh/react-router-dom@6.25.1';
import { FEATURES, SERVICE_CATEGORIES } from '../constants.tsx';
import ServiceCard from '../components/ServiceCard.tsx';
import type { Feature } from '../types.ts';

const HomePage: React.FC = () => {
  const popularServices = SERVICE_CATEGORIES.slice(0, 8);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white" 
        style={{backgroundImage: "url('https://picsum.photos/1600/900?random=10')"}}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Connecting You to Trusted Service Providers
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              Your one-stop solution for finding reliable local professionals for any task.
            </p>
            <Link 
              to="/services" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Kaam Dhaam?</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature: Feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-cyan-100 rounded-full p-4 mb-4">
                    {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Services</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularServices.map(service => (
              <Link to={`/services/${service.slug}`} key={service.slug}>
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
          <Link 
            to="/services" 
            className="mt-12 inline-block bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;