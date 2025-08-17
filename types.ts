
import type React from 'https://esm.sh/react@18.2.0';

export interface NavLink {
  name: string;
  path: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  reviews: { name: string; rating: number; comment: string }[];
}

export interface TeamMember {
  name:string;
  role: string;
  image: string;
  bio: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
}

export interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}