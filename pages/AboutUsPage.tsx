
import React from 'https://esm.sh/react@18.2.0';
import { TEAM_MEMBERS, PARTNERS } from '../constants.tsx';
import TeamMemberCard from '../components/TeamMemberCard.tsx';
import type { Partner } from '../types.ts';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About Kaam Dhaam</h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Kaam Dhaam was founded with a simple mission: to make it incredibly easy for people to find trusted and skilled service professionals for any task. We believe in quality, reliability, and building a community of satisfied customers and empowered providers.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform leverages technology to connect you with the best local experts, ensuring every job is done right. From small repairs to major projects, we are your partners in getting things done.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map(member => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Valued Partners</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {PARTNERS.map((partner: Partner) => (
              <div key={partner.name} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img src={partner.logo} alt={partner.name} className="h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;