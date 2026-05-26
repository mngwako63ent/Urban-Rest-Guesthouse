export interface Room {
  id: string;
  title: string;
  description: string;
  capacity: number;
  price: string;
  image: string;
  images: string[];
  features: string[];
}

export const ROOMS: Room[] = [
  {
    id: 'standard',
    title: 'En-suite Guest Room',
    description: 'Modern and comfortable en-suite rooms designed for the discerning traveler. Features a plush queen-sized bed, crisp linens, and air conditioning for ultimate comfort. Unwind after a long day with our high-speed Wi-Fi and smart TV, or grab a refreshing drink from the well-stocked bar fridge.',
    capacity: 2,
    price: 'From R850',
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg',
    images: [
      'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610433/012-308_fopbhj.jpg',
      'https://www.ratanangbb.co.za/gallery/002-2827.JPG',
      'https://www.ratanangbb.co.za/gallery/006-3496.JPG',
      'https://www.ratanangbb.co.za/gallery/016-1141.JPG'
    ],
    features: ['Queen size bed', 'Air conditioning', 'Smart TV (MultiChoice)', 'Bar fridge', 'Tea & coffee station', 'Free high-speed Wi-Fi', 'En-suite bathroom', 'Desk workspace']
  },
  {
    id: 'self-catering',
    title: 'Self-Catering Unit',
    description: 'Perfect for longer stays, featuring a fully equipped kitchenette. A beautiful open-plan space offering both comfort and practicality. Ideal for business travelers or couples looking for a bit more autonomy.',
    capacity: 2,
    price: 'From R1,100',
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg',
    images: [
        'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg',
        'https://www.ratanangbb.co.za/gallery/008-4580.JPG',
        'https://www.ratanangbb.co.za/gallery/015-2488.JPG',
        'https://www.ratanangbb.co.za/gallery/004-1874.JPG'
    ],
    features: ['Fully equipped kitchenette', 'Microwave oven', 'Air conditioning', 'Smart TV (MultiChoice)', 'Dining area', 'Tea & coffee station', 'Free Wi-Fi', 'Private entrance']
  },
  {
    id: 'family',
    title: 'Family Suite',
    description: 'Spacious accommodation designed for the whole family, featuring multiple sleeping areas, a comfortable lounge space, and easy access to our outdoor areas perfect for giving you space to breathe.',
    capacity: 4,
    price: 'From R1,600',
    image: 'https://www.ratanangbb.co.za/gallery/001new-1797.JPG',
    images: [
        'https://www.ratanangbb.co.za/gallery/001new-1797.JPG',
        'https://www.ratanangbb.co.za/gallery/004-1874.JPG',
        'https://www.ratanangbb.co.za/gallery/015-2488.JPG'
    ],
    features: ['Two bedrooms', 'Lounge area', 'Spacious layout', 'Air conditioning', 'Twin Smart TVs', 'Large fridge', 'Tea & coffee', 'Free Wi-Fi']
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
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774612031/sushuti-bali-2975787_1_hnrswl.jpg'
  },
  {
    title: 'Mafikeng Game Reserve',
    description: 'Experience the wild with a variety of wildlife species in their natural habitat.',
    image: 'https://www.ratanangbb.co.za/gallery/015-2488.JPG'
  },
  {
    title: 'Mmabatho Palms Casino',
    description: 'Enjoy world-class entertainment, gaming, and dining at this premier resort.',
    image: 'https://res.cloudinary.com/dm7sxhaeb/image/upload/v1774610492/005-4470_idw6os.jpg'
  }
];
