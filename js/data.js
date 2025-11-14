// Base currency is GBP
const baseCurrency = "GBP";

const currencyRates = {
  GBP: 1,
  EUR: 1.15,  // example rate
  TRY: 34,    // example rate
  INR: 108,   // example rate
  USD: 1.25   // example rate
};

// Each place 1–6 (you can edit these to match your real trip)
const placeCosts = [
{

  id: 1,
  place: "Istanbul",
  nights: 2,
  room: 240, // total for 2 nights
  food: 80,
  transport: 76, // 6 airport + 20 local + 50 misc
  activities: 245, // total of all ticketed activities

  about:
    "Istanbul is a historic city that connects Europe and Asia. It is known for mosques, palaces, bazaars, ferries and beautiful Bosphorus views. A perfect mix of culture, food, history and modern life.",

  image:
    "Images/Istanbul skyline at sunset hjjk.jpg",

  location: "Sultanahmet, Istanbul, Turkey",

  mapUrl: "https://maps.google.com/?q=Sultanahmet+Istanbul",

  highlights: [
    "Hagia Sophia – £25",
    "Blue Mosque – Free Entry",
    "Topkapi Palace – £30",
    "Grand Bazaar – Free Entry",
    "Spice Bazaar – Free Entry",
    "Bosphorus Cruise – £15",
    "Galata Tower – £25",
    "Dolmabahçe Palace – £20"
  ],

  // ⭐ FIXED → desc is now visible in your page properly
  placesDetails: [
    {
      name: "Hagia Sophia",
      price: 25,
      location: "Sultanahmet Square, Fatih, Istanbul",
      map: "https://maps.google.com/?q=Hagia+Sophia+Istanbul",
      desc:
        "Hagia Sophia is one of the most iconic landmarks in the world. Known for its massive dome, Islamic calligraphy, ancient mosaics and 1,500 years of history."
    },
    {
      name: "Blue Mosque",
      price: 0,
      location: "Sultanahmet, Fatih, Istanbul",
      map: "https://maps.google.com/?q=Blue+Mosque+Istanbul",
      desc:
        "The Blue Mosque is famous for its blue Iznik tiles, six minarets and peaceful Islamic architecture. A must-visit landmark in Istanbul."
    },
    {
      name: "Topkapi Palace",
      price: 30,
      location: "Cankurtaran, Fatih, Istanbul",
      map: "https://maps.google.com/?q=Topkapi+Palace",
      desc:
        "Topkapi Palace was the Ottoman Sultan’s residence for nearly 400 years. Includes imperial courtyards, sacred relics and amazing Golden Horn views."
    },
    {
      name: "Grand Bazaar",
      price: 0,
      location: "Beyazıt, Fatih, Istanbul",
      map: "https://maps.google.com/?q=Grand+Bazaar+Istanbul",
      desc:
        "One of the largest covered markets in the world with 4,000+ shops selling spices, sweets, carpets, jewellery, lanterns and souvenirs."
    },
    {
      name: "Spice Bazaar",
      price: 0,
      location: "Rüstem Paşa, Fatih, Istanbul",
      map: "https://maps.google.com/?q=Spice+Bazaar+Istanbul",
      desc:
        "Famous market for Turkish tea, saffron, dried fruits, nuts, spices and traditional sweets. A colourful food paradise."
    },
    {
      name: "Bosphorus Cruise",
      price: 15,
      location: "Eminönü Ferry Terminal, Istanbul",
      map: "https://maps.google.com/?q=Eminonu+Ferry+Istanbul",
      desc:
        "A scenic boat tour between Europe and Asia offering views of palaces, mansions, bridges and the Istanbul skyline."
    },
    {
      name: "Galata Tower",
      price: 25,
      location: "Galata, Beyoğlu, Istanbul",
      map: "https://maps.google.com/?q=Galata+Tower+Istanbul",
      desc:
        "A medieval tower offering stunning 360° panoramic views of Istanbul, especially beautiful during sunset."
    },
    {
      name: "Dolmabahçe Palace",
      price: 20,
      location: "Vişnezade, Beşiktaş, Istanbul",
      map: "https://maps.google.com/?q=Dolmabahce+Palace+Istanbul",
      desc:
        "A 19th-century European-style palace with crystal chandeliers, royal halls, marble staircases and Bosphorus waterfront views."
    }
  ]

},
  {
  id: 2,
  place: "Cappadocia",
  nights: 4,
  room: 520, // 4 nights x average £130
  food: 130,
  transport: 150,
  activities: 420,

  about:
    "A magical region full of fairy chimneys, hot air balloons, adventure tours and ancient underground cities. A 4-day stay offers the perfect balance of adventure, culture, history and breathtaking landscapes.",

  image: "Images/cappadoia.avif",

  location: "Göreme, Cappadocia, Turkey",
  mapUrl: "https://maps.google.com/?q=Goreme+Cappadocia",

  highlights: [
    "Sunrise hot air balloon ride",
    "ATV sunset tour",
    "Göreme Open Air Museum",
    "Green Tour (South Cappadocia)",
    "Red Tour (North Cappadocia)",
    "Underground City",
    "Love Valley & Pigeon Valley"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Arrival + Red Valley Sunset",
      details: [
        "Arrive at Kayseri / Nevşehir Airport",
        "Check-in at Göreme cave hotel",
        "Explore Göreme town",
        "Red Valley sunset viewpoint"
      ]
    },
    {
      day: "Day 2",
      title: "Sunrise Balloon + Red Tour",
      details: [
        "Sunrise Hot Air Balloon Ride",
        "Uchisar Castle",
        "Love Valley viewpoint",
        "Pasabag (Monk’s Valley)",
        "Avanos Pottery Workshop",
        "Imagination Valley"
      ]
    },
    {
      day: "Day 3",
      title: "Green Tour + Underground City",
      details: [
        "Derinkuyu Underground City",
        "Ihlara Valley trekking",
        "Selime Monastery",
        "Pigeon Valley viewpoint"
      ]
    },
    {
      day: "Day 4",
      title: "Göreme Museum + ATV Sunset Tour",
      details: [
        "Göreme Open Air Museum",
        "Love Valley or Pigeon Valley",
        "Shopping in Göreme",
        "ATV Sunset Safari"
      ]
    }
  ],

  placesDetails: [
    {
      name: "Sunrise Hot Air Balloon Ride",
      price: 150,
      location: "Göreme Balloons Takeoff Zone, Cappadocia",
      map: "https://maps.google.com/?q=Goreme+Hot+Air+Balloon+Takeoff",
      desc:
        "Breathtaking sunrise flight over valleys, fairy chimneys and Göreme National Park. A Cappadocia essential."
    },
    {
      name: "ATV Sunset Tour",
      price: 35,
      location: "Göreme Quad Safari Point, Cappadocia",
      map: "https://maps.google.com/?q=Goreme+ATV+Tour",
      desc:
        "Adventure ride through Red, Rose and Sword Valleys ending with a beautiful sunset panorama."
    },
    {
      name: "Göreme Open Air Museum",
      price: 10,
      location: "Göreme, Cappadocia",
      map: "https://maps.google.com/?q=Goreme+Open+Air+Museum",
      desc:
        "UNESCO World Heritage site with ancient cave churches, frescoes and stone monasteries."
    },
    {
      name: "Green Tour (South Cappadocia)",
      price: 45,
      location: "Göreme Tour Meeting Point",
      map: "https://maps.google.com/?q=Goreme+Green+Tour",
      desc:
        "Covers Underground City, Ihlara Valley, Selime Monastery, and major southern Cappadocia landmarks."
    },
    {
      name: "Red Tour (North Cappadocia)",
      price: 35,
      location: "Göreme Tour Center",
      map: "https://maps.google.com/?q=Goreme+Red+Tour",
      desc:
        "Includes Uchisar Castle, Love Valley, Pasabag Fairy Chimneys, Avanos and Imagination Valley."
    },
    {
      name: "Derinkuyu Underground City",
      price: 10,
      location: "Derinkuyu, Cappadocia",
      map: "https://maps.google.com/?q=Derinkuyu+Underground+City",
      desc:
        "An ancient 8-level underground city used for protection by early civilisations."
    },
    {
      name: "Love Valley",
      price: 0,
      location: "Göreme, Cappadocia",
      map: "https://maps.google.com/?q=Love+Valley+Cappadocia",
      desc:
        "Famous for tall natural rock pillars and beautiful sunrise/sunset views."
    },
    {
      name: "Pigeon Valley",
      price: 0,
      location: "Göreme-Uchisar Road",
      map: "https://maps.google.com/?q=Pigeon+Valley+Cappadocia",
      desc:
        "Scenic hiking valley with ancient pigeon houses carved into the cliffs."
    },
    {
      name: "Uchisar Castle",
      price: 8,
      location: "Uçhisar, Cappadocia",
      map: "https://maps.google.com/?q=Uchisar+Castle",
      desc:
        "Highest viewpoint in Cappadocia with panoramic 360° views of valleys and Göreme."
    }
  ]
},
  
    {
  id: 3,
  place: "Antalya",
  nights: 2,
  room: 180, // 2 nights
  food: 70,
  transport: 60,
  activities: 85,

  about:
    "Antalya is a stunning coastal city known for its turquoise beaches, ancient ruins, waterfalls and scenic cable car views. It is one of Turkey’s most popular Mediterranean destinations with a perfect mix of nature, history and relaxation.",

  image: "Images/Antalya.jpg",

  location: "Antalya, Turkey",
  mapUrl: "https://maps.google.com/?q=Antalya+Turkey",

  highlights: [
    "Kaleiçi Old Town",
    "Hadrian’s Gate",
    "Konyaaltı Beach",
    "Düden Waterfalls",
    "Tünektepe Cable Car"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Old Town + Waterfalls",
      details: [
        "Explore Kaleiçi Old Town",
        "Visit Hadrian’s Gate",
        "Hidirlik Tower viewpoint",
        "Antalya Marina walk",
        "Visit Lower Düden Waterfalls",
        "Sunset at Karaalioğlu Park"
      ]
    },
    {
      day: "Day 2",
      title: "Beaches + Cable Car",
      details: [
        "Konyaaltı Beach (morning)",
        "Tünektepe Cable Car ride",
        "Upper Düden Waterfalls",
        "Evening in Old Town"
      ]
    }
  ],

  placesDetails: [
    {
      name: "Kaleiçi Old Town",
      price: 0,
      location: "Kaleiçi, Muratpaşa, Antalya",
      map: "https://maps.google.com/?q=Kaleiçi+Antalya",
      desc:
        "Historic district with narrow stone streets, traditional houses, boutique shops and cafes. The heart of Antalya’s old architecture."
    },
    {
      name: "Hadrian’s Gate",
      price: 0,
      location: "Barbaros, Muratpaşa, Antalya",
      map: "https://maps.google.com/?q=Hadrian's+Gate+Antalya",
      desc:
        "A monumental Roman gateway built in 130 AD to honor Emperor Hadrian. One of Antalya’s most iconic landmarks."
    },
    {
      name: "Konyaaltı Beach",
      price: 0,
      location: "Konyaaltı, Antalya",
      map: "https://maps.google.com/?q=Konyaalti+Beach",
      desc:
        "One of the best beaches in Antalya with crystal blue Mediterranean waters and stunning mountain views."
    },
    {
      name: "Düden Waterfalls (Lower)",
      price: 0,
      location: "Lara Road, Antalya",
      map: "https://maps.google.com/?q=Lower+Duden+Waterfall",
      desc:
        "A dramatic waterfall that drops directly into the Mediterranean Sea. Best viewed from the park or a boat tour."
    },
    {
      name: "Düden Waterfalls (Upper)",
      price: 5,
      location: "Kepez, Antalya",
      map: "https://maps.google.com/?q=Upper+Duden+Waterfall",
      desc:
        "Located inside a peaceful nature park with caves, picnic areas and lush surroundings. Entry ticket is required."
    },
    {
      name: "Tünektepe Cable Car",
      price: 5,
      location: "Konyaaltı, Antalya",
      map: "https://maps.google.com/?q=Tunektepe+Cable+Car",
      desc:
        "A scenic cable car ride to the top of Tünektepe Hill offering panoramic views of Antalya and the Mediterranean coast."
    },
    {
      name: "Hidirlik Tower",
      price: 0,
      location: "Karaalioğlu Park, Antalya",
      map: "https://maps.google.com/?q=Hidirlik+Tower",
      desc:
        "A Roman-era stone tower located near the sea cliff. Popular for sunset views over the Mediterranean."
    }
  ]
  },

  {
  id: 4,
  place: "Pamukkale",
  nights: 1,
  room: 60,
  food: 25,
  transport: 40,
  activities: 45,

  about:
    "Pamukkale is famous for its stunning white travertine terraces filled with warm mineral water and the ancient Roman city of Hierapolis. A UNESCO World Heritage Site, Pamukkale is perfect for a short 1-day exploration.",

  image: "Images/Pamukkale.jpg",

  location: "Pamukkale, Denizli, Turkey",
  mapUrl: "https://maps.google.com/?q=Pamukkale+Turkey",

  highlights: [
    "White Travertine Terraces",
    "Cleopatra Antique Pool",
    "Hierapolis Ancient City",
    "Roman Theatre",
    "Archaeology Museum"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Travertines + Thermal Pool + Hierapolis",
      details: [
        "Pamukkale Travertine Terraces walk",
        "Cleopatra Antique Thermal Pool",
        "Hierapolis Ancient City",
        "Roman Theatre",
        "Temple of Apollo",
        "Ancient Roman baths",
        "Hierapolis Archaeology Museum",
        "Natural Park Lake walk",
        "Sunset at the white cliffs"
      ]
    }
  ],

  placesDetails: [
    {
      name: "Pamukkale Travertine Terraces",
      price: 0,
      location: "Pamukkale Village, Denizli",
      map: "https://maps.google.com/?q=Pamukkale+Travertines",
      desc:
        "Terraced white mineral formations created by natural thermal water over thousands of years. The most iconic attraction in Pamukkale."
    },
    {
      name: "Cleopatra Antique Pool",
      price: 10,
      location: "Hierapolis, Pamukkale",
      map: "https://maps.google.com/?q=Pamukkale+Antique+Pool",
      desc:
        "A warm thermal pool filled with ancient fallen Roman columns where you can swim in mineral-rich healing water."
    },
    {
      name: "Hierapolis Ancient City",
      price: 10,
      location: "Hierapolis, Pamukkale",
      map: "https://maps.google.com/?q=Hierapolis+Ancient+City",
      desc:
        "An ancient Greco-Roman spa city featuring temples, thermal baths, columned streets and the famous Roman Theatre."
    },
    {
      name: "Roman Theatre (Hierapolis)",
      price: 0,
      location: "Hierapolis, Pamukkale",
      map: "https://maps.google.com/?q=Hierapolis+Roman+Theatre",
      desc:
        "One of the best-preserved ancient theatres in Turkey, offering panoramic views over the archaeological site."
    },
    {
      name: "Hierapolis Archaeology Museum",
      price: 5,
      location: "Hierapolis, Pamukkale",
      map: "https://maps.google.com/?q=Hierapolis+Museum",
      desc:
        "Museum showcasing Roman sarcophagi, sculptures, ancient relics, and artefacts discovered across Pamukkale and Hierapolis."
    },
    {
      name: "Pamukkale Natural Park Lake",
      price: 0,
      location: "Pamukkale Natural Park, Denizli",
      map: "https://maps.google.com/?q=Pamukkale+Lake",
      desc:
        "A peaceful lake located at the foot of the travertines, perfect for relaxing, walking and taking beautiful landscape photos."
    }
  ]
},

  {
  id: 5,
  place: "Konya",
  nights: 1,
  room: 50,
  food: 25,
  transport: 30,
  activities: 25,

  about:
    "Konya is one of Turkey’s oldest cities and the spiritual home of the poet Rumi and the Whirling Dervishes. It has a calm, traditional atmosphere with beautiful mosques, museums and historic streets.",

  image: "Images/konya.jpg",

  location: "Konya, Turkey",
  mapUrl: "https://maps.google.com/?q=Konya+Turkey",

  highlights: [
    "Mevlana Museum (Rumi’s Tomb)",
    "Selimiye Mosque",
    "Alaeddin Mosque & Hill",
    "Karatay Madrasa Museum",
    "Old Konya Bazaar"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Rumi & Historic Konya",
      details: [
        "Mevlana Museum (Rumi’s Tomb)",
        "Selimiye Mosque",
        "Old Konya Bazaar streets",
        "Alaeddin Mosque & Alaeddin Hill",
        "Karatay Madrasa Museum",
        "Optional Whirling Dervish Ceremony"
      ]
    }
  ],

  placesDetails: [
    {
      name: "Mevlana Museum (Rumi’s Tomb)",
      price: 0,
      location: "Aziziye, Konya",
      map: "https://maps.google.com/?q=Mevlana+Museum+Konya",
      desc:
        "The most famous landmark in Konya and the resting place of the poet and mystic Rumi. A spiritual museum with Islamic artefacts, calligraphy and Sufi history."
    },
    {
      name: "Selimiye Mosque",
      price: 0,
      location: "Next to Mevlana Museum, Konya",
      map: "https://maps.google.com/?q=Selimiye+Mosque+Konya",
      desc:
        "An elegant Ottoman mosque located beside the Mevlana Museum. A peaceful place for reflection and traditional architecture."
    },
    {
      name: "Alaeddin Mosque & Hill",
      price: 0,
      location: "Alaeddin Hill, Konya",
      map: "https://maps.google.com/?q=Alaeddin+Mosque+Konya",
      desc:
        "One of the oldest mosques in Konya, built on a hill with views across the city. Surrounded by a small park ideal for a short walk."
    },
    {
      name: "Karatay Madrasa Museum",
      price: 3,
      location: "Karatay, Konya",
      map: "https://maps.google.com/?q=Karatay+Madrasa+Museum",
      desc:
        "A Seljuk-era madrasa (Islamic school) now turned into a museum showcasing beautiful turquoise tiles, Islamic art and historic architecture."
    },
    {
      name: "Old Konya Bazaar Streets",
      price: 0,
      location: "Around Mevlana Museum area, Konya",
      map: "https://maps.google.com/?q=Konya+Bazaars",
      desc:
        "Traditional shopping streets with local shops, tea houses and sweet shops selling Turkish delight and Konya’s famous cuisine."
    }
  ]
},

{
  id: 6,
  place: "Izmir",
  nights: 2,
  room: 160,
  food: 70,
  transport: 70,
  activities: 80,

  about:
    "Izmir is a laid-back Aegean coastal city with a beautiful seaside promenade, traditional bazaars, nearby ancient ruins and easy access to beaches and small towns like Çeşme and Alaçatı.",

  image: "Images/Izmir.jpg",

  location: "Izmir, Turkey",
  mapUrl: "https://maps.google.com/?q=Izmir+Turkey",

  highlights: [
    "Konak Square & Clock Tower",
    "Kemeraltı Bazaar",
    "Kordon Seaside Promenade",
    "Agora of Smyrna",
    "Day trip to Ephesus or Çeşme / Alaçatı"
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "City & Seaside Promenade",
      details: [
        "Konak Square & Izmir Clock Tower",
        "Kemeraltı Bazaar walk",
        "Hisar Mosque area",
        "Agora of Smyrna (ancient ruins)",
        "Evening at Kordon Seaside Promenade"
      ]
    },
    {
      day: "Day 2",
      title: "Day Trip – Ephesus or Çeşme / Alaçatı",
      details: [
        "Option 1: Ephesus Ancient City (full-day tour)",
        "Option 2: Çeşme beach & Alaçatı stone town",
        "Return to Izmir in the evening"
      ]
    }
  ],

  placesDetails: [
    {
      name: "Konak Square & Izmir Clock Tower",
      price: 0,
      location: "Konak, Izmir",
      map: "https://maps.google.com/?q=Izmir+Clock+Tower",
      desc:
        "Central square of Izmir featuring the iconic Ottoman-style clock tower and a lively open space surrounded by city life."
    },
    {
      name: "Kemeraltı Bazaar",
      price: 0,
      location: "Konak, Izmir",
      map: "https://maps.google.com/?q=Kemeraltı+Bazaar",
      desc:
        "A historic covered bazaar filled with shops, cafes, spice stores, sweet shops and local handicrafts."
    },
    {
      name: "Agora of Smyrna",
      price: 5,
      location: "Namazgah, Izmir",
      map: "https://maps.google.com/?q=Agora+of+Smyrna",
      desc:
        "Ancient ruins of the old city of Smyrna with stone arches, columns and archaeological remains in the middle of modern Izmir."
    },
    {
      name: "Kordon Seaside Promenade",
      price: 0,
      location: "Alsancak, Izmir",
      map: "https://maps.google.com/?q=Kordon+Izmir",
      desc:
        "A long waterfront walkway where locals relax, walk, cycle and enjoy sunset views over the Aegean Sea."
    },
    {
      name: "Ephesus Ancient City (Day Trip Option)",
      price: 40,
      location: "Selçuk, near Izmir",
      map: "https://maps.google.com/?q=Ephesus+Ancient+City",
      desc:
        "One of the best-preserved ancient cities in the world with the Library of Celsus, Great Theatre and marble streets."
    },
    {
      name: "Çeşme & Alaçatı (Day Trip Option)",
      price: 25,
      location: "Çeşme Peninsula, near Izmir",
      map: "https://maps.google.com/?q=Cesme+Alaçatı",
      desc:
        "Çeşme offers beaches and a marina, while Alaçatı is a picturesque town with stone houses, narrow streets and cosy cafés."
    }
  ]
}

];
