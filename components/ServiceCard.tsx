
import React from 'https://esm.sh/react@18.2.0';
import type { ServiceCategory } from '../types.ts';

interface ServiceCardProps {
  service: ServiceCategory;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center transform hover:-translate-y-2">
      {service.icon}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;