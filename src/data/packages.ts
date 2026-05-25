export type TourPackage = {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  inclusions: string[];
};

export const tourPackages: TourPackage[] = [
  {
    id: "luxury-golden",
    title: "Golden Triangle Luxury",
    category: "Luxury India Tours",
    duration: "7 Days",
    price: "₹1,85,000",
    image: "https://images.unsplash.com/photo-1524492412937-280b9d999ca8?w=800&q=80",
    highlights: ["Taj Mahal at sunrise", "Private palace dining", "Heritage train"],
    inclusions: ["5-star hotels", "Private guide", "All transfers"],
  },
  {
    id: "char-dham",
    title: "Char Dham Spiritual Circuit",
    category: "Spiritual Circuits",
    duration: "12 Days",
    price: "₹68,000",
    image: "https://images.unsplash.com/photo-1548013146-7249fcec24c7?w=800&q=80",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    inclusions: ["Helicopter options", "Puja arrangements", "Comfort stays"],
  },
  {
    id: "tiger-trail",
    title: "Tiger Trail Safari",
    category: "Wildlife Expeditions",
    duration: "6 Days",
    price: "₹52,000",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    highlights: ["Ranthambore", "Bandhavgarh", "Expert naturalist"],
    inclusions: ["Safari drives", "Jungle lodge", "Meals"],
  },
  {
    id: "ladakh-adventure",
    title: "Ladakh Adventure Expedition",
    category: "Adventure Tours",
    duration: "10 Days",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    highlights: ["Pangong Lake", "Khardung La", "Monastery trek"],
    inclusions: ["Bike rental", "Camping", "Permits"],
  },
  {
    id: "kashmir-honeymoon",
    title: "Kashmir Honeymoon Bliss",
    category: "Honeymoon Packages",
    duration: "5 Days",
    price: "₹72,000",
    image: "https://images.unsplash.com/photo-1595815779235-9bc4f9c0a0e0?w=800&q=80",
    highlights: ["Shikara ride", "Gulmarg gondola", "Private dinners"],
    inclusions: ["Houseboat", "Couple spa", "Photography"],
  },
  {
    id: "northeast-explorer",
    title: "Northeast Explorer",
    category: "Northeast Exploration",
    duration: "9 Days",
    price: "₹58,000",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
    highlights: ["Living root bridges", "Dzukou Valley", "Tribal culture"],
    inclusions: ["Local guides", "Homestays", "Permits"],
  },
  {
    id: "food-trail",
    title: "Royal Rajasthan Food Trail",
    category: "Food Trails",
    duration: "4 Days",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    highlights: ["Royal kitchens", "Street food tours", "Cooking class"],
    inclusions: ["Chef guide", "All tastings", "Recipe book"],
  },
  {
    id: "eco-kerala",
    title: "Eco Kerala Retreat",
    category: "Eco-Tourism Journeys",
    duration: "6 Days",
    price: "₹38,000",
    image: "https://images.unsplash.com/photo-1602216057658-fb9b03d31fbe?w=800&q=80",
    highlights: ["Organic farms", "Bird sanctuary", "Sustainable stays"],
    inclusions: ["Eco lodges", "Nature walks", "Community visits"],
  },
];

export const packageCategories = [
  "Luxury India Tours",
  "Spiritual Circuits",
  "Wildlife Expeditions",
  "Adventure Tours",
  "Honeymoon Packages",
  "Northeast Exploration",
  "Food Trails",
  "Eco-Tourism Journeys",
];
