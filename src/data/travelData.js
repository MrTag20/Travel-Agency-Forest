// Central data store for SM Bengal Travel
// Designed for maintainability, transparent factual information, and customizable business details.

export const COMPANY_INFO = {
  name: "SM Bengal Travel",
  legalName: "SM Bengal Travel Services",
  tagline: "Escape Into The Wild — Premier Sundarban Journeys",
  phone: "+91 9088785701",
  whatsapp: "+91 9088785701",
  whatsappNumberDigits: "919088785701",
  email: "info@smbengaltravel.com",
  bookingEmail: "bookings@smbengaltravel.com",
  address: "Kolkata Office: Park Street / Science City Junction, Kolkata, West Bengal 700046",
  departureHub: "Godkhali Ferry Ghat, Gosaba, South 24 Parganas, West Bengal",
  hours: "Monday to Sunday: 7:00 AM – 9:00 PM IST",
  establishedYear: "Local delta operators with licensed forest guides"
};

export const PACKAGES = [
  {
    id: "sundarban-1-day-tour",
    slug: "sundarban-1-day-tour",
    title: "Sundarban 1 Day Express Safari",
    duration: "1 Day (Same Day Return)",
    days: 1,
    nights: 0,
    departure: "Kolkata Pickup or Godkhali Ghat",
    startingPrice: "₹1,499",
    priceNote: "Per person (Group basis) | Private boat quotes available upon enquiry",
    badge: "Best for Quick Escapes",
    image: "/images/boat-safari.jpg",
    alt: "Sundarban boat cruising down calm mangrove creeks",
    shortDescription: "A curated same-day wilderness cruise covering Sajnekhali Watchtower, Mangrove Museum, and serene tidal creeks with freshly prepared Bengali meals served onboard.",
    overview: "Ideal for travelers with limited time who wish to experience the beauty of the Sundarban mangrove delta in a single day. Starting early from Kolkata or directly from Godkhali, this tour features a full-day motorized boat safari, forest checkpoint clearance, and wildlife spotting opportunities.",
    departureOptions: [
      {
        option: "From Kolkata (AC Vehicle Included)",
        price: "Starting from ₹1,999 / person",
        pickupPoint: "Science City / Indian Museum / Ruby General Hospital (5:30 AM)"
      },
      {
        option: "From Godkhali (Direct Boat Boarding)",
        price: "Starting from ₹1,499 / person",
        pickupPoint: "Godkhali Ferry Ghat (8:30 AM - 9:00 AM)"
      }
    ],
    inclusions: [
      "Dedicated motorized safari boat with safety jackets and sun canopy",
      "Government Forest Department permits and boat entry clearance",
      "Experienced government-certified local nature guide",
      "Freshly prepared meals on boat: Morning tea, breakfast, buffet lunch, evening tea & snacks",
      "Sajnekhali Watchtower, Mangrove Interpretation Centre & Crocodile Pond entry",
      "Mineral drinking water throughout the cruise"
    ],
    exclusions: [
      "Any camera fees levied by the Forest Department (if applicable)",
      "Personal expenses, packaged beverages, and gratuities",
      "Pickup from locations outside the designated Kolkata route (available at extra cost)"
    ],
    mealPlan: "Morning Tea & Biscuits, Breakfast (Luchi, Alur Dom, Sweets), Traditional Bengali Lunch (Basmati Rice, Dal, Bhaja, Seasonal Veg, Bhetki/Katla Fish Curry or Chicken, Chutney, Papad), Evening Tea with Snacks.",
    itinerary: [
      {
        time: "05:30 AM",
        title: "Kolkata Departure",
        desc: "Assemble at the designated Kolkata pickup points. Depart in a comfortable AC vehicle driving through the lush South Bengal countryside via Basanti Highway."
      },
      {
        time: "08:30 AM",
        title: "Arrival at Godkhali Ghat & Boat Boarding",
        desc: "Reach Godkhali, the main gateway to the Sundarbans. Board our spacious river safari boat. Fresh tea and hot Bengali breakfast are served as the vessel begins its voyage."
      },
      {
        time: "10:30 AM",
        title: "Sajnekhali Forest Checkpoint & Watchtower",
        desc: "Arrival at Sajnekhali Range Office for forest department entry permits. Visit the watchtower, the Mangrove Interpretation Museum, Bono Bibi temple, and the sweet-water pond frequented by wild boars and deer."
      },
      {
        time: "12:30 PM",
        title: "Tidal Creek Safari & River Cruise",
        desc: "Sail through narrow rivers and labyrinthine creeks. Keep a watchful eye along the mudbanks for basking estuarine crocodiles, water monitor lizards, and kingfishers."
      },
      {
        time: "01:30 PM",
        title: "Authentic Bengali Lunch on Board",
        desc: "Savor a warm, freshly cooked traditional Bengali meal prepared on the boat by our cook while gliding along the tranquil water channels."
      },
      {
        time: "03:30 PM",
        title: "Scenic Return Cruise past Island Villages",
        desc: "Cruise past local delta villages and fishing hamlets, observing traditional delta life. Enjoy evening tea, cookies, and local snacks."
      },
      {
        time: "05:00 PM",
        title: "Arrival at Godkhali & Journey Back to Kolkata",
        desc: "Disembark at Godkhali Ghat. Board your AC return transport, arriving back in Kolkata by approximately 8:30 PM."
      }
    ],
    faq: [
      {
        q: "What is the best departure point for the 1-day tour?",
        a: "If you are staying in Kolkata, we provide pickup and drop service from common hubs like Science City and Indian Museum. If you have your own vehicle, you can drive to Godkhali directly where secure parking is available."
      },
      {
        q: "Can children and seniors participate comfortably?",
        a: "Yes. Our boats are equipped with comfortable seating, shaded roofs, life jackets, and clean western-style restrooms onboard."
      }
    ]
  },
  {
    id: "sundarban-1-night-2-days-package",
    slug: "sundarban-1-night-2-days-package",
    title: "Sundarban 1 Night 2 Days Wilderness Package",
    duration: "1 Night / 2 Days",
    days: 2,
    nights: 1,
    departure: "Kolkata or Godkhali",
    startingPrice: "₹3,499",
    priceNote: "Per person (Twin/Triple Sharing) | AC & Non-AC resort options available",
    badge: "Most Popular Weekend Trip",
    image: "/images/watchtower-view.jpg",
    alt: "View of Sundarban watchtower overlooking the vast green mangrove delta",
    shortDescription: "Experience both daytime safari cruises and peaceful delta nights with an overnight stay in a riverside eco-resort, evening Baul folk music, and watchtower visits.",
    overview: "The perfect weekend getaway to disconnect from city life. This package blends immersive day safaris across Sajnekhali and Sudhanyakhali with an authentic evening in a rural island resort, local cultural performances, and memorable riverside dining.",
    departureOptions: [
      {
        option: "Kolkata to Kolkata Package",
        price: "Starting from ₹3,999 / person (Non-AC) | ₹4,800 / person (AC Room)",
        pickupPoint: "Kolkata Central / South Hubs (7:30 AM Day 1)"
      },
      {
        option: "Godkhali to Godkhali Package",
        price: "Starting from ₹3,499 / person",
        pickupPoint: "Godkhali Ghat (10:30 AM Day 1)"
      }
    ],
    inclusions: [
      "AC or Non-AC transportation from Kolkata (if opted)",
      "1 Night stay at eco-resort / riverside cottage with attached bath",
      "Exclusive boat cruise for both days with safety jackets",
      "All meals: 2 Breakfasts, 2 Lunches, 1 Evening snacks, 1 Dinner",
      "Sajnekhali & Sudhanyakhali Watchtower entry and permits",
      "Local forest guide charges and forest clearance fees",
      "Evening folk music / Baul song performance at resort"
    ],
    exclusions: [
      "Camera entry fees (if levied by forest department)",
      "Personal laundry, room service, or packaged cold beverages",
      "Tips or gratuities"
    ],
    mealPlan: "All meals included. Vegetarian, non-vegetarian (fresh river fish, chicken), and Jain preferences catered with advance notice.",
    itinerary: [
      {
        time: "Day 1 — 07:30 AM to 12:30 PM",
        title: "Departure, Godkhali Boarding & Resort Check-in",
        desc: "Morning pickup from Kolkata. Reach Godkhali Ghat by 11:00 AM. Board the safari boat and cruise across the confluence of rivers to Pakhiralay / Dayapur island. Check in to your eco-resort and enjoy a hearty Bengali lunch."
      },
      {
        time: "Day 1 — 02:30 PM to 06:00 PM",
        title: "Sajnekhali Watchtower & Sunset Cruise",
        desc: "Embark on the afternoon boat safari. Visit Sajnekhali Watchtower, Mangrove Museum, and Bono Bibi temple. Enjoy a picturesque sunset over the delta waters with evening tea."
      },
      {
        time: "Day 1 — 07:00 PM to 10:00 PM",
        title: "Evening Baul Folk Music & Delta Dinner",
        desc: "Relax at the resort courtyard. Enjoy live performance of rustic Bengali Baul songs by local island musicians, followed by warm tea, snacks, and a wholesome dinner."
      },
      {
        time: "Day 2 — 06:30 AM to 01:30 PM",
        title: "Sudhanyakhali Watchtower & Deep Creek Safari",
        desc: "Early morning boat safari into the core buffer zones. Visit Sudhanyakhali Watchtower, renowned for sightings of spotted deer, monitor lizards, and occasionally the Royal Bengal Tiger near the sweet water pond. Breakfast and lunch served onboard."
      },
      {
        time: "Day 2 — 02:30 PM to 06:30 PM",
        title: "Village Walk & Return Journey",
        desc: "Short guided walk through a traditional delta hamlet to interact with friendly local honey collectors and fishermen. Cruise back to Godkhali Ghat and board vehicle to Kolkata."
      }
    ],
    faq: [
      {
        q: "What types of rooms are provided at the resort?",
        a: "We offer clean, comfortable cottages and executive rooms with attached western bathrooms, clean linens, ceiling fans, and power backup. AC rooms are available upon request."
      },
      {
        q: "Is electricity available on the islands?",
        a: "Yes, resorts have grid power supplemented with generator power backup to ensure uninterrupted lighting and fans."
      }
    ]
  },
  {
    id: "sundarban-2-nights-3-days-package",
    slug: "sundarban-2-nights-3-days-package",
    title: "Sundarban 2 Nights 3 Days Deep Mangrove Expedition",
    duration: "2 Nights / 3 Days",
    days: 3,
    nights: 2,
    departure: "Kolkata or Godkhali",
    startingPrice: "₹5,200",
    priceNote: "Per person | Recommended for wildlife & nature enthusiasts",
    badge: "Most Comprehensive Tour",
    image: "/images/tiger-wildlife.jpg",
    alt: "Royal Bengal Tiger on the edge of the mangrove riverbank",
    shortDescription: "Our flagship tour exploring the iconic Dobanki Canopy Walkway, Sudhanyakhali, Sajnekhali, Pirkhali channels, and the breathtaking Panchamukhani confluence.",
    overview: "This three-day immersive voyage provides the ideal depth to experience the world's largest mangrove forest. With ample time on the water, you travel into deeper channels like Dobanki and Panchamukhani where wildlife sightings are highest.",
    departureOptions: [
      {
        option: "Kolkata to Kolkata Package",
        price: "Starting from ₹5,800 / person (Non-AC) | ₹6,800 / person (AC Room)",
        pickupPoint: "Kolkata Pickup Points (07:30 AM Day 1)"
      },
      {
        option: "Godkhali to Godkhali Package",
        price: "Starting from ₹5,200 / person",
        pickupPoint: "Godkhali Ghat (10:30 AM Day 1)"
      }
    ],
    highlights: [
      "Dobanki Canopy Walkway (half-kilometer elevated bridge)",
      "Sudhanyakhali & Sajnekhali Watchtowers",
      "Panchamukhani confluence of 5 rivers",
      "Village cultural tour and local honey collectors' stories"
    ],
    inclusions: [
      "AC transport from Kolkata to Godkhali & return (if opted)",
      "2 Nights accommodation at comfortable riverside eco-resort",
      "Dedicated safari vessel for all three days with certified crew",
      "Full board meal plan (3 Breakfasts, 3 Lunches, 2 Dinners, Evening Snacks)",
      "Dobanki Canopy Walkway, Sudhanyakhali & Sajnekhali entries",
      "All government forest permits and certified naturalist charges",
      "Evening cultural program (Local Baul / tribal dance)"
    ],
    exclusions: [
      "Camera fees if charged by forest authority",
      "Personal items, alcoholic beverages, laundry",
      "Tips to guides and crew"
    ],
    mealPlan: "Delicious multi-course meals featuring authentic Bengali cuisine, freshly procured river catches, country eggs, vegetables, and hot desserts.",
    itinerary: [
      {
        time: "Day 1",
        title: "Arrival, Sajnekhali Watchtower & Delta Sunset",
        desc: "Depart Kolkata in morning, board boat at Godkhali, reach resort for check-in and lunch. Afternoon safari to Sajnekhali Watchtower and Mangrove Museum. Sunset tea on boat, followed by evening cultural program and dinner at resort."
      },
      {
        time: "Day 2",
        title: "Full Day Core Safari: Dobanki Canopy & Sudhanyakhali",
        desc: "Early morning cruise into the deeper delta. Navigate Pirkhali, Gazikhali, and Deulbharani creeks. Walk the half-kilometer caged canopy bridge at Dobanki at 20 feet elevation over the forest floor. Visit the Panchamukhani confluence of 5 rivers. All meals served fresh on boat."
      },
      {
        time: "Day 3",
        title: "Village Heritage Walk, Creek Exploration & Return",
        desc: "Morning visit to an indigenous delta village to observe farming, honey collection techniques, and local life. Final cruise through scenic backwaters before reaching Godkhali by 2:00 PM and returning to Kolkata by evening."
      }
    ],
    faq: [
      {
        q: "What makes Dobanki Canopy Walkway unique?",
        a: "Dobanki features an elevated half-kilometer enclosed pedestrian bridge standing 20 feet above the ground, allowing visitors to view the mangrove forest and wildlife from canopy level."
      },
      {
        q: "What are the chances of seeing a tiger?",
        a: "The Sundarban tiger is wild, elusive, and protected. Sightings depend on natural movement, tides, and luck. While no ethical operator can guarantee sightings, 3-day tours maximize your time on prime waterways where sightings most frequently occur."
      }
    ]
  },
  {
    id: "sundarban-3-nights-4-days-package",
    slug: "sundarban-3-nights-4-days-package",
    title: "Sundarban 3 Nights 4 Days Delta Odyssey",
    duration: "3 Nights / 4 Days",
    days: 4,
    nights: 3,
    departure: "Kolkata or Godkhali",
    startingPrice: "₹7,800",
    priceNote: "Per person | Slow travel & photography focus",
    badge: "Ultimate Immersion",
    image: "/images/mangrove-canopy.jpg",
    alt: "Dense mangrove canopy and waterways of Sundarban delta",
    shortDescription: "A specialized slow-paced expedition for photographers, birdwatchers, and nature purists seeking deep delta exploration including remote watchtowers and quiet creeks.",
    overview: "Designed for those who want unhurried time in nature. Explore remote watchtowers such as Netidhopani with its ancient temple ruins, secluded birding estuaries, and peaceful evening island life across 4 full days.",
    departureOptions: [
      {
        option: "Complete Kolkata Excursion",
        price: "Starting from ₹8,500 / person",
        pickupPoint: "Kolkata Central (7:00 AM Day 1)"
      },
      {
        option: "Godkhali Boarding",
        price: "Starting from ₹7,800 / person",
        pickupPoint: "Godkhali Ghat (10:00 AM Day 1)"
      }
    ],
    highlights: [
      "Full day core safari to Netidhopani ancient temple watchtower",
      "Dobanki Canopy Walkway & Sudhanyakhali deep creeks",
      "Dawn birdwatching safaris for rare kingfishers & raptors",
      "Authentic island honey collectors' heritage & Baul songs"
    ],
    inclusions: [
      "3 Nights resort stay with private cottage accommodation",
      "Full 4-day private / semi-private safari boat access",
      "All meals, refreshments, and evening snacks for 4 days",
      "Permits for Sajnekhali, Sudhanyakhali, Dobanki, and Netidhopani (subject to dept quota)",
      "Expert ornithologist / local naturalist guide",
      "Village tours, Baul song evening, and bonfire"
    ],
    exclusions: [
      "Personal gear and specialized photography permits if applicable",
      "Personal expenses and crew gratuities"
    ],
    mealPlan: "Customizable daily menus with options for regional Bengal specialties, fresh fish, crabs, and customized vegetarian choices.",
    itinerary: [
      {
        time: "Day 1",
        title: "Kolkata to Sundarban, Check-in & Sajnekhali",
        desc: "Journey from Kolkata to Godkhali, boat transfer to resort, lunch, and afternoon safari to Sajnekhali watchtower and visitor center."
      },
      {
        time: "Day 2",
        title: "Sudhanyakhali Watchtower & Deep Creek Safari",
        desc: "Comprehensive exploration of Sudhanyakhali buffer zone, Pirkhali, and Gazikhali creeks. Lunch on the water with birding stops."
      },
      {
        time: "Day 3",
        title: "Dobanki Canopy Walkway & Remote Estuary Expedition",
        desc: "Full day cruise to Dobanki Canopy Walkway and historical Netidhopani ruins. Discover remote delta creeks where mudskippers, otters, and raptors thrive."
      },
      {
        time: "Day 4",
        title: "Morning Birding, Island Craft Tour & Return to Kolkata",
        desc: "Dawn boat cruise for migratory birds followed by island cultural interaction and scenic return cruise to Godkhali. Arrive in Kolkata by evening."
      }
    ],
    faq: [
      {
        q: "Is this package suitable for bird photography?",
        a: "Yes! The extended timeline allows early morning and late afternoon boat positioning when tidal water is calm and birds like the brown-winged kingfisher, masked finfoot, and white-bellied sea eagle are most active."
      }
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "boat-safari",
    title: "Silent Motorboat River Safaris",
    tagline: "Glide through the world's largest mangrove river network",
    image: "/images/boat-safari.jpg",
    alt: "Motorboat cruising along calm river bordered by dense sundari trees",
    desc: "Experience the wilderness from the safety and comfort of our traditional wooden safari boats. Designed with covered observation decks, comfortable seating, safety gear, and onboard kitchens, our vessels navigate narrow creeks during high and low tides.",
    features: ["Shaded observation decks", "Experienced river captains", "Licensed Forest Department guides", "Fresh meals cooked onboard"]
  },
  {
    id: "tiger-wildlife",
    title: "Royal Bengal Tiger & Delta Wildlife",
    tagline: "Track the elusive apex predator in its natural saline habitat",
    image: "/images/tiger-wildlife.jpg",
    alt: "Royal Bengal tiger moving across muddy mangrove shoreline",
    desc: "The Sundarban is home to the world's only mangrove-dwelling tigers, adapted to swim across wide saline rivers. Alongside tigers, discover estuarine crocodiles, spotted deer, wild boars, and smooth-coated otters.",
    features: ["Naturalist-led tracking", "Mudbank crocodile spotting", "Sweetwater pond watchtowers", "Ethical non-intrusive wildlife viewing"]
  },
  {
    id: "watchtowers",
    title: "Canopy Walkways & Watchtowers",
    tagline: "Elevated vantage points above the dense mangrove forest",
    image: "/images/watchtower-view.jpg",
    alt: "High wooden watchtower with panoramic view of Sundarbans forest canopy",
    desc: "Forest department watchtowers like Sajnekhali, Sudhanyakhali, and Dobanki provide safe, elevated views over sweet-water watering holes and dense tree lines. Dobanki's 20-foot-high caged walkway lets you walk above the forest canopy.",
    features: ["20-ft elevated Dobanki bridge", "Overlooks protected watering holes", "Strategic wildlife viewing", "Interpretive signboards"]
  },
  {
    id: "village-culture",
    title: "Island Hamlets & Delta Culture",
    tagline: "Meet the resilient people of the Sundarban islands",
    image: "/images/village-culture.jpg",
    alt: "Peaceful island village in the Sundarban delta with traditional homes",
    desc: "Life in the delta is deeply intertwined with nature and the legend of Bono Bibi—the forest guardian deity worshipped by Hindus and Muslims alike. Walk through quiet villages, witness traditional fishing, and listen to rustic Baul folk music.",
    features: ["Bono Bibi folklore & heritage", "Guided village walks", "Local honey & produce", "Evening Baul music at resort"]
  },
  {
    id: "birdwatching",
    title: "Avian Paradise & Birdwatching",
    tagline: "Over 260 species of resident and migratory birds",
    image: "/images/mangrove-canopy.jpg",
    alt: "Diverse mangrove trees and open delta sky ideal for birding",
    desc: "With 8 distinct species of kingfishers including the rare brown-winged and black-capped kingfishers, alongside white-bellied sea eagles, osprey, and migratory waterbirds, the Sundarban is an international birding hotspot.",
    features: ["8 kingfisher species", "Raptors & sea eagles", "Mudflat waders & egrets", "Early morning quiet creeks"]
  },
  {
    id: "bengali-cuisine",
    title: "Authentic Delta Bengali Cuisine",
    tagline: "Farm-fresh vegetables and local river catches",
    image: "/images/river-sunset.jpg",
    alt: "Sunset over river waters where authentic evening meals are served",
    desc: "One of the standout highlights of an SM Bengal Travel trip is our food. Freshly prepared on the boat and at the resort by experienced local cooks, our meals feature fragrant Gobindobhog and Basmati rice, local river fish, country eggs, and seasonal Bengali sweets.",
    features: ["Freshly prepared on boat", "River fish & chicken options", "Wholesome vegetarian menus", "Traditional Bengali recipes"]
  }
];

export const DESTINATIONS = [
  {
    id: "sajnekhali",
    name: "Sajnekhali Watchtower & Range Office",
    subtitle: "The administrative and educational hub of Sundarban National Park",
    image: "/images/watchtower-view.jpg",
    description: "Located within the buffer zone, Sajnekhali is home to the Forest Department Head Office, the Mangrove Interpretation Centre, Bono Bibi temple, and a crocodile pond. The watchtower overlooks a freshwater pond frequently visited by deer and monitor lizards.",
    highlights: ["Mangrove Museum", "Crocodile Breeding Pond", "Turtle Hatchery", "Forest Checkpoint"]
  },
  {
    id: "sudhanyakhali",
    name: "Sudhanyakhali Watchtower",
    subtitle: "Prime vantage point for big cat and wildlife sightings",
    image: "/images/tiger-wildlife.jpg",
    description: "Sudhanyakhali is one of the most famous watchtowers in the Sundarbans. Behind protective fencing, it commands a wide view over a sweet-water pond where spotted deer, wild boars, and tigers often arrive to drink.",
    highlights: ["Sweet water pond", "Spotted deer herds", "Tiger sighting corridor", "Dense sundari & golpata forest"]
  },
  {
    id: "dobanki",
    name: "Dobanki Canopy Walkway",
    subtitle: "Walk among the treetops on an elevated protected canopy",
    image: "/images/mangrove-canopy.jpg",
    description: "Dobanki offers an extraordinary experience: a half-kilometer-long enclosed walkway raised 20 feet above the ground. It gives travelers a bird's-eye perspective of the forest floor, wildlife, and aerial mangrove roots without disturbing the ecosystem.",
    highlights: ["500-meter canopy bridge", "Elevated tree-level views", "Chital deer sightings", "Tidal creek views"]
  },
  {
    id: "panchamukhani",
    name: "Panchamukhani Confluence",
    subtitle: "The majestic meeting of five mighty delta rivers",
    image: "/images/boat-safari.jpg",
    description: "Panchamukhani is a dramatic natural geographical wonder where five distinct tidal rivers meet. The vast horizon, shifting waters, and dramatic sky make it an unforgettable stop for sunset cruises.",
    highlights: ["Meeting of 5 rivers", "Panoramic delta horizons", "Dolphin spotting spot", "Stunning photography"]
  },
  {
    id: "netidhopani",
    name: "Netidhopani Historical Watchtower",
    subtitle: "Ancient 400-year-old temple ruins steeped in delta lore",
    image: "/images/village-culture.jpg",
    description: "Netidhopani is famous for the ruins of a 400-year-old brick temple associated with the mythological legend of Behula and Lakhindar. Access is regulated by strict Forest Department quotas.",
    highlights: ["Historical temple ruins", "Rich delta mythology", "Deep core buffer waters", "Ancient watchtower"]
  },
  {
    id: "godkhali",
    name: "Godkhali Ferry Ghat",
    subtitle: "The historic departure harbor and gateway to the islands",
    image: "/images/river-sunset.jpg",
    description: "Godkhali is the terminal road point in South 24 Parganas where vehicles from Kolkata transition to river vessels. Its bustling harbor is filled with traditional wooden boats and ferries connecting the mainland with the island archipelago.",
    highlights: ["Road-to-river terminal", "Main embarkation point", "Scenic river harbor", "Local market"]
  }
];

export const TRAVEL_SERVICES = [
  {
    title: "Sanitized Riverside Accommodation",
    desc: "Cozy, hygienic eco-resorts and riverside cottages in Pakhiralay and Dayapur with modern western baths, clean linen, and power backup.",
    icon: "Home"
  },
  {
    title: "Licensed Safari Boats & Captains",
    desc: "Sturdy wooden river vessels adhering to maritime safety standards, with life jackets, shaded seating, clean toilets, and experienced helmsmen.",
    icon: "Ship"
  },
  {
    title: "Freshly Cooked Bengali Meals",
    desc: "Wholesome, hot culinary experiences prepared onboard using fresh local ingredients, customized for non-veg, veg, and special dietary needs.",
    icon: "Utensils"
  },
  {
    title: "AC Transport from Kolkata",
    desc: "Hassle-free transfers from key Kolkata points directly to Godkhali Ghat in sanitized, air-conditioned cars or traveler vans.",
    icon: "Car"
  },
  {
    title: "Forest Permits & Clearance",
    desc: "Complete arrangement of government forest entry permits, boat licenses, passenger clearances, and identity verification.",
    icon: "FileCheck"
  },
  {
    title: "Certified Forest Guides",
    desc: "Accompanied by knowledgeable local naturalists approved by the Forest Department who know the creeks, animal behavior, and birds.",
    icon: "Compass"
  },
  {
    title: "Safety First & Doctor on Call",
    desc: "Comprehensive first-aid kits on all boats, strict compliance with safety rules, and tie-ups with island medical centers for emergency doctor on call.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent & Honest Pricing",
    desc: "No hidden charges, honest package terms, genuine guidance, and clear inclusions so you can travel with complete peace of mind.",
    icon: "BadgePercent"
  }
];

export const FAQS = [
  {
    q: "How do I reach the Sundarbans from Kolkata?",
    a: "The most common route is from Kolkata to Godkhali Ghat by road (approx. 85-95 km, 2.5 to 3 hours driving via the Basanti Highway). From Godkhali, all travel is by motorized boat into the islands. Alternatively, one can take a suburban local train from Sealdah to Canning (1 hour 15 mins), followed by a 45-minute auto or bus ride to Godkhali."
  },
  {
    q: "What is included in SM Bengal Travel tour packages?",
    a: "Our all-inclusive packages include boat safari hire, certified government forest guides, all Forest Department entry and boat permits, 100% freshly cooked meals, drinking water, and accommodation (for overnight tours). AC road transfers from Kolkata can be added to any package."
  },
  {
    q: "Can I spot a Royal Bengal Tiger in the Sundarbans?",
    a: "The Sundarban is home to wild, free-roaming tigers. Because the forest is dense and tigers move silently through mudbanks and creeks, sightings are a matter of luck and nature. While no ethical operator can guarantee sightings, our multi-day packages maximize your time in high-frequency corridors like Sudhanyakhali, Dobanki, and Pirkhali."
  },
  {
    q: "Is a Sundarban tour safe for families, children, and elderly travelers?",
    a: "Yes, completely safe. Our boats are equipped with certified life jackets, sturdy railings, covered rain/sun shades, and clean onboard western toilets. Our resorts are secure with round-the-clock staff. However, travelers should wear comfortable flat shoes for boat boarding."
  },
  {
    q: "Do you offer customized or private family tours?",
    a: "Yes! In addition to fixed group departures, we specialize in private charters for families, corporate teams, and photography groups. Private tours offer flexible departure times, private boats, and customized menus."
  },
  {
    q: "What items should I carry for the trip?",
    a: "Please carry valid government photo IDs (Aadhaar, Passport, or Voter ID—mandatory for forest permits), comfortable light cotton clothing (earthy tones like green, brown, khaki are best), a sun hat, sunglasses, binoculars, power bank, personal medications, and sufficient cash, as ATMs on the islands are limited."
  },
  {
    q: "What is the cancellation and refund policy?",
    a: "We maintain clear and transparent refund guidelines. Cancellations made 7 or more days prior to departure qualify for a partial refund minus permit and reservation expenses. Details are fully documented on our Refund Policy page."
  },
  {
    q: "What is the best time of year to visit?",
    a: "The prime season is October through March when the weather is pleasant, daytime temperatures are mild (15°C to 26°C), and wildlife frequently basks on sunny riverbanks. Monsoons (July-September) offer breathtaking greenery for rain lovers, while summer (April-June) is ideal for peaceful, uncrowded trips."
  }
];

export const BLOG_POSTS = [
  {
    id: "complete-guide-sundarban-trip",
    title: "The Complete Traveler's Guide to Sundarban: Best Time, Routes & Tips",
    date: "October 2026",
    readTime: "6 min read",
    category: "Travel Guide",
    image: "/images/watchtower-view.jpg",
    excerpt: "Everything you need to know before visiting the mangrove kingdom—from planning your journey from Kolkata to choosing between 1-day and 3-day itineraries.",
    content: "Planning a trip to the Sundarbans requires understanding the unique rhythm of the tides. The delta operates on high and low tides, which dictate boat navigation into interior creeks. In this guide, we break down optimal seasons, how to pack, and what to expect during watchtower safaris."
  },
  {
    id: "wildlife-spotting-secrets",
    title: "Tracking Wildlife in the Mangroves: What to Watch for on Boat Safaris",
    date: "September 2026",
    readTime: "5 min read",
    category: "Wildlife & Nature",
    image: "/images/tiger-wildlife.jpg",
    excerpt: "How experienced naturalists identify pugmarks on muddy banks, read alarm calls of chital deer, and spot estuarine crocodiles.",
    content: "The mangrove forest is a living, breathing labyrinth. Unlike savannah safaris where animals are easily visible across open plains, the Sundarban is an exercise in patient observation. Learn how our local guides scan water lines for swimming monitor lizards, kingfishers, and the legendary delta tiger."
  },
  {
    id: "culinary-flavors-of-the-delta",
    title: "Flavors of the Delta: Why Food on Sundarban Safari Boats is Unforgettable",
    date: "August 2026",
    readTime: "4 min read",
    category: "Food & Culture",
    image: "/images/boat-safari.jpg",
    excerpt: "From piping hot morning luchi to freshly caught river fish curries, discover why meals cooked on the boat remain our guests' favorite memory.",
    content: "There is an inexplicable magic to enjoying hot, freshly prepared Bengali meals on a gently swaying wooden boat as mangrove forests drift past your window. Our cooks prepare traditional recipes using whole spices, mustard oil, and fresh morning market produce."
  }
];
