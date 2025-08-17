
import React from 'https://esm.sh/react@18.2.0';
import { Link } from 'https://esm.sh/react-router-dom@6.25.1';
import { SERVICE_CATEGORIES } from '../constants.tsx';
import ServiceCard from '../components/ServiceCard.tsx';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Find the right professional for any job. We offer a wide variety of services to meet your needs.
          </p>
           <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {SERVICE_CATEGORIES.map(service => (
            <Link to={`/services/${service.slug}`} key={service.slug} className="block">
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;