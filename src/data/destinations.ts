export interface Attraction {
  id: string;
  slug: string;
  name: string;
  nameFa: string;
  category: string;
  description: string;
  descriptionFa: string;
  imageUrl: string;
  coordinates: { lat: number; lng: number };
  openingHours: string;
  ticketPrice: string;
  duration: string;
  rating: number;
  reviewCount: number;
  citySlug: string;
}

export interface Restaurant {
  id: string;
  name: string;
  nameFa: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  description: string;
  imageUrl: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  nameFa: string;
  description: string;
  descriptionFa: string;
  imageUrl: string;
  vibe: string;
}

export interface City {
  id: string;
  slug: string;
  countrySlug: string;
  name: string;
  nameFa: string;
  country: string;
  countryFa: string;
  tagline: string;
  taglineFa: string;
  description: string;
  descriptionFa: string;
  heroImage: string;
  galleryImages: string[];
  coordinates: { lat: number; lng: number };
  timezone: string;
  currency: string;
  language: string;
  bestTimeToVisit: string;
  bestTimeToVisitFa: string;
  weather: { summer: string; winter: string; spring: string };
  transportation: string;
  transportationFa: string;
  attractions: Attraction[];
  restaurants: Restaurant[];
  neighborhoods: Neighborhood[];
  travelTips: string[];
  travelTipsFa: string[];
  topCategories: string[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  nameFa: string;
  continent: string;
  description: string;
  descriptionFa: string;
  heroImage: string;
  capital: string;
  currency: string;
  language: string;
  coordinates: { lat: number; lng: number };
  cities: string[];
  bestTimeToVisit: string;
  popularFor: string[];
}

// ============================================================
// CITIES DATA — Every city has its own isolated data
// ============================================================

export const attractions: Record<string, Attraction> = {
  'eiffel-tower': {
    id: 'eiffel-tower',
    slug: 'eiffel-tower',
    name: 'Eiffel Tower',
    nameFa: 'برج ایفل',
    category: 'Landmark',
    description: 'The wrought-iron lattice tower on the Champ de Mars in Paris, France. Built in 1889 as the entrance arch to the 1889 World\'s Fair. At 330 metres (1,083 ft) tall, it was the tallest man-made structure in the world until the Chrysler Building in New York was completed in 1930.',
    descriptionFa: 'برج آهنی مشبک در میدان چامپ دو مارس پاریس، فرانسه. در سال ۱۸۸۹ به عنوان دروازه ورودی نمایشگاه جهانی ساخته شد.',
    imageUrl: '/site-img/paris/paris-img.jpg',
    coordinates: { lat: 48.8584, lng: 2.2945 },
    openingHours: '09:00 – 23:45 (last entry 23:00)',
    ticketPrice: '€17.10 – €28.30',
    duration: '1.5 – 3 hours',
    rating: 4.7,
    reviewCount: 287453,
    citySlug: 'paris',
  },
  'louvre-museum': {
    id: 'louvre-museum',
    slug: 'louvre-museum',
    name: 'Louvre Museum',
    nameFa: 'موزه لوور',
    category: 'Museum',
    description: 'The world\'s largest art museum and a historic monument in Paris. A central landmark of the city, the Louvre museum is housed in the Louvre Palace, which was originally built as a fortress in the late 12th to 13th century under Philip II.',
    descriptionFa: 'بزرگترین موزه هنری جهان و یک بنای تاریخی در پاریس. موزه لوور در کاخ لوور قرار دارد.',
    imageUrl: '/site-img/paris/lo-mousam.jpg',
    coordinates: { lat: 48.8606, lng: 2.3376 },
    openingHours: '09:00 – 18:00 (Wed & Fri until 21:45, closed Tue)',
    ticketPrice: '€15 – €22',
    duration: '3 – 5 hours',
    rating: 4.8,
    reviewCount: 341200,
    citySlug: 'paris',
  },
  'notre-dame': {
    id: 'notre-dame',
    slug: 'notre-dame',
    name: 'Notre-Dame Cathedral',
    nameFa: 'کلیسای نوتردام',
    category: 'Historic Site',
    description: 'A medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris. Regarded as one of the finest examples of French Gothic architecture.',
    descriptionFa: 'یک کلیسای جامع کاتولیک قرون وسطایی در جزیره سیته در پاریس.',
    imageUrl: '/site-img/paris/carch-noterdom.jpg',
    coordinates: { lat: 48.8530, lng: 2.3499 },
    openingHours: '07:45 – 19:00 (under restoration)',
    ticketPrice: 'Free (exterior viewing)',
    duration: '1 – 2 hours',
    rating: 4.7,
    reviewCount: 198300,
    citySlug: 'paris',
  },
  'senso-ji': {
    id: 'senso-ji',
    slug: 'senso-ji',
    name: 'Senso-ji Temple',
    nameFa: 'معبد سنسوجی',
    category: 'Temple',
    description: 'An ancient Buddhist temple located in Asakusa, Tokyo. It is Tokyo\'s oldest temple, and one of its most significant. The temple is dedicated to the bodhisattva Kannon.',
    descriptionFa: 'یک معبد بودایی باستانی در آساکوسا، توکیو. قدیمی‌ترین معبد توکیو است.',
    imageUrl: '/site-img/japan/mnsoje.jpg',
    coordinates: { lat: 35.7147, lng: 139.7966 },
    openingHours: '06:00 – 17:00 (grounds open 24h)',
    ticketPrice: 'Free',
    duration: '1 – 2 hours',
    rating: 4.8,
    reviewCount: 254100,
    citySlug: 'tokyo',
  },
  'shibuya-crossing': {
    id: 'shibuya-crossing',
    slug: 'shibuya-crossing',
    name: 'Shibuya Crossing',
    nameFa: 'تقاطع شیبویا',
    category: 'Landmark',
    description: 'A famous scramble crossing in Shibuya, Tokyo, Japan. It is one of the busiest pedestrian crossings in the world, with over 2,500 pedestrians crossing at a time during peak hours.',
    descriptionFa: 'یک تقاطع معروف در شیبویا، توکیو، ژاپن. یکی از شلوغ‌ترین تقاطع‌های عابر پیاده در جهان.',
    imageUrl: '/site-img/japan/sinoby.jpg',
    coordinates: { lat: 35.6595, lng: 139.7004 },
    openingHours: '24 hours',
    ticketPrice: 'Free',
    duration: '30 min – 1 hour',
    rating: 4.6,
    reviewCount: 189700,
    citySlug: 'tokyo',
  },
  'mt-fuji': {
    id: 'mt-fuji',
    slug: 'mt-fuji',
    name: 'Mount Fuji',
    nameFa: 'کوه فوجی',
    category: 'Nature',
    description: 'An active stratovolcano and the highest mountain in Japan at 3,776.24 m (12,389 ft). It straddles the boundary of Shizuoka and Yamanashi Prefectures, just southwest of Tokyo.',
    descriptionFa: 'یک آتشفشان و بلندترین کوه ژاپن با ارتفاع ۳٬۷۷۶ متر.',
    imageUrl: '/site-img/japan/mount-fojy.jpg',
    coordinates: { lat: 35.3606, lng: 138.7274 },
    openingHours: 'Climbing season: July – September',
    ticketPrice: '¥2,000 (conservation fee)',
    duration: '8 – 12 hours (full climb)',
    rating: 4.9,
    reviewCount: 312400,
    citySlug: 'tokyo',
  },
  'hagia-sophia': {
    id: 'hagia-sophia',
    slug: 'hagia-sophia',
    name: 'Hagia Sophia',
    nameFa: 'ایا صوفیه',
    category: 'Historic Site',
    description: 'A Late Antique place of worship in Istanbul. Built in 537 AD, the structure was famous in particular for its massive dome. It was the world\'s largest cathedral for nearly a thousand years.',
    descriptionFa: 'یک مکان عبادی دیرینه در استانبول. این بنا در سال ۵۳۷ میلادی ساخته شد و به خاطر گنبد عظیمش شهرت دارد.',
    imageUrl: '/site-img/turkis/sofi.jpg',
    coordinates: { lat: 41.0086, lng: 28.9802 },
    openingHours: '09:00 – 17:00 (prayer times may vary)',
    ticketPrice: 'Free (mosque)',
    duration: '1 – 2 hours',
    rating: 4.8,
    reviewCount: 276800,
    citySlug: 'istanbul',
  },
  'grand-bazaar': {
    id: 'grand-bazaar',
    slug: 'grand-bazaar',
    name: 'Grand Bazaar',
    nameFa: 'بازار بزرگ',
    category: 'Shopping',
    description: 'One of the largest and oldest covered markets in the world, with 61 covered streets and over 4,000 shops which attract between 250,000 and 400,000 visitors daily.',
    descriptionFa: 'یکی از بزرگترین و قدیمی‌ترین بازارهای سرپوشیده جهان با بیش از ۴۰۰۰ مغازه.',
    imageUrl: '/site-img/turkis/big bazar.jpg',
    coordinates: { lat: 41.0108, lng: 28.9682 },
    openingHours: '08:30 – 19:00 (closed Sundays)',
    ticketPrice: 'Free',
    duration: '2 – 4 hours',
    rating: 4.4,
    reviewCount: 198400,
    citySlug: 'istanbul',
  },
  'tower-of-london': {
    id: 'tower-of-london',
    slug: 'tower-of-london',
    name: 'Tower of London',
    nameFa: 'برج لندن',
    category: 'Historic Site',
    description: 'His Majesty\'s Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London. It was founded in 1078 by William the Conqueror.',
    descriptionFa: 'قلعه‌ای تاریخی در کنار رودخانه تایمز در مرکز لندن. در سال ۱۰۷۸ توسط ویلیام فاتح بنا شد.',
    imageUrl: '/site-img/britis/londen tower.jpg',
    coordinates: { lat: 51.5081, lng: -0.0759 },
    openingHours: '09:00 – 17:30 (closed Mon–Tue in winter)',
    ticketPrice: '£29.90 – £34.80',
    duration: '2 – 3 hours',
    rating: 4.7,
    reviewCount: 212300,
    citySlug: 'london',
  },
  'burj-khalifa': {
    id: 'burj-khalifa',
    slug: 'burj-khalifa',
    name: 'Burj Khalifa',
    nameFa: 'برج خلیفه',
    category: 'Landmark',
    description: 'A skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m (2,722 ft), it is the tallest structure and building in the world since its topping out in 2009.',
    descriptionFa: 'آسمان‌خراشی در دبی، امارات متحده عربی. با ارتفاع کل ۸۲۹.۸ متر، بلندترین سازه و ساختمان جهان است.',
    imageUrl: '/site-img/duby/kalifa tower.jpg',
    coordinates: { lat: 25.1972, lng: 55.2744 },
    openingHours: '10:00 – 00:00',
    ticketPrice: 'AED 149 – AED 599',
    duration: '1 – 2 hours',
    rating: 4.8,
    reviewCount: 243700,
    citySlug: 'dubai',
  },
  'central-park': {
    id: 'central-park',
    slug: 'central-park',
    name: 'Central Park',
    nameFa: 'پارک مرکزی',
    category: 'Nature',
    description: 'An urban park in Midtown Manhattan, New York City. It is the most visited urban park in the United States, with 42 million visitors annually, as well as one of the most filmed locations in the world.',
    descriptionFa: 'یک پارک شهری در منهتن، نیویورک. پربازدیدترین پارک شهری در ایالات متحده.',
    imageUrl: '/site-img/amirecan/cantral-park.jpg',
    coordinates: { lat: 40.7851, lng: -73.9683 },
    openingHours: '06:00 – 01:00',
    ticketPrice: 'Free',
    duration: '2 – 5 hours',
    rating: 4.8,
    reviewCount: 387400,
    citySlug: 'new-york',
  },
  'colosseum': {
    id: 'colosseum',
    slug: 'colosseum',
    name: 'Colosseum',
    nameFa: 'کولوسئوم',
    category: 'Historic Site',
    description: 'An oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built and held 50,000 to 80,000 spectators.',
    descriptionFa: 'یک آمفی‌تئاتر بیضی شکل در مرکز شهر رم، ایتالیا. بزرگترین آمفی‌تئاتری که تا به حال ساخته شده.',
    imageUrl: '/site-img/itly/colosseum.jpg',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    openingHours: '09:00 – 19:00 (seasonal)',
    ticketPrice: '€16 – €22',
    duration: '2 – 3 hours',
    rating: 4.8,
    reviewCount: 298600,
    citySlug: 'rome',
  },
  'sagrada-familia': {
    id: 'sagrada-familia',
    slug: 'sagrada-familia',
    name: 'Sagrada Família',
    nameFa: 'ساگرادا فامیلیا',
    category: 'Historic Site',
    description: 'A large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Catalan architect Antoni Gaudí, construction began in 1882.',
    descriptionFa: 'یک بازیلیکای کاتولیک رومی بزرگ و ناتمام در بارسلونا. طراحی‌شده توسط آنتونی گائودی.',
    imageUrl: '/site-img/spian/Sagrada-Família.jpg',
    coordinates: { lat: 41.4036, lng: 2.1744 },
    openingHours: '09:00 – 20:00 (seasonal)',
    ticketPrice: '€26 – €40',
    duration: '1.5 – 3 hours',
    rating: 4.8,
    reviewCount: 267900,
    citySlug: 'barcelona',
  },
  'milad-tower': {
id: 'milad-tower',
slug: 'milad-tower',
name: 'Milad Tower',
nameFa: 'برج میلاد',
category: 'Landmark',
description: 'Milad Tower is one of Tehran’s most recognizable landmarks and one of the tallest towers in Iran. Located in the northwestern part of Tehran, it features an observation deck, restaurants, a convention center and panoramic views of the city and the Alborz Mountains.',
descriptionFa: 'برج میلاد یکی از شناخته‌شده‌ترین نمادهای تهران و یکی از بلندترین برج‌های ایران است. این برج در بخش شمال‌غربی تهران قرار دارد و دارای سکوی بازدید، رستوران‌ها، مرکز همایش‌ها و چشم‌اندازی پانوراما از شهر تهران و رشته‌کوه البرز است.',
imageUrl: '/site-img/iran/Milad-Tower.jpg',
coordinates: { lat: 35.7448, lng: 51.3753 },
openingHours: '09:00 – 22:00',
ticketPrice: 'Varies by attraction',
duration: '1.5 – 3 hours',
rating: 4.6,
reviewCount: 85000,
citySlug: 'tehran',
},

};

export const cities: Record<string, City> = {
  paris: {
    id: 'paris',
    slug: 'paris',
    countrySlug: 'france',
    name: 'Paris',
    nameFa: 'پاریس',
    country: 'France',
    countryFa: 'فرانسه',
    tagline: 'The City of Light',
    taglineFa: 'شهر نور',
    description: 'Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques.',
    descriptionFa: 'پاریس، پایتخت فرانسه، یک شهر بزرگ اروپایی و مرکز جهانی هنر، مد، غذا و فرهنگ است. چشم‌انداز قرن نوزدهمی شهر با خیابان‌های عریض و رود سن قطع می‌شود.',
    heroImage: 'site-img/paris/paris.jpg',
    galleryImages: [
      '/site-img/paris/paris-1.jpg',
      '/site-img/paris/paris-2.jpg',
      '/site-img/paris/paris-3.jpg',
      '/site-img/paris/paris-4.jpg',
    ],
    coordinates: { lat: 48.8566, lng: 2.3522 },
    timezone: 'Europe/Paris (UTC+1)',
    currency: 'Euro (EUR €)',
    language: 'French',
    bestTimeToVisit: 'April–June, September–November',
    bestTimeToVisitFa: 'آوریل تا ژوئن، سپتامبر تا نوامبر',
    weather: { summer: '25°C avg, sunny', winter: '5°C avg, rainy', spring: '16°C avg, mild' },
    transportation: 'Metro (16 lines), RER, Bus, Vélib\' bicycle sharing, Taxi, Uber',
    transportationFa: 'مترو (۱۶ خط)، اتوبوس، تاکسی و دوچرخه اشتراکی',
    attractions: [
      attractions['eiffel-tower'],
      attractions['louvre-museum'],
      attractions['notre-dame'],
    ],
    restaurants: [
      { id: 'r1', name: 'Le Comptoir du Relais', nameFa: 'لو کمپتوار دو رله', cuisine: 'French Bistro', priceRange: '€€€', rating: 4.6, description: 'Legendary Saint-Germain bistro with classic French cuisine.', imageUrl: '/site-img/paris/lo-mousam.jpg' },
      { id: 'r2', name: 'Septime', nameFa: 'سپتیم', cuisine: 'Modern French', priceRange: '€€€€', rating: 4.9, description: 'One of Paris\'s most celebrated modern bistros, reservation essential.', imageUrl: '/site-img/paris/Septime.jpg' },
      { id: 'r3', name: 'L\'As du Fallafel', nameFa: 'لاس دو فلافل', cuisine: 'Middle Eastern', priceRange: '€', rating: 4.5, description: 'Iconic falafel spot in the Marais, beloved since 1979.', imageUrl: '/site-img/paris/LAs_du_Fallafel.jpg' },
    ],
    neighborhoods: [
      { id: 'n1', name: 'Le Marais', nameFa: 'لو مره', description: 'Trendy historic district with museums, galleries, and LGBTQ+ scene.', descriptionFa: 'محله تاریخی و پرطرفدار با موزه‌ها و گالری‌ها.', imageUrl: '/site-img/paris/Le-Marais.jpg', vibe: 'Art & Culture' },
      { id: 'n2', name: 'Montmartre', nameFa: 'مونمارتر', description: 'Hilltop village known for the Sacré-Cœur and bohemian artists.', descriptionFa: 'روستای تپه‌ای معروف به کلیسای ساکره‌کور و هنرمندان بوهمی.', imageUrl: '/site-img/paris/Montmartre.jpg', vibe: 'Bohemian' },
      { id: 'n3', name: 'Saint-Germain', nameFa: 'سن ژرمن', description: 'Sophisticated Left Bank neighborhood with cafes and bookshops.', descriptionFa: 'محله پیشرفته ساحل چپ با کافه‌ها و کتابفروشی‌ها.', imageUrl: '/site-img/paris/Saint-Germain.jpg', vibe: 'Literary & Chic' },
    ],
    travelTips: ['Book Eiffel Tower tickets weeks in advance', 'Get a Navigo Découverte for unlimited metro travel', 'Most museums free on first Sunday of month', 'Tipping 5-10% is appreciated but not required'],
    travelTipsFa: ['بلیط برج ایفل را هفته‌ها قبل رزرو کنید', 'کارت ناویگو برای سفرهای نامحدود مترو بگیرید', 'اکثر موزه‌ها اولین یکشنبه ماه رایگان هستند'],
    topCategories: ['History', 'Art', 'Gastronomy', 'Fashion', 'Architecture'],
  },

  tokyo: {
    id: 'tokyo',
    slug: 'tokyo',
    countrySlug: 'japan',
    name: 'Tokyo',
    nameFa: 'توکیو',
    country: 'Japan',
    countryFa: 'ژاپن',
    tagline: 'Where ancient tradition meets future technology',
    taglineFa: 'جایی که سنت با آینده دیدار می‌کند',
    description: 'Tokyo, Japans busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers and manga-themed cafes to preserved historic temples and tea houses. The city is the world\'s most populous metropolitan area, with 35 million residents.',
    descriptionFa: 'توکیو، پایتخت پرجنب‌وجوش ژاپن، مدرن‌ترین و سنتی‌ترین عناصر را ترکیب می‌کند. این شهر پرجمعیت‌ترین منطقه کلان‌شهری جهان با ۳۵ میلیون ساکن است.',
    heroImage: '/site-img/japan/tokyo.jpg',
    galleryImages: [
      '/site-img/japan/tokyo-1.jpg',
      '/site-img/japan/tokyo-2.jpg',
      '/site-img/japan/tokyo-3.jpg',
      '/site-img/japan/tokyo-4.jpg',
    ],
    coordinates: { lat: 35.6762, lng: 139.6503 },
    timezone: 'Asia/Tokyo (UTC+9)',
    currency: 'Japanese Yen (JPY ¥)',
    language: 'Japanese',
    bestTimeToVisit: 'March–May (cherry blossoms), October–November',
    bestTimeToVisitFa: 'مارس تا مه (شکوفه گیلاس)، اکتبر تا نوامبر',
    weather: { summer: '30°C avg, humid', winter: '8°C avg, dry', spring: '18°C avg, pleasant' },
    transportation: 'JR Rail, Tokyo Metro, Toei Subway, Bus, IC Cards (Suica/Pasmo)',
    transportationFa: 'قطار JR، مترو توکیو، اتوبوس و کارت‌های IC',
    attractions: [
      attractions['senso-ji'],
      attractions['shibuya-crossing'],
      attractions['mt-fuji'],
    ],
    restaurants: [
      { id: 'r4', name: 'Sukiyabashi Jiro', nameFa: 'سوکیابشی جیرو', cuisine: 'Sushi', priceRange: '€€€€€', rating: 5.0, description: 'Three-Michelin-star sushi restaurant, subject of the film Jiro Dreams of Sushi.', imageUrl: '/site-img/japan/Sukiyabashi Jiro.jpg' },
      { id: 'r5', name: 'Ichiran Ramen', nameFa: 'ایچیران رامن', cuisine: 'Ramen', priceRange: '€€', rating: 4.5, description: 'Solo ramen dining booths for the ultimate focused ramen experience.', imageUrl: '/site-img/japan/Ichiran Ramen.jpg' },
      { id: 'r6', name: 'Narisawa', nameFa: 'ناریساوا', cuisine: 'Innovative Japanese', priceRange: '€€€€€', rating: 4.9, description: 'Avant-garde cuisine celebrating Japanese nature and ingredients.', imageUrl: '/site-img/japan/Narisawa.jpg' },
    ],
    neighborhoods: [
      { id: 'n4', name: 'Shinjuku', nameFa: 'شینجوکو', description: 'Entertainment and business hub with the world\'s busiest railway station.', descriptionFa: 'مرکز سرگرمی و تجاری با شلوغ‌ترین ایستگاه قطار جهان.', imageUrl: '/site-img/japan/Shinjuku.jpg', vibe: 'Electric & Urban' },
      { id: 'n5', name: 'Asakusa', nameFa: 'آساکوسا', description: 'Tokyo\'s traditional downtown with Senso-ji Temple and artisan shops.', descriptionFa: 'محله سنتی توکیو با معبد سنسوجی و مغازه‌های صنایع دستی.', imageUrl: '/site-img/japan/Asakusa.jpg', vibe: 'Historic & Traditional' },
      { id: 'n6', name: 'Shibuya', nameFa: 'شیبویا', description: 'Youth fashion and pop culture epicenter with the famous crossing.', descriptionFa: 'مرکز مد جوانان و فرهنگ پاپ با تقاطع معروف.', imageUrl: '/site-img/japan/Shibuya.jpg', vibe: 'Trendy & Youthful' },
    ],
    travelTips: ['Get a Suica/Pasmo IC card for seamless public transport', 'Carry cash — many small restaurants don\'t accept cards', 'Shoes that slip on/off easily for temples', 'Book popular restaurants months in advance'],
    travelTipsFa: ['کارت IC سوییکا یا پاسمو برای حمل‌ونقل عمومی بگیرید', 'نقد همراه داشته باشید - بسیاری از رستوران‌های کوچک کارت نمی‌پذیرند'],
    topCategories: ['Technology', 'Culture', 'Food', 'Temples', 'Shopping'],
  },

  istanbul: {
    id: 'istanbul',
    slug: 'istanbul',
    countrySlug: 'turkey',
    name: 'Istanbul',
    nameFa: 'استانبول',
    country: 'Turkey',
    countryFa: 'ترکیه',
    tagline: 'Where East meets West',
    taglineFa: 'جایی که شرق با غرب دیدار می‌کند',
    description: 'Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races.',
    descriptionFa: 'استانبول شهری بزرگ در ترکیه است که اروپا و آسیا را در دو طرف تنگه بسفر به هم وصل می‌کند. شهر قدیمی آن تأثیرات فرهنگی امپراتوری‌های بسیاری را منعکس می‌کند.',
    heroImage: 'site-img/turkis/istanbul.jpg',
    galleryImages: [
      '/site-img/turkis/istanbul-1.jpg',
      '/site-img/turkis/istanbul-2.jpg',
      '/site-img/turkis/istanbul-3.jpg',
      '/site-img/turkis/istanbul-4.jpg',
    ],
    coordinates: { lat: 41.0082, lng: 28.9784 },
    timezone: 'Europe/Istanbul (UTC+3)',
    currency: 'Turkish Lira (TRY ₺)',
    language: 'Turkish',
    bestTimeToVisit: 'April–May, September–November',
    bestTimeToVisitFa: 'آوریل تا مه، سپتامبر تا نوامبر',
    weather: { summer: '28°C avg, hot', winter: '8°C avg, rainy', spring: '16°C avg, mild' },
    transportation: 'Metro, Metrobus, Tram, Ferry (İDO), Dolmuş, Taxi',
    transportationFa: 'مترو، متروبوس، ترام، کشتی، تاکسی',
    attractions: [
      attractions['hagia-sophia'],
      attractions['grand-bazaar'],
    ],
    restaurants: [
      { id: 'r7', name: 'Karaköy Lokantası', nameFa: 'کاراکوی لوکانتاسی', cuisine: 'Turkish Meyhane', priceRange: '€€€', rating: 4.7, description: 'Refined meyhane dishes in the hip Karaköy district.', imageUrl: '/site-img/turkis/Karaköy Lokantası.jpg' },
      { id: 'r8', name: 'Çiya Sofrası', nameFa: 'چییا سوفراسی', cuisine: 'Anatolian', priceRange: '€€', rating: 4.8, description: 'Legendary Kadıköy restaurant celebrating Anatolian culinary heritage.', imageUrl: '/site-img/turkis/Çiya Sofrası.jpg' },
    ],
    neighborhoods: [
      { id: 'n7', name: 'Sultanahmet', nameFa: 'سلطان احمد', description: 'Historic heart of Istanbul with the Grand Bazaar, Hagia Sophia and Blue Mosque.', descriptionFa: 'قلب تاریخی استانبول با بازار بزرگ، ایاصوفیه و مسجد آبی.', imageUrl: '/site-img/turkis/Sultanahme.jpg', vibe: 'Historic & Touristic' },
      { id: 'n8', name: 'Beyoğlu', nameFa: 'بیوغلو', description: 'Modern, cosmopolitan area with İstiklal Avenue, bars and galleries.', descriptionFa: 'منطقه مدرن و جهان‌وطن با خیابان استقلال، بارها و گالری‌ها.', imageUrl: '/site-img/turkis/Beyoğlu.jpg', vibe: 'Cosmopolitan' },
      { id: 'n9', name: 'Karaköy', nameFa: 'کاراکوی', description: 'Trendy port neighborhood with a thriving café and restaurant scene.', descriptionFa: 'محله بندری پرطرفدار با صحنه کافه و رستوران پررونق.', imageUrl: '/site-img/turkis/Karaköy.jpg', vibe: 'Hip & Creative' },
    ],
    travelTips: ['Get an İstanbulkart for public transport', 'Haggling is expected in the Grand Bazaar', 'Evening ferry on the Bosphorus is essential', 'Dress modestly when visiting mosques'],
    travelTipsFa: ['کارت استانبول برای حمل‌ونقل عمومی بگیرید', 'در بازار بزرگ چانه‌زنی مرسوم است'],
    topCategories: ['History', 'Culture', 'Food', 'Architecture', 'Bosphorus'],
  },

  london: {
    id: 'london',
    slug: 'london',
    countrySlug: 'uk',
    name: 'London',
    nameFa: 'لندن',
    country: 'United Kingdom',
    countryFa: 'انگلستان',
    tagline: 'A world city in one place',
    taglineFa: 'یک شهر جهانی در یک مکان',
    description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey, site of British monarch coronations.",
    descriptionFa: 'لندن، پایتخت انگلستان و بریتانیا، شهری قرن بیست‌ویکمی با تاریخی که به دوران رومی‌ها برمی‌گردد.',
    heroImage: 'site-img/britis/new-york.jpg',
    galleryImages: [
      '/site-img/britis/new-york-1.jpg',
      '/site-img/britis/new-york-2.jpg',
      '/site-img/britis/new-york-3.jpg',
    ],
    coordinates: { lat: 51.5074, lng: -0.1278 },
    timezone: 'Europe/London (UTC+0/+1)',
    currency: 'British Pound (GBP £)',
    language: 'English',
    bestTimeToVisit: 'June–August, September–October',
    bestTimeToVisitFa: 'ژوئن تا اوت، سپتامبر تا اکتبر',
    weather: { summer: '22°C avg, partly sunny', winter: '7°C avg, rainy', spring: '14°C avg, changeable' },
    transportation: 'London Underground (Tube), Overground, Bus, Cycle Hire, Black Cab, Uber',
    transportationFa: 'مترو لندن (Tube)، اتوبوس، دوچرخه اشتراکی، تاکسی',
    attractions: [attractions['tower-of-london']],
    restaurants: [
      { id: 'r9', name: 'Dishoom', nameFa: 'دیشوم', cuisine: 'Bombay Cafe', priceRange: '€€€', rating: 4.8, description: 'Iconic Bombay-style cafe serving Indian breakfast, lunch, and dinner.', imageUrl: '/site-img/britis/Dishoom.jpg' },
      { id: 'r10', name: 'St. John Restaurant', nameFa: 'رستوران سنت جان', cuisine: 'British', priceRange: '€€€€', rating: 4.7, description: 'Pioneering British restaurant known for its nose-to-tail cooking philosophy.', imageUrl: 'site-img/britis/St. John Restaurant.jpg' },
    ],
    neighborhoods: [
      { id: 'n10', name: 'Shoreditch', nameFa: 'شوردیچ', description: 'London\'s creative hub with street art, galleries and tech startups.', descriptionFa: 'مرکز خلاق لندن با هنر خیابانی، گالری‌ها و استارتاپ‌های تکنولوژی.', imageUrl: '/site-img/britis/Shoreditch.jpg', vibe: 'Creative & Hip' },
      { id: 'n11', name: 'Notting Hill', nameFa: 'ناتینگ هیل', description: 'Charming area with pastel-coloured houses and the famous Portobello Market.', descriptionFa: 'منطقه‌ای دلنشین با خانه‌های رنگ پاستل و بازار معروف پورتوبلو.', imageUrl: '/site-img/britis/Notting Hill.jpg', vibe: 'Charming & Upscale' },
    ],
    travelTips: ['Get an Oyster card for all public transport', 'Most museums and galleries are free', 'Congestion charge applies in central London for cars', 'Queuing is taken seriously — always wait in line'],
    travelTipsFa: ['کارت اویستر برای همه حمل‌ونقل عمومی بگیرید', 'اکثر موزه‌ها و گالری‌ها رایگان هستند'],
    topCategories: ['History', 'Museums', 'Theatre', 'Parks', 'Gastronomy'],
  },

  dubai: {
    id: 'dubai',
    slug: 'dubai',
    countrySlug: 'uae',
    name: 'Dubai',
    nameFa: 'دبی',
    country: 'United Arab Emirates',
    countryFa: 'امارات متحده عربی',
    tagline: 'The city of superlatives',
    taglineFa: 'شهر فوق‌العاده‌ها',
    description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.',
    descriptionFa: 'دبی شهر و اماراتی در امارات متحده عربی است که به خرید لوکس، معماری فوق‌مدرن و زندگی شبانه پرنشاط شناخته می‌شود.',
    heroImage: 'site-img/duby/dubi.jpg',
    galleryImages: [
      '/site-img/duby/dubi-1.jpg',
      '/site-img/duby/dubi-2.jpg',
    ],
    coordinates: { lat: 25.2048, lng: 55.2708 },
    timezone: 'Asia/Dubai (UTC+4)',
    currency: 'UAE Dirham (AED)',
    language: 'Arabic, English',
    bestTimeToVisit: 'November–March',
    bestTimeToVisitFa: 'نوامبر تا مارس',
    weather: { summer: '42°C avg, extreme', winter: '24°C avg, perfect', spring: '32°C avg, warm' },
    transportation: 'Metro (2 lines), Tram, Bus, Water Bus, Taxi, Ride Apps',
    transportationFa: 'مترو، تراموا، اتوبوس، تاکسی',
    attractions: [attractions['burj-khalifa']],
    restaurants: [
      { id: 'r11', name: 'Nobu Dubai', nameFa: 'نوبو دبی', cuisine: 'Japanese-Peruvian', priceRange: '€€€€€', rating: 4.7, description: 'Celebrity chef Nobu Matsuhisa\'s iconic fusion restaurant in Atlantis.', imageUrl: '/site-img/duby/Nobu Dubai.jpg' },
    ],
    neighborhoods: [
      { id: 'n12', name: 'Downtown Dubai', nameFa: 'داون‌تاون دبی', description: 'Home to the Burj Khalifa, Dubai Mall and Dubai Fountain.', descriptionFa: 'خانه برج خلیفه، مرکز خرید دبی و فواره دبی.', imageUrl: 'site-img/duby/Downtown Dubai.jpg', vibe: 'Luxury & Iconic' },
    ],
    travelTips: ['Ramadan schedules affect restaurants and hours', 'Dress modestly outside hotel/beach areas', 'Tap water is safe but bottled is preferred', 'Uber is reliable and cheaper than taxis'],
    travelTipsFa: ['ساعات ماه رمضان بر رستوران‌ها تأثیر می‌گذارد', 'خارج از هتل و ساحل با احتیاط لباس بپوشید'],
    topCategories: ['Luxury', 'Architecture', 'Shopping', 'Desert', 'Food'],
  },

  'new-york': {
    id: 'new-york',
    slug: 'new-york',
    countrySlug: 'usa',
    name: 'New York City',
    nameFa: 'نیویورک',
    country: 'United States',
    countryFa: 'ایالات متحده آمریکا',
    tagline: 'The City That Never Sleeps',
    taglineFa: 'شهری که هرگز نمی‌خوابد',
    description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.",
    descriptionFa: 'شهر نیویورک از ۵ ناحیه تشکیل شده که در محل تلاقی رودخانه هادسون با اقیانوس اطلس قرار دارد. در مرکز آن منهتن است.',
    heroImage: '/site-img/britis/new-york.jpg',
    galleryImages: [
      '/site-img/britis/new-york-1.jpg',
      '/site-img/britis/new-york-2.jpg',
    ],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    timezone: 'America/New_York (UTC-5/-4)',
    currency: 'US Dollar (USD $)',
    language: 'English',
    bestTimeToVisit: 'April–June, September–November',
    bestTimeToVisitFa: 'آوریل تا ژوئن، سپتامبر تا نوامبر',
    weather: { summer: '28°C avg, humid', winter: '3°C avg, cold', spring: '17°C avg, pleasant' },
    transportation: 'Subway (24/7), Bus, Yellow Cab, Uber/Lyft, Citi Bike, Ferry',
    transportationFa: 'مترو (۲۴ ساعته)، اتوبوس، تاکسی زرد، دوچرخه اشتراکی',
    attractions: [attractions['central-park']],
    restaurants: [
      { id: 'r12', name: 'Katzs Delicatessen', nameFa: 'کاتز دلیکاتسن', cuisine: 'Jewish Deli', priceRange: '€€', rating: 4.5, description: 'Iconic Lower East Side deli open since 1888, famous pastrami sandwiches.', imageUrl: '/site-img/amirecan/Katzs Delicatessen.jpg' },
    ],
    neighborhoods: [
      { id: 'n13', name: 'SoHo', nameFa: 'سوهو', description: 'Trendy downtown area with cast-iron architecture, boutiques and galleries.', descriptionFa: 'منطقه پرطرفدار با معماری چدنی، بوتیک‌ها و گالری‌ها.', imageUrl: '/site-img/amirecan/SoHo.jpg', vibe: 'Fashionable & Artistic' },
    ],
    travelTips: ['MetroCard or OMNY for subway and bus', 'Walking is often faster than taxis in Midtown', 'Tipping 20% is standard', 'Book Broadway shows in advance'],
    travelTipsFa: ['کارت مترو برای مترو و اتوبوس', 'انعام ۲۰٪ در رستوران‌ها معمول است'],
    topCategories: ['Arts', 'Food', 'Architecture', 'Broadway', 'Shopping'],
  },

  rome: {
    id: 'rome',
    slug: 'rome',
    countrySlug: 'italy',
    name: 'Rome',
    nameFa: 'رم',
    country: 'Italy',
    countryFa: 'ایتالیا',
    tagline: 'The Eternal City',
    taglineFa: 'شهر ابدی',
    description: 'Rome is the capital of Italy. It is also the capital of the Lazio region. The city has a long and complex history. Once a powerful empire, it\'s now a city of great art, architecture, and religion. Millions of tourists visit Rome to see the Colosseum, the Vatican and so much more.',
    descriptionFa: 'رم پایتخت ایتالیا است. شهری با تاریخ طولانی و پیچیده. زمانی امپراتوری قدرتمند بود، اکنون شهری با هنر، معماری و مذهب بزرگ است.',
    heroImage: '/site-img/itly/rome.jpg',
    galleryImages: [
      '/site-img/itly/rome-1.jpg',
      '/site-img/itly/rome-2.jpg',
    ],
    coordinates: { lat: 41.9028, lng: 12.4964 },
    timezone: 'Europe/Rome (UTC+1/+2)',
    currency: 'Euro (EUR €)',
    language: 'Italian',
    bestTimeToVisit: 'April–June, September–October',
    bestTimeToVisitFa: 'آوریل تا ژوئن، سپتامبر تا اکتبر',
    weather: { summer: '32°C avg, hot', winter: '11°C avg, mild', spring: '20°C avg, pleasant' },
    transportation: 'Metro (Line A & B), Bus, Tram, Taxi, Walking',
    transportationFa: 'مترو، اتوبوس، تراموا، تاکسی',
    attractions: [attractions['colosseum']],
    restaurants: [
      { id: 'r13', name: 'Roscioli', nameFa: 'روشیولی', cuisine: 'Roman Trattoria', priceRange: '€€€€', rating: 4.8, description: 'Celebrated deli-restaurant serving classic Roman pasta and charcuterie.', imageUrl: '/site-img/itly/Roscioli.jpg' },
    ],
    neighborhoods: [
      { id: 'n14', name: 'Trastevere', nameFa: 'تراستوره', description: 'Charming medieval neighborhood with cobblestone streets and great restaurants.', descriptionFa: 'محله قرون وسطایی با کوچه‌های سنگفرش و رستوران‌های عالی.', imageUrl: '/site-img/itly/Trastevere.jpg', vibe: 'Medieval & Romantic' },
    ],
    travelTips: ['Book Colosseum tickets far in advance', 'Carry coins for water fountains (nasoni) — free and drinkable', 'Beware of tourist traps near major monuments', 'Siesta hours (14:00–16:00) close many shops'],
    travelTipsFa: ['بلیط کولوسئوم را از پیش رزرو کنید', 'مراقب تله‌های توریستی نزدیک بناهای تاریخی باشید'],
    topCategories: ['History', 'Art', 'Food', 'Architecture', 'Vatican'],
  },

  barcelona: {
    id: 'barcelona',
    slug: 'barcelona',
    countrySlug: 'spain',
    name: 'Barcelona',
    nameFa: 'بارسلونا',
    country: 'Spain',
    countryFa: 'اسپانیا',
    tagline: 'Art, architecture and the Mediterranean',
    taglineFa: 'هنر، معماری و مدیترانه',
    description: 'Barcelona, the cosmopolitan capital of Spain\'s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.',
    descriptionFa: 'بارسلونا، پایتخت جهانی کاتالونیای اسپانیا، به هنر و معماری شناخته می‌شود. کلیسای خارق‌العاده ساگرادا فامیلیا و سایر نمادهای مدرنیستی طراحی‌شده توسط گائودی در سراسر شهر قرار دارند.',
    heroImage: '/site-img/spian/barcelona.jpg',
    galleryImages: [
      '/site-img/spian/barcelona-1.jpg',
      '/site-img/spian/barcelona-2.jpg',
    ],
    coordinates: { lat: 41.3851, lng: 2.1734 },
    timezone: 'Europe/Madrid (UTC+1/+2)',
    currency: 'Euro (EUR €)',
    language: 'Spanish, Catalan',
    bestTimeToVisit: 'May–June, September–October',
    bestTimeToVisitFa: 'مه تا ژوئن، سپتامبر تا اکتبر',
    weather: { summer: '28°C avg, sunny', winter: '12°C avg, mild', spring: '19°C avg, pleasant' },
    transportation: 'Metro (11 lines), Bus, Tram, FGC, Bike, Cable Car',
    transportationFa: 'مترو، اتوبوس، تراموا، دوچرخه',
    attractions: [attractions['sagrada-familia']],
    restaurants: [
      { id: 'r14', name: 'Bar Cañete', nameFa: 'بار کانیته', cuisine: 'Catalan Tapas', priceRange: '€€€', rating: 4.7, description: 'Elegant tapas bar serving superb Catalan cuisine in the Gothic Quarter.', imageUrl: '/site-img/spian/Bar Cañete.jpg' },
    ],
    neighborhoods: [
      { id: 'n15', name: 'Gothic Quarter', nameFa: 'محله گوتیک', description: 'Medieval labyrinthine streets at the heart of Barcelona\'s old city.', descriptionFa: 'کوچه‌های پیچ‌درپیچ قرون وسطایی در قلب شهر قدیمی بارسلونا.', imageUrl: '/site-img/spian/Gothic Quarter.jpg', vibe: 'Historic & Atmospheric' },
      { id: 'n16', name: 'Eixample', nameFa: 'اکزامپله', description: 'Modernist grid district housing most of Barcelona\'s Gaudí buildings.', descriptionFa: 'منطقه شبکه مدرنیستی که اکثر ساختمان‌های گائودی در آن قرار دارند.', imageUrl: '/site-img/spian/Eixample.jpg', vibe: 'Modernist & Elegant' },
    ],
    travelTips: ['T-Casual 10-trip metro card is best value', 'Pickpockets are very active on La Rambla', 'Lunch (14:00–16:00) is the main meal', 'Book Sagrada Família months in advance'],
    travelTipsFa: ['کارت مترو ۱۰ سفره بهترین ارزش است', 'در لا رامبلا مراقب جیب‌بر باشید'],
    topCategories: ['Architecture', 'Beach', 'Food', 'Art', 'Nightlife'],
  },
  tehran: {
  id: 'tehran',
  slug: 'tehran',
  countrySlug: 'iran',

  name: 'Tehran',
  nameFa: 'تهران',

  country: 'Iran',
  countryFa: 'ایران',

  tagline: 'The vibrant heart of Iran',
  taglineFa: 'قلب پرجنب‌وجوش ایران',

  description: 'Tehran is the capital and largest city of Iran, known for its modern skyline, historic palaces, museums, vibrant bazaars and the dramatic Alborz Mountains surrounding the city.',

  descriptionFa: 'تهران پایتخت و بزرگ‌ترین شهر ایران است که به خاطر برج‌های مدرن، کاخ‌های تاریخی، موزه‌های ارزشمند، بازارهای پرجنب‌وجوش و چشم‌انداز زیبای رشته‌کوه البرز شناخته می‌شود.',

  heroImage: 'site-img/iran/tehran.jpg',

  galleryImages: [
    '/site-img/iran/tehran-1.jpg',
    '/site-img/iran/tehran-2.jpg',
    '/site-img/iran/tehran-3.jpg',
  ],

  coordinates: {
    lat: 35.6892,
    lng: 51.3890
  },

  timezone: 'Asia/Tehran (UTC+3:30)',
  currency: 'Iranian Rial (IRR)',
  language: 'Persian',

  bestTimeToVisit: 'March–May, September–November',
  bestTimeToVisitFa: 'اسفند تا خرداد، شهریور تا آبان',

  weather: {
    summer: '35°C avg, hot and dry',
    winter: '8°C avg, cold',
    spring: '20°C avg, pleasant'
  },

  transportation: 'Metro, BRT, Bus, Taxi, Ride Apps',
  transportationFa: 'مترو، اتوبوس تندرو، اتوبوس، تاکسی و تاکسی اینترنتی',

  attractions: [],

  restaurants: [
    {
      id: 'tehran-r1',
      name: 'Dizi Sara',
      nameFa: 'دیزی‌سرا',
      cuisine: 'Persian',
      priceRange: '€€',
      rating: 4.5,
      description: 'A traditional Iranian restaurant serving classic Persian dishes.',
      imageUrl: '/site-img/iran/dizi.jpg'
    }
  ],

  neighborhoods: [
    {
      id: 'tehran-n1',
      name: 'Darband',
      nameFa: 'دربند',
      description: 'A popular mountain-side neighborhood known for restaurants, streams and hiking trails.',
      descriptionFa: 'محله‌ای کوهستانی و محبوب با رستوران‌ها، رودخانه و مسیرهای پیاده‌روی.',
      imageUrl: '/site-img/iran/darband.jpg',
      vibe: 'Mountain & Traditional'
    },

    {
      id: 'tehran-n2',
      name: 'Grand Bazaar',
      nameFa: 'بازار بزرگ تهران',
      description: 'One of Tehran’s most historic and lively commercial districts.',
      descriptionFa: 'یکی از قدیمی‌ترین و پرجنب‌وجوش‌ترین مراکز تجاری تهران.',
      imageUrl: '/site-img/iran/bazaar.jpg',
      vibe: 'Historic & Traditional'
    }
  ],

  travelTips: [
    'Traffic can be heavy during rush hours',
    'The Metro is one of the fastest ways to travel around the city',
    'Carry cash as some international cards may not work',
    'Spring and autumn generally offer the most pleasant weather'
  ],

  travelTipsFa: [
    'در ساعات شلوغی ترافیک تهران می‌تواند بسیار سنگین باشد',
    'مترو یکی از سریع‌ترین راه‌ها برای جابه‌جایی در شهر است',
    'بهتر است مقداری پول نقد همراه داشته باشید',
    'بهار و پاییز معمولاً آب‌وهوای مطلوب‌تری دارند'
  ],

  topCategories: [
    'Architecture',
    'History',
    'Culture',
    'Food',
    'Mountains'
  ]
},
};

export const countries: Record<string, Country> = {
  france: { id: 'france', slug: 'france', name: 'France', nameFa: 'فرانسه', continent: 'Europe', description: 'France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.', descriptionFa: 'فرانسه در اروپای غربی، شهرهای قرون وسطایی، روستاهای آلپی و سواحل مدیترانه را در بر می‌گیرد.', heroImage: 'site-img/paris/france-flagh.png', capital: 'Paris', currency: 'Euro (€)', language: 'French', coordinates: { lat: 46.2276, lng: 2.2137 }, cities: ['paris'], bestTimeToVisit: 'April–June, September–November', popularFor: ['Eiffel Tower', 'Cuisine', 'Wine', 'Art', 'Fashion'] },
  japan: { id: 'japan', slug: 'japan', name: 'Japan', nameFa: 'ژاپن', continent: 'Asia', description: 'Japan, the island nation in East Asia, blends ancient traditions with hyper-modern cities.', descriptionFa: 'ژاپن، کشور جزیره‌ای در آسیای شرقی، سنت‌های باستانی را با شهرهای فوق‌مدرن ترکیب می‌کند.', heroImage: 'site-img/japan/japan-flagh.png', capital: 'Tokyo', currency: 'Yen (¥)', language: 'Japanese', coordinates: { lat: 36.2048, lng: 138.2529 }, cities: ['tokyo'], bestTimeToVisit: 'March–May, October–November', popularFor: ['Cherry Blossoms', 'Temples', 'Technology', 'Cuisine', 'Anime'] },
  turkey: { id: 'turkey', slug: 'turkey', name: 'Turkey', nameFa: 'ترکیه', continent: 'Europe/Asia', description: 'Turkey straddles two continents and thousands of years of history, with stunning landscapes and vibrant culture.', descriptionFa: 'ترکیه دو قاره و هزاران سال تاریخ را به هم متصل می‌کند با چشم‌اندازهای خیره‌کننده و فرهنگ پرجنب‌وجوش.', heroImage: 'site-img/turkis/turkey-flag.png', capital: 'Ankara', currency: 'Lira (₺)', language: 'Turkish', coordinates: { lat: 38.9637, lng: 35.2433 }, cities: ['istanbul'], bestTimeToVisit: 'April–June, September–November', popularFor: ['Hagia Sophia', 'Bazaars', 'Cuisine', 'Cappadocia', 'Bosphorus'] },
  uk: { id: 'uk', slug: 'uk', name: 'United Kingdom', nameFa: 'انگلستان', continent: 'Europe', description: 'The United Kingdom blends centuries of history with modern culture, iconic landmarks and diverse cities.', descriptionFa: 'پادشاهی متحده قرن‌ها تاریخ را با فرهنگ مدرن، نمادهای معروف و شهرهای متنوع ترکیب می‌کند.', heroImage: 'site-img/britis/britis-flag.png', capital: 'London', currency: 'Pound (£)', language: 'English', coordinates: { lat: 55.3781, lng: -3.4360 }, cities: ['london'], bestTimeToVisit: 'June–August', popularFor: ['Big Ben', 'Buckingham Palace', 'Theatre', 'Pubs', 'Museums'] },
  uae: { id: 'uae', slug: 'uae', name: 'United Arab Emirates', nameFa: 'امارات', continent: 'Asia', description: 'The UAE is a federation of seven emirates on the Persian Gulf, known for luxury and modernity.', descriptionFa: 'امارات متحده عربی اتحادیه‌ای از هفت امارات در خلیج فارس است که به لوکس بودن و مدرنیته معروف است.', heroImage: 'site-img/duby/use-flag.png', capital: 'Abu Dhabi', currency: 'Dirham (AED)', language: 'Arabic', coordinates: { lat: 23.4241, lng: 53.8478 }, cities: ['dubai'], bestTimeToVisit: 'November–March', popularFor: ['Burj Khalifa', 'Desert Safari', 'Shopping', 'Luxury Hotels'] },
  usa: { id: 'usa', slug: 'usa', name: 'United States', nameFa: 'آمریکا', continent: 'Americas', description: 'The United States is a vast country spanning 50 states, from coast to coast with diverse landscapes and cultures.', descriptionFa: 'ایالات متحده آمریکا کشوری گسترده با ۵۰ ایالت است که از ساحل تا ساحل دارای چشم‌اندازها و فرهنگ‌های متنوع است.', heroImage: 'site-img/amirecan/usa-flag.png', capital: 'Washington D.C.', currency: 'Dollar ($)', language: 'English', coordinates: { lat: 37.0902, lng: -95.7129 }, cities: ['new-york'], bestTimeToVisit: 'Varies by region', popularFor: ['NYC', 'Grand Canyon', 'Hollywood', 'National Parks'] },
  italy: { id: 'italy', slug: 'italy', name: 'Italy', nameFa: 'ایتالیا', continent: 'Europe', description: 'Italy is a boot-shaped peninsula in Southern Europe famous for art, cuisine, fashion and ancient history.', descriptionFa: 'ایتالیا شبه‌جزیره‌ای به شکل چکمه در اروپای جنوبی است که به هنر، آشپزی، مد و تاریخ باستانی شهرت دارد.', heroImage: 'site-img/itly/italy-flag.png', capital: 'Rome', currency: 'Euro (€)', language: 'Italian', coordinates: { lat: 41.8719, lng: 12.5674 }, cities: ['rome'], bestTimeToVisit: 'April–June, September–October', popularFor: ['Colosseum', 'Vatican', 'Venice', 'Cuisine', 'Renaissance Art'] },
  spain: { id: 'spain', slug: 'spain', name: 'Spain', nameFa: 'اسپانیا', continent: 'Europe', description: 'Spain in Southwestern Europe features diverse regions with unique languages, cultures, food and landscapes.', descriptionFa: 'اسپانیا در اروپای جنوب‌غربی دارای مناطق متنوع با زبان‌ها، فرهنگ‌ها، غذاها و چشم‌اندازهای منحصربه‌فرد است.', heroImage: 'site-img/spian/spain-flagh.png', capital: 'Madrid', currency: 'Euro (€)', language: 'Spanish', coordinates: { lat: 40.4637, lng: -3.7492 }, cities: ['barcelona'], bestTimeToVisit: 'May–June, September–October', popularFor: ['Sagrada Família', 'Tapas', 'Flamenco', 'Beaches', 'Gaudí'] },
  iran: { id: 'iran', slug: 'iran', name: 'iran', nameFa: 'ایران', continent: 'Asia', description: 'ran is home to one of the world’s oldest great continuous civilizations. The land was first unified under the Medes in the 7th century BC, and in the 6th century BC, it reached the height of its territorial expansion when Cyrus the Great founded the Achaemenid Empire. In the 4th century BC, Alexander the Great conquered the empire.', descriptionFa: 'سرزمین ایران، که یکی از کهن‌ترین تمدن‌های بزرگِ پیوستهٔ جهان را در خود جای داده است، نخستین بار در سدهٔ هفتم پیش از میلاد تحت قوم ماد یکپارچه شد و در سدهٔ ششم پیش از میلاد، هنگامی که کوروش بزرگ، شاهنشاهی هخامنشی را بنیان نهاد، به اوج گسترهٔ سرزمینی خود رسید. در سدهٔ چهارم پیش از میلاد، اسکندر کبیر این شاهنشاهی را فتح کرد', heroImage: 'site-img/iran/iran-flag.png', capital: 'Tehran', currency: 'Rial', language: 'Persian', coordinates: { lat: 35.6892, lng: 51.3890 }, cities: ['Tehran'], bestTimeToVisit: 'April–May, September–November', popularFor: ['Milad Tower", "Azadi Tower", "Tochal Mountain", "Darband", "Kebab", "Grand Bazaar", "Traditional Tea Houses", "National Jewelry Museum'] },
};

export const trendingDestinations = [
  { city: cities.paris, rank: 1, trend: '+12%' },
  { city: cities.tokyo, rank: 2, trend: '+28%' },
  { city: cities.istanbul, rank: 3, trend: '+19%' },
  { city: cities.barcelona, rank: 4, trend: '+8%' },
  { city: cities['new-york'], rank: 5, trend: '+5%' },
  { city: cities.dubai, rank: 6, trend: '+22%' },
  { city: cities.tehran, rank: 7, trend: '+18%' },
];

export const allCitiesList = Object.values(cities);
export const allCountriesList = Object.values(countries);
export const allAttractionsList = Object.values(attractions);
