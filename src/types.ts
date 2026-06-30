export interface Project {
  id: string;
  name: string;
  location: string;
  sublocation: string;
  priceStart: string; // e.g., "₹45 Lakhs"
  priceValue: number; // For calculations, e.g., 4500000
  pricePerSqft: number; // e.g., 3750
  sqftRange: string; // e.g., "1,200 - 2,400 sq.ft."
  totalPlottedArea: string; // e.g., "15 Acres"
  totalUnits: number;
  reraNumber: string;
  status: 'Ready to Construct' | 'Under Development' | 'Pre-Launch';
  image: string;
  description: string;
  highlights: string[];
  amenities: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Corresponds to lucide-react icon
  longDescription: string;
  features: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'Infrastructure' | 'Clubhouse & Leisure' | 'Sports & Health' | 'Security & Green';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  project: string;
  avatar: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectInterest: string;
  message: string;
  date: string;
}
