export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "hidden-hampi",
    title: "Hampi: India's Forgotten Empire",
    excerpt: "Walk through 14th-century ruins where boulders meet ancient temples.",
    image: "https://images.unsplash.com/photo-1599661047819-0adfaa5c6b8a?w=800&q=80",
    author: "Priya Sharma",
    category: "Hidden Gems",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "northeast-magic",
    title: "Northeast India: The Final Frontier",
    excerpt: "Misty mountains, tribal cultures, and bridges grown from living roots.",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
    author: "Arjun Mehta",
    category: "Destination Stories",
    readTime: "12 min",
    featured: true,
  },
  {
    id: "street-food-delhi",
    title: "Delhi Street Food Odyssey",
    excerpt: "From Chandni Chowk parathas to secret kebab alleys of Old Delhi.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    author: "Chef Ravi Kapoor",
    category: "Food Trails",
    readTime: "6 min",
  },
  {
    id: "ayodhya-dawn",
    title: "Dawn at Ram Mandir, Ayodhya",
    excerpt: "A spiritual journey to India's newest architectural marvel.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    author: "Ananya Reddy",
    category: "Spiritual",
    readTime: "10 min",
  },
  {
    id: "wildlife-assam",
    title: "Rhino Country: Kaziranga Chronicles",
    excerpt: "Safari diaries from the heart of Assam's UNESCO wonderland.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    author: "Wildlife Lens India",
    category: "Wildlife",
    readTime: "7 min",
  },
  {
    id: "kerala-reel",
    title: "Backwaters in 60 Seconds",
    excerpt: "Cinematic reel capturing Kerala's liquid emerald paradise.",
    image: "https://images.unsplash.com/photo-1602216057658-fb9b03d31fbe?w=800&q=80",
    author: "Travel Reels Co.",
    category: "Travel Reels",
    readTime: "1 min",
  },
];
