export interface Room {
  id: string;
  title: string;
  description: string;
  capacity: number;
  price: string;
  image: string;
  features: string[];
}

export const ROOMS: Room[] = [
  {
    id: 'standard',
    title: 'En-suite Guest Room',
    description: 'Modern and comfortable en-suite rooms designed for the discerning traveler.',
    capacity: 2,
    price: 'From R850',
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg',
    features: ['Air conditioning', 'TV (MultiChoice)', 'Bar fridge', 'Tea & coffee', 'Wi-Fi']
  },
  {
    id: 'self-catering',
    title: 'Self-Catering Unit',
    description: 'Perfect for longer stays, featuring a fully equipped kitchenette.',
    capacity: 2,
    price: 'From R1,100',
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg',
    features: ['Kitchenette', 'Air conditioning', 'TV (MultiChoice)', 'Bar fridge', 'Tea & coffee', 'Wi-Fi']
  },
  {
    id: 'family',
    title: 'Family Unit',
    description: 'Spacious accommodation for the whole family with multiple sleeping areas.',
    capacity: 4,
    price: 'From R1,600',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000',
    features: ['Spacious layout', 'Air conditioning', 'TV (MultiChoice)', 'Bar fridge', 'Tea & coffee', 'Wi-Fi']
  }
];

export const FACILITIES = [
  { name: 'Conference Facilities', icon: 'Users', description: 'Up to 30 people' },
  { name: 'Catering Services', icon: 'Utensils', description: 'Delicious local meals' },
  { name: 'Dining Room', icon: 'Coffee', description: 'Warm and friendly' },
  { name: 'Swimming Pool', icon: 'Waves', description: 'Refreshing outdoor pool' },
  { name: 'Braai Area', icon: 'Flame', description: 'Traditional South African BBQ' },
  { name: 'Secure Parking', icon: 'ShieldCheck', description: 'Electric fence & 24/7 security' },
  { name: 'Garden Area', icon: 'Trees', description: 'Peaceful relaxation' },
  { name: 'Laundry Service', icon: 'Shirt', description: 'On request' },
  { name: 'Card Payments', icon: 'CreditCard', description: 'All major cards accepted' },
  { name: 'Entertainment', icon: 'Gamepad2', description: 'Pool table & Dartboard' }
];

export const ATTRACTIONS = [
  {
    title: 'Anglo-Boer War Museums',
    description: 'Discover the rich history of Mahikeng through historical sites and museums.',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Mafikeng Game Reserve',
    description: 'Experience the wild with a variety of wildlife species in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1547471080-7cb2ac6470b9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Mmabatho Palms Casino',
    description: 'Enjoy world-class entertainment, gaming, and dining at this premier resort.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  }
];
