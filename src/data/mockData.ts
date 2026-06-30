import { Project, Service, Amenity, Testimonial } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'futura-meadows',
    name: 'Futura Meadows',
    location: 'Off Sarjapur Road',
    sublocation: 'Near Chikka Tirupathi, East Bangalore',
    priceStart: '₹42 Lakhs',
    priceValue: 4200000,
    pricePerSqft: 3500,
    sqftRange: '1,200 - 2,400 sq.ft.',
    totalPlottedArea: '15 Acres',
    totalUnits: 245,
    reraNumber: 'PRM/KA/RERA/1251/446/PR/220311/004752',
    status: 'Ready to Construct',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80',
    description: 'A grand 15-acre gated community development situated in the high-growth corridor off Sarjapur Road. Futura Meadows offers premium residential plots designed with vast open spaces, wide concrete roads, and world-class leisure amenities. Perfectly positioned for families seeking peaceful suburban living with fast access to tech parks.',
    highlights: [
      'Approved by BMRDA / Local Planning Authority',
      '100% Vasthu Compliant Villa Plots',
      'Underground Electricity and LED Streetlights',
      'Avenue Plantation with Landscaped Floral Gardens',
      'Immediate Registration & Bank Loan Approved'
    ],
    amenities: [
      'Clubhouse',
      'Swimming Pool',
      'Gymnasium',
      'Kids Play Area',
      'Jogging Track',
      '24/7 Security',
      'Badminton Court',
      'Underground Drainage'
    ]
  },
  {
    id: 'futura-springs',
    name: 'Futura Springs',
    location: 'North Bangalore Corridor',
    sublocation: 'Near Devanahalli (KIADB Aerospace Park), Bangalore North',
    priceStart: '₹58 Lakhs',
    priceValue: 5800000,
    pricePerSqft: 4800,
    sqftRange: '1,500 - 3,000 sq.ft.',
    totalPlottedArea: '18 Acres',
    totalUnits: 180,
    reraNumber: 'PRM/KA/RERA/1250/303/PR/230124/005662',
    status: 'Under Development',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'An elite, eco-conscious gated community layout situated in Bangalore\'s booming North corridor near the KIADB Aerospace Hub. Designed around naturally occurring water tables and serene gardens, Futura Springs offers a lifestyle surrounded by nature. With high-end specs, security layers, and an integrated country-style clubhouse, it represents a premium investment.',
    highlights: [
      'Approved by STRR / DTCP with Clear Titles',
      'Eco-friendly Design with Rainwater Harvesting',
      'Grand Entrance Arch with Multi-tiered Security Gate',
      'High-Speed Fiber Connectivity to Every Plot',
      'Just 20 Mins Drive from Kempegowda International Airport'
    ],
    amenities: [
      'Grand Clubhouse',
      'Multipurpose Hall',
      'Yoga & Meditation Lawn',
      'Rainwater Harvesting',
      'Mini Golf Putting Green',
      'CCTV Surveillance',
      'Senior Citizen Park',
      'Water Treatment Plant'
    ]
  },
  {
    id: 'futura-pride',
    name: 'Futura Pride',
    location: 'Whitefield Extension',
    sublocation: 'Near Soukya Road, East Bangalore',
    priceStart: '₹36 Lakhs',
    priceValue: 3600000,
    pricePerSqft: 3000,
    sqftRange: '1,200 - 2,000 sq.ft.',
    totalPlottedArea: '10 Acres',
    totalUnits: 165,
    reraNumber: 'PRM/KA/RERA/1251/446/PR/231109/006412',
    status: 'Pre-Launch',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    description: 'An exquisite collection of affordable luxury villa plots located in the Whitefield Extension corridor. Designed for modern tech professionals, Futura Pride delivers maximum capital appreciation potential with immediate proximity to major industrial centers, schools, and hospitals. Reconnect with a sophisticated urban lifestyle.',
    highlights: [
      'Aggressive Pre-Launch Pricing Benefits',
      'Excellent Connectivity via Outer Ring Road & Proposed Metro',
      'Compact & Efficient Layout Planning',
      'Underground Sewage Treatment Plant (STP)',
      '10-Year Maintenance Guarantee by Futura Groups'
    ],
    amenities: [
      'Clubhouse',
      'Outdoor Sports Court',
      'Amphitheatre',
      'Pet Park',
      'Bicycle Track',
      '24/7 Security',
      'STP & Drainage',
      'Solar Street Lighting'
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'plot-development',
    title: 'Gated Plot Development',
    description: 'We acquire prime parcels of land in high-growth corridors, conceptualize layout plans, secure multi-agency approvals, and implement infrastructure of the highest standard.',
    iconName: 'Map',
    longDescription: 'At Futura Groups, plot development is an art. We handpick locations in Bangalore\'s fastest-growing real estate corridors, ensuring that our clients enjoy both high lifestyle value and maximum investment growth. Every layout goes through rigorous legal vetting and multi-level planning, resulting in fully cleared, premium gated communities with modern concrete roads, underground utility pipelines, and extensive green tree cover.',
    features: [
      '100% Vaastu-compliant layouts',
      'Wide concrete roads (40 ft & 30 ft roads)',
      'Individual water, electricity, and sanitary connections to each plot',
      'RERA approved & clear marketable titles',
      'Lush landscaped parks with indigenous trees and scenic avenues'
    ]
  },
  {
    id: 'bespoke-construction',
    title: 'Custom Villa Construction',
    description: 'Found your perfect plot? We offer comprehensive, end-to-end design and building services, translating your bespoke architectural sketches into high-quality luxury villas.',
    iconName: 'Home',
    longDescription: 'Turn your blank canvas into a grand architectural masterpiece. Our in-house design, engineering, and construction teams collaborate with you to craft bespoke villas that express your lifestyle. We manage everything—from soil testing and architectural floor plans to raw materials sourcing, civil foundation, electrical/plumbing installations, and structural finishes—with absolute transparency.',
    features: [
      'Premium turnkey construction from foundation to handover',
      'Architectural customization matching your specific style and budget',
      'Transparent material specifications & strict quality monitoring',
      'Regular photo/video progress updates via dedicated app',
      'A structural warranty of up to 10 years on concrete works'
    ]
  },
  {
    id: 'property-consulting',
    title: 'Consulting & Legal Advisory',
    description: 'Real estate transactions require precision. We offer elite advisory services, assisting with comprehensive title checking, bank loan approvals, and seamless plot registrations.',
    iconName: 'FileCheck',
    longDescription: 'We clear the confusion of property purchasing. Our legal experts and expert property consultants ensure that every transaction you enter with Futura Groups is safe, simple, and fully transparent. We coordinate with elite banks to fast-track home and plot loan approvals, guide you through the stamp duty and registration processes, and verify clear lineage for all land parcels.',
    features: [
      'Elite legal vetting of clear, non-agricultural land titles',
      'Strategic tie-ups with leading national banks (SBI, HDFC, ICICI)',
      'Hassle-free document preparation, stamp duty calculation, and registration',
      'Transparent documentation with zero hidden or surprise charges',
      'Bespoke investment guidance on land appreciation corridors'
    ]
  },
  {
    id: 'interior-designing',
    title: 'Bespoke Interior Styling',
    description: 'Elevate your interiors with specialized design and cabinetry, including tailored modular kitchens, custom wardrobes, and sophisticated ambient lighting.',
    iconName: 'Palette',
    longDescription: 'Your dream home deserves an interior that exudes class. Futura Groups has a designated design bureau specializing in contemporary modular furniture and warm, premium aesthetics. From space-efficient wardrobe fittings and elegant TV backdrops to premium modular kitchen cabinetry with smart drawers, we curate the perfect color, light, and material theme for you.',
    features: [
      '3D photo-realistic renders and virtual Walkthroughs',
      'High-grade water-resistant plywood and German brand hardware',
      'Ergonomic modular kitchen design with smart pull-out baskets',
      'Exquisite false ceiling designs with ambient LED illumination',
      'Tailor-made wardrobes with soft-close sliders and organizers'
    ]
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'clubhouse',
    name: 'State-of-the-Art Clubhouse',
    description: 'A luxurious community hub equipped with a private gym, multipurpose celebration hall, card tables, and indoor recreation zones.',
    iconName: 'Building',
    category: 'Clubhouse & Leisure'
  },
  {
    id: 'underground',
    name: 'Underground Utilities',
    description: 'No messy overhead wires. All electricity, high-speed fiber internet, and sewage pipelines are safely routed underground.',
    iconName: 'Cable',
    category: 'Infrastructure'
  },
  {
    id: 'security',
    name: 'Multi-Tiered Security',
    description: 'Boom-barrier entry gates, round-the-clock security guards, and continuous CCTV feed covering all main intersections.',
    iconName: 'ShieldAlert',
    category: 'Security & Green'
  },
  {
    id: 'parks',
    name: 'Landscaped Theme Parks',
    description: 'Beautifully manicured botanical parks, floral gardens, senior citizen seating alcoves, and shaded sit-outs.',
    iconName: 'TreePine',
    category: 'Security & Green'
  },
  {
    id: 'sports',
    name: 'Outdoor Sports Courts',
    description: 'Enjoy active evenings on concrete half-basket courts, professional badminton spaces, and custom cricket pitches.',
    iconName: 'Dribbble',
    category: 'Sports & Health'
  },
  {
    id: 'roads',
    name: 'Broad Concrete Roads',
    description: 'Premium asphalt and concrete roads (40 feet and 30 feet wide) with concrete stormwater drains on both sides.',
    iconName: 'Milestone',
    category: 'Infrastructure'
  },
  {
    id: 'playarea',
    name: 'Children\'s Play Area',
    description: 'Safe outdoor sand-pit area equipped with climbing frames, slides, high swings, and rubberized safety flooring.',
    iconName: 'Smile',
    category: 'Clubhouse & Leisure'
  },
  {
    id: 'water',
    name: 'Individual Water Pipeline',
    description: 'Connected directly to an overhead water storage reservoir, supplying abundant treated water to each plot boundary.',
    iconName: 'Droplet',
    category: 'Infrastructure'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rohan Deshmukh',
    role: 'Principal Software Architect at Oracle',
    feedback: 'I had been hunting for a clean, RERA-approved plot in East Bangalore for months. Futura Groups made the entire process so transparent. I purchased a 1,200 sq.ft. plot in Futura Meadows. The quality of development—from the concrete roads to the underground cabling—is absolutely top-notch. Highly recommend!',
    rating: 5,
    project: 'Futura Meadows',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Priya Sundaram',
    role: 'Vice President of HR, Global FinTech',
    feedback: 'Buying real estate in Bangalore can be intimidating, but the consulting and legal team at Futura Groups assisted with every single detail. They handled the legal vetting, title deeds, and coordinated with SBI for a smooth loan approval. I bought in Futura Springs, and it\'s the best decision I\'ve made.',
    rating: 5,
    project: 'Futura Springs',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Lt. Col. Vinod Nair (Retd.)',
    role: 'Indian Army Veteran',
    feedback: 'What impresses me about Futura Groups is their adherence to promises. I was promised that the layout would have underground wiring and clear demarcations by mid-year, and they delivered exactly on schedule. The customer service team is very responsive and answers all questions with clear facts.',
    rating: 5,
    project: 'Futura Meadows',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-4',
    name: 'Dr. Ananya Rao',
    role: 'Senior Consultant, Sakra World Hospital',
    feedback: 'I bought a plot in Futura Pride and hired their turnkey construction team to build my custom 4-BHK villa. The engineering quality is superior. They used standard, branded materials and kept me updated with pictures twice a week. The finishing, painting, and interior woodwork exceeded my expectations!',
    rating: 5,
    project: 'Futura Pride',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
