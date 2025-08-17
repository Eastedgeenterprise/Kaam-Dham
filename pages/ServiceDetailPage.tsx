
import React, { useEffect } from 'https://esm.sh/react@18.2.0';
import { useParams, Link, useNavigate } from 'https://esm.sh/react-router-dom@6.25.1';
import { SERVICE_CATEGORIES } from '../constants.tsx';
import type { ServiceCategory } from '../types.ts';
import { StarIcon } from '../components/icons.tsx';

const ServiceDetailPage: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();
  const service: ServiceCategory | undefined = SERVICE_CATEGORIES.find(s => s.slug === serviceName);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [serviceName, service, navigate]);

  if (!service) {
    return <div className="text-center py-20">Service not found. Redirecting...</div>;
  }
  
  const renderStars = (rating: number) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
    );
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:space-x-12">
            <div className="lg:w-2/3">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="text-cyan-500 bg-cyan-100 p-4 rounded-lg">{React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-16 h-16" })}</div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{service.name}</h1>
                        <p className="text-lg text-gray-600 mt-2">{service.description}</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Details</h2>
                    <p className="text-gray-700 leading-relaxed">{service.details}</p>
                </div>
                
                <div className="mb-8">
                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
                     <div className="space-y-6">
                        {service.reviews.map((review, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-cyan-500">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                                    {renderStars(review.rating)}
                                </div>
                                <p className="text-gray-600 italic">"{review.comment}"</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="bg-cyan-50 p-8 rounded-lg shadow-lg sticky top-28">
                    <h2 className="text-2xl font-bold text-cyan-800 mb-4">Ready to book?</h2>
                    <p className="text-cyan-700 mb-6">Get a professional {service.name} at your doorstep. Fast, reliable, and affordable.</p>
                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                        Book Now
                    </button>
                    <Link to="/contact" className="mt-4 w-full text-center block bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
                        Contact Us for a Quote
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;