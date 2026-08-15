/**
 * Jaya Restaurant (జయ రెస్టారెంట్) - Menu Database
 * Authentic South Indian Vegetarian Cuisine in Kakinada
 * Note: Prices are marked with standard inquiry placeholders ('₹—') 
 * until the official updated restaurant tariff is uploaded.
 */

const MENU_DATA = [
  // --- TIFFINS ---
  {
    id: "tif-1",
    name: "Masala Dosa",
    teluguName: "మసాలా దోశ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Crispy golden crepe made from fermented rice and lentil batter, filled with authentic spiced potato and onion masala, served with traditional coconut chutney, tomato chutney, and piping hot sambar.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Customer Favourite",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan-Option"]
  },
  {
    id: "tif-2",
    name: "Steamed Idli (2 Pcs)",
    teluguName: "ఇడ్లీ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Melt-in-mouth fluffy steamed rice & urad dal cakes, served fresh with authentic coastal Andhra spiced sambar and freshly ground coconut & ginger chutneys.",
    price: "₹—",
    isPopular: true,
    isSpecial: false,
    tag: "Breakfast Classic",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Gluten-Free", "Vegan"]
  },
  {
    id: "tif-3",
    name: "Medu Vada (2 Pcs)",
    teluguName: "గారె / మెదు వడ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Golden crispy fried lentil fritters seasoned with fresh curry leaves, crushed black pepper, and ginger, served with coconut chutney and tangy sambar.",
    price: "₹—",
    isPopular: true,
    isSpecial: false,
    tag: "Crispy & Fresh",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "tif-4",
    name: "Plain Roast Dosa",
    teluguName: "ప్లెయిన్ రోస్ట్ దోశ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Paper-thin, ultra-crispy golden roasted dosa prepared with pure vegetarian ghee/oil, paired with assorted signature chutneys and rich lentil sambar.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "South Indian Classic",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan-Option"]
  },
  {
    id: "tif-5",
    name: "Ghee Karam Dosa",
    teluguName: "నెయ్యి కారం దోశ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Spiced red chilli garlic paste smeared over a crisp hot dosa generously drizzled with aromatic pure melted ghee.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Andhra Special",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"]
  },
  {
    id: "tif-6",
    name: "Puri Bhaji / Poori Kurma",
    teluguName: "పూరీ కూర్మ",
    category: "tiffins",
    categoryLabel: "Tiffins",
    description: "Puffed golden wheat pooris served with lightly spiced homestyle potato curry and fresh onion salad.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "All-Time Favourite",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"]
  },

  // --- MEALS & THALIS ---
  {
    id: "thali-1",
    name: "Grand South Indian Thali",
    teluguName: "సౌత్ ఇండియన్ వెజ్ థాలి",
    category: "meals",
    categoryLabel: "Meals & Thalis",
    description: "Kakinada's beloved feast featuring steamed rice, ghee, podi, vegetable curry, kootu, traditional sambar, rasam, curd, appalam (papad), pickle, and traditional sweet payasam.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Signature Dish",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Traditional"]
  },
  {
    id: "thali-2",
    name: "Special Andhra Vegetarian Meals",
    teluguName: "స్పెషల్ ఆంధ్ర వెజిటేరియన్ మీల్స్",
    category: "meals",
    categoryLabel: "Meals & Thalis",
    description: "Wholesome authentic Andhra style lunch spread with aromatic Gongura / Avakaya pachadi, perugu, dal, seasonal veg vepudu, and crispy accompaniments.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Authentic Andhra",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Traditional"]
  },
  {
    id: "thali-3",
    name: "Executive Mini Thali",
    teluguName: "ఎగ్జిక్యూటివ్ మిని థాలి",
    category: "meals",
    categoryLabel: "Meals & Thalis",
    description: "A balanced quick-lunch thali with flavoured rice, chapati/poori, daily vegetable gravy, dal tadka, curd, and papad.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "Quick Lunch",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"]
  },

  // --- RICE & MAIN COURSE ---
  {
    id: "rice-1",
    name: "Vegetable Dum Biryani",
    teluguName: "వెజిటబుల్ దమ్ బిర్యానీ",
    category: "rice",
    categoryLabel: "Rice & Mains",
    description: "Fragrant long-grain basmati rice slow-cooked with fresh garden vegetables, whole spices, saffron, and herbs, served with rich salan and cooling raita.",
    price: "₹—",
    isPopular: true,
    isSpecial: false,
    tag: "Aromatic & Flavourful",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian"]
  },
  {
    id: "rice-2",
    name: "Veg Fried Rice",
    teluguName: "వెజ్ ఫ్రైడ్ రైస్",
    category: "rice",
    categoryLabel: "Rice & Mains",
    description: "Wok-tossed aromatic rice with finely chopped carrots, beans, cabbage, bell peppers, and mild soy-seasoning.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "Indo-Chinese Special",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "rice-3",
    name: "Curd Rice (Bagala Bath)",
    teluguName: "పెరుగన్నం / దద్దోజనం",
    category: "rice",
    categoryLabel: "Rice & Mains",
    description: "Soothing soft rice mixed with thick fresh curd, tempered with mustard seeds, curry leaves, green chillies, ginger, and garnished with pomegranate seeds.",
    price: "₹—",
    isPopular: true,
    isSpecial: false,
    tag: "Comfort Classic",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "rice-4",
    name: "Sambar Rice (Bisibelebath Style)",
    teluguName: "సాంబార్ రైస్",
    category: "rice",
    categoryLabel: "Rice & Mains",
    description: "Wholesome rice and lentils slow-cooked with drumsticks, shallots, carrots, tamarind, and freshly ground spice blend, finished with pure ghee.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "Traditional Comfort",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Gluten-Free"]
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Signature Fresh Grape Juice",
    teluguName: "గ్రేప్ జ్యూస్",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "Jaya Restaurant's famous signature chilled grape juice, freshly pressed and sweetened to perfection. Loved by diners across Kakinada as the ultimate meal finisher.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Customer Legend",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan", "Refreshing"]
  },
  {
    id: "bev-2",
    name: "Traditional South Indian Filter Coffee",
    teluguName: "ఫిల్టర్ కాఫీ",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "Freshly decocted chicory-infused South Indian coffee blended with steaming thick frothed milk, served in a traditional dabarah & tumbler.",
    price: "₹—",
    isPopular: true,
    isSpecial: true,
    tag: "Aromatic Brew",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Hot Beverage"]
  },
  {
    id: "bev-3",
    name: "Fresh Sweet Lime (Mosambi) Juice",
    teluguName: "మోసంబి జ్యూస్",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "100% natural, freshly squeezed sweet lime juice served chilled with a hint of rock salt and mint.",
    price: "₹—",
    isPopular: false,
    isSpecial: false,
    tag: "Fresh Squeezed",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "bev-4",
    name: "Spiced Buttermilk (Chaas / Majjiga)",
    teluguName: "మజ్జిగ",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "Cooling traditional churned buttermilk infused with fresh ginger, green chillies, coriander, and curry leaves.",
    price: "₹—",
    isPopular: true,
    isSpecial: false,
    tag: "Digestive & Cooling",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    dietary: ["Vegetarian", "Gluten-Free"]
  }
];

// Gallery items database with categorization
const GALLERY_DATA = [
  {
    id: 1,
    category: "thali",
    categoryLabel: "Thali & Meals",
    title: "Grand South Indian Thali",
    caption: "A sumptuous array of traditional curries, sambar, rasam, and sweets on a banana leaf.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 2,
    category: "food",
    categoryLabel: "Tiffins",
    title: "Crisp Golden Masala Dosa",
    caption: "Freshly roasted dosa with spiced potato filling, paired with fresh chutneys and sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 3,
    category: "drinks",
    categoryLabel: "Drinks",
    title: "Famous Chilled Grape Juice",
    caption: "The signature Jaya Restaurant refresher frequently celebrated in diner reviews.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 4,
    category: "food",
    categoryLabel: "Tiffins",
    title: "Steaming Soft Idli & Medu Vada",
    caption: "Soft fluffy idlis and crunchy vada served with authentic coastal Andhra chutneys.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 5,
    category: "drinks",
    categoryLabel: "Drinks",
    title: "Aromatic Filter Coffee",
    caption: "Freshly brewed South Indian filter coffee in traditional dabarah tumbler.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 6,
    category: "ambience",
    categoryLabel: "Ambience",
    title: "Comfortable Family Dining",
    caption: "Warm, peaceful dining room inside Hotel Jaya Residency in Surya Rao Peta, Kakinada.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 7,
    category: "thali",
    categoryLabel: "Thali & Meals",
    title: "Andhra Special Vegetarian Spread",
    caption: "Pure vegetarian delicacies prepared with regional spices and time-tested recipes.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 8,
    category: "restaurant",
    categoryLabel: "Restaurant",
    title: "Hotel Jaya Residency Location",
    caption: "Centrally located on Vallabhai Street, Surya Rao Peta, Kakinada.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
  }
];

// Authentic review testimonials (derived strictly from real customer feedback in prompt)
const REVIEWS_DATA = [
  {
    id: 1,
    author: "Verified Local Diner",
    source: "Google Reviews",
    rating: 5,
    date: "Recent Visit",
    comment: "One of the best Thalis in Kakinada… tasty and authentic. The service was prompt and the vegetarian spread was thoroughly enjoyable for our entire family.",
    badge: "Thali Enthusiast"
  },
  {
    id: 2,
    author: "Kakinada Resident",
    source: "Google Reviews",
    rating: 5,
    date: "Local Guide",
    comment: "One of the finest well known Veg Restaurants in Kakinada. Consistency in South Indian flavours and comfortable dining experience inside Hotel Jaya Residency.",
    badge: "Pure Veg Dining"
  },
  {
    id: 3,
    author: "Family Dining Guest",
    source: "Google Reviews",
    rating: 4,
    date: "Dine-in",
    comment: "Good ambience and good for pure veg… Never forget to order their famous Grape Juice and Filter Coffee to complete your meal!",
    badge: "Family Diners"
  }
];
