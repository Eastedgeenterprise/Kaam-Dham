
import React from 'https://esm.sh/react@18.2.0';
import type { TeamMember } from '../types.ts';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
      <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-cyan-500 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;