
import React from 'https://esm.sh/react@18.2.0';
import type { NavLink, ServiceCategory, TeamMember, Partner, SocialLink, Feature } from './types.ts';
import { 
    PlumbingIcon, 
    ElectricalIcon, 
    CarpenterIcon, 
    PainterIcon,
    GenericServiceIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    WhatsAppIcon,
    CheckCircleIcon,
    LocalProviderIcon,
    SecurePaymentIcon
} from './components/icons.tsx';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const genericDetails = "Our experienced and certified professionals are equipped to handle any job, big or small. We guarantee high-quality workmanship, timely service, and transparent pricing. Customer satisfaction is our top priority, and we strive to exceed your expectations with every service call.";
const genericReviews = [
    { name: 'Ali Khan', rating: 5, comment: 'Excellent and professional service. Highly recommended!' },
    { name: 'Fatima Ahmed', rating: 4, comment: 'Good work, but was a bit late. Overall satisfied.' },
    { name: 'Zainab Bibi', rating: 5, comment: 'Very quick and efficient. Solved my problem in minutes.' },
];

const serviceNames = [
    "Plumbing", "Electrical", "Engineering", "Chef", "Mechanic", "Builder", "Painter", "Carpenter", 
    "HVAC Repair", "Appliance Repair", "Landscaping", "Pest Control", "Home Cleaning", "Roofing",
    "Flooring", "Welding", "Car Detailing", "Mobile Repair", "Computer Repair", "Graphic Design",
    "Web Development", "Content Writing", "Tutoring", "Personal Training", "Event Planning",
    "Photography", "Videography", "DJ Services", "Catering", "Security Services", "Locksmith",
    "Moving Services", "Junk Removal", "Interior Design", "Architecture", "Legal Services",
    "Accounting", "Financial Advisor", "Insurance Agent", "Real Estate Agent"
];

const icons = [
    <PlumbingIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <ElectricalIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <GenericServiceIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <GenericServiceIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <GenericServiceIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <GenericServiceIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <PainterIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    <CarpenterIcon className="w-12 h-12 mb-4 text-cyan-500" />,
];

export const SERVICE_CATEGORIES: ServiceCategory[] = serviceNames.map((name, index) => ({
    name: name,
    slug: name.toLowerCase().replace(/ /g, '-'),
    icon: icons[index] || <GenericServiceIcon className="w-12 h-12 mb-4 text-cyan-500" />,
    description: `Professional ${name.toLowerCase()} services for your home and business.`,
    details: genericDetails,
    reviews: genericReviews,
}));

export const FEATURES: Feature[] = [
    {
        icon: <CheckCircleIcon className="w-12 h-12 text-cyan-500" />,
        title: "Wide Range of Services",
        description: "From home repairs to professional services, find experts for every task you can imagine."
    },
    {
        icon: <LocalProviderIcon className="w-12 h-12 text-cyan-500" />,
        title: "Trusted Local Providers",
        description: "We connect you with vetted, reviewed, and reliable service providers in your local area."
    },
    {
        icon: <SecurePaymentIcon className="w-12 h-12 text-cyan-500" />,
        title: "Secure & Easy Payments",
        description: "Pay for services securely through our platform with complete peace of mind."
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Ahmed Raza', role: 'Founder & CEO', image: 'https://picsum.photos/400/400?random=1', bio: 'Visionary leader with a passion for connecting people with reliable services.' },
    { name: 'Sana Javed', role: 'Chief Technology Officer', image: 'https://picsum.photos/400/400?random=2', bio: 'Expert in building scalable and user-friendly technology platforms.' },
    { name: 'Bilal Malik', role: 'Head of Operations', image: 'https://picsum.photos/400/400?random=3', bio: 'Ensuring a seamless and high-quality service experience for all our users.' },
    { name: 'Ayesha Khan', role: 'Marketing Director', image: 'https://picsum.photos/400/400?random=4', bio: 'Spreading the word about Kaam Dhaam and building a strong community.' },
];

export const PARTNERS: Partner[] = [
    { name: 'BuildCo', logo: 'https://picsum.photos/200/100?grayscale&random=5' },
    { name: 'Tech Solutions', logo: 'https://picsum.photos/200/100?grayscale&random=6' },
    { name: 'SecurePay', logo: 'https://picsum.photos/200/100?grayscale&random=7' },
    { name: 'HomeCare Inc.', logo: 'https://picsum.photos/200/100?grayscale&random=8' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Facebook', icon: <FacebookIcon className="w-6 h-6" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <InstagramIcon className="w-6 h-6" />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <LinkedInIcon className="w-6 h-6" />, url: 'https://linkedin.com' },
];