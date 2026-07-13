export interface FriendData {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  heroImg: string;
  subtitle: string;
  greeting?: string;
  greetingTrans?: string;
  intro: string;
  message: string[];
  verse: {
    text: string;
    ref: string;
    sub?: string;
  };
  ending: string[];
  photos: string[];
  timeline?: {
    title: string;
    description: string;
    img: string;
  }[];
  prayer?: {
    title: string;
    body: string[];
  };
  videoUrl?: string;
  encouragement?: {
    title: string;
    body: string[];
  };
}

export const friends: FriendData[] = [
  {
    id: 'shopia',
    name: 'Shopia',
    emoji: '🌸',
    tagline: 'Graceful & Inspiring',
    theme: {
      primary: 'bg-[#F8F6F2]',
      secondary: 'bg-[#E8DDD4]',
      accent: 'text-[#C7A86D]',
      text: 'text-[#5A4634]',
    },
    heroImg: 'https://files.catbox.moe/61uhgb.jpg',
    subtitle: "Thank you for becoming one of God's beautiful blessings in my journey.",
    greeting: '안녕하세요, Shopia.\n정말 감사합니다.\n하나님의 축복이 항상 함께하시길 바랍니다.',
    greetingTrans: '(Hello Shopia. Thank you so much. May God\'s blessings always be with you.)',
    intro: "I never expected that joining this ministry would allow me to meet wonderful people from another country. Although our cultures, languages, and daily lives are different, I believe God allows people to meet with a purpose. Some meetings last only a short time, but they leave memories that stay much longer. Thank you for becoming one of those beautiful memories.",
    message: [
      "I want to thank you sincerely for serving so faithfully in this ministry. Every single smile you shared and every act of kindness you showed became a deep encouragement to me and everyone around us.",
      "I apologize if our communication sometimes felt difficult because of language differences. There were moments when I wanted to say so many things but simply couldn't express them well in English or Korean.",
      "But this experience has made me want to learn Korean and improve my English much more seriously. Not because I have to, but because I hope that if God allows us to meet again someday, we can talk comfortably without any language becoming a barrier between us.",
      "I wish you all the very best in your university life. I pray that God gives you wisdom, strength, peace, and joy during every semester, assignment, and challenge you face.",
      "I am also praying specifically for Team Jeju. May God continue to bless every single member. May every ministry you participate in become a blessing for many people, and may you all continue growing deeper in faith together.",
      "Maybe someday we can continue saying hello through Instagram. If you have some free time, maybe you can teach me a little Korean, and maybe help me when my English is not correct. I think that would be a lot of fun, and I would appreciate it so much.",
      "Thank you once again for everything. Meeting you became one of the beautiful gifts God gave me during this ministry. You have left an unforgettable mark in my heart."
    ],
    verse: {
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      ref: "Proverbs 3:5-6",
      sub: "Sometimes we don't know where tomorrow will lead us. But when we trust God, He always prepares the best path."
    },
    ending: [
      "Thank You, Shopia.",
      "Thank you for every smile.",
      "Thank you for every kindness.",
      "Thank you for every memory.",
      "",
      "May God continue guiding every step of your life.",
      "",
      "Until We Meet Again.",
      "",
      "God Bless You Always."
    ],
    photos: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop'
    ],
    timeline: [
      {
        title: "First Meeting",
        description: "The very first moment we crossed paths, a beautiful beginning guided by God.",
        img: "https://files.catbox.moe/3lnb1s.jpg"
      },
      {
        title: "Serving Together",
        description: "Working side by side in ministry, sharing a heart for God's work.",
        img: "https://files.catbox.moe/dnb16c.jpg"
      },
      {
        title: "Learning Together",
        description: "Bridging differences of language and culture with patience and grace.",
        img: "https://files.catbox.moe/a9p322.jpg"
      },
      {
        title: "Sharing Smiles",
        description: "Small moments of joy and laughter that lightened every day of service.",
        img: "https://files.catbox.moe/6ngais.jpg"
      },
      {
        title: "Today with Shopia",
        description: "A beautiful present filled with cherished memories, walking forward together with gratitude and joy.",
        img: "https://files.catbox.moe/ouk1af.jpg"
      }
    ],
    prayer: {
      title: "A Small Prayer For You",
      body: [
        "Lord,",
        "Thank You for allowing our paths to cross.",
        "Please continue guiding Shopia in every step she takes.",
        "Bless her studies.",
        "Bless her family.",
        "Bless her ministry.",
        "Give her strength when she feels tired.",
        "Give her peace when life becomes difficult.",
        "Protect her wherever she goes.",
        "May she always experience Your endless grace and love.",
        "In Jesus' Name.",
        "Amen."
      ]
    },
    videoUrl: undefined // Set to undefined so section hides automatically as requested
  },
  {
    id: 'bell',
    name: 'Bell',
    emoji: '🌿',
    tagline: 'Peaceful & Loyal',
    theme: {
      primary: 'bg-[#F0F4F1]',
      secondary: 'bg-[#E2E8E4]',
      accent: 'text-[#5A4634]',
      text: 'text-[#4A5568]',
    },
    heroImg: 'https://files.catbox.moe/1fi2so.jpg',
    subtitle: 'You are stronger than you think because God walks with you every day.',
    greeting: '안녕하세요, Bell.\n항상 건강하시고 하나님의 평안이 함께하시길 바랍니다.',
    greetingTrans: '(Hello Bell. Wish you good health always, and may God\'s peace be with you.)',
    intro: "Meeting people from different countries reminds us how amazing God's plan is. Although we did not have many conversations because of language differences, I am still thankful that God allowed us to meet. Some friendships are built not only through words but also through kindness, smiles, and serving together.",
    message: [
      "I want to thank you sincerely for serving together with us in this ministry. Even though we had different languages, your faithfulness, hard work, and presence were a truly wonderful encouragement to me.",
      "When I heard about your health, it deeply moved me to care and to keep you constantly in my daily prayers. But please do not feel discouraged or overwhelmed; focus on God's endless strength instead of any illness, for He is our ultimate protector.",
      "I encourage you to continue trusting God every single day. He holds your life securely in His hands, and I truly believe He has a incredibly beautiful purpose and plan laid out for your future.",
      "Although language sometimes became a barrier between us and we couldn't speak as much as we wanted to, I still deeply appreciate and cherish every single moment and smile we shared during this ministry.",
      "I pray that God continues to bless you with immense courage, hope, joy, and peace. May His comforting presence fill your heart and strengthen you in your university studies, your home life, and everything you do.",
      "Thank you once again, Bell, for becoming a beautiful part of this ministry journey. You have been a quiet strength and a real blessing to us all."
    ],
    verse: {
      text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
      ref: "Isaiah 41:10",
      sub: "When life becomes difficult, remember that God never lets go of your hand."
    },
    prayer: {
      title: "A Prayer For Bell",
      body: [
        "Heavenly Father,",
        "Thank You for allowing Bell to become part of this wonderful journey.",
        "Please continue protecting her every day.",
        "Give her strength when she feels weak.",
        "Give her peace when she feels worried.",
        "Fill her heart with hope and joy.",
        "Bless her studies, family, ministry, and future.",
        "May she always experience Your amazing love.",
        "In Jesus' Name.",
        "Amen."
      ]
    },
    timeline: [
      {
        title: "Meeting",
        description: "A wonderful moment orchestrated by God, bringing our lives together in His grace.",
        img: "https://files.catbox.moe/nv4toi.jpg"
      },
      {
        title: "Serving Together",
        description: "Working hand-in-hand to serve and spread warmth through this ministry.",
        img: "https://files.catbox.moe/p0i3mj.jpg"
      },
      {
        title: "Learning Together",
        description: "Finding beautiful connections beyond language, learning faith and trust.",
        img: "https://files.catbox.moe/nv4toi.jpg"
      },
      {
        title: "Sharing Smiles",
        description: "Laughter and brief, heartfelt moments of comfort that made the hard work sweet.",
        img: "https://files.catbox.moe/polagj.jpg"
      },
      {
        title: "Today",
        description: "Forever carrying a heart of thankfulness and prayer for you, dear friend.",
        img: "https://files.catbox.moe/yt5mxv.jpg"
      }
    ],
    encouragement: {
      title: "Always Remember",
      body: [
        "You are loved.",
        "You are valuable.",
        "You are never alone.",
        "God is always with you."
      ]
    },
    ending: [
      "Thank You, Bell.",
      "Thank you for your kindness.",
      "Thank you for serving faithfully.",
      "",
      "May God's love continue strengthening your heart every single day.",
      "",
      "Stay Strong.",
      "",
      "Keep Smiling.",
      "",
      "Keep Trusting God.",
      "",
      "God Bless You Always."
    ],
    photos: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472214222541-d510753a4707?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500627869374-13cd993b1115?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop'
    ],
    videoUrl: undefined
  },
  {
    id: 'paul',
    name: 'Paul',
    emoji: '☀️',
    tagline: 'Bright & Encouraging',
    theme: {
      primary: 'bg-[#F0F8FF]',
      secondary: 'bg-[#E1F0FA]',
      accent: 'text-[#C7A86D]',
      text: 'text-[#2C3E50]',
    },
    heroImg: 'https://files.catbox.moe/9gi4te.jpg',
    subtitle: "A true friend is one of God's greatest blessings.",
    greeting: "Hello Paul 👋\nThank you for becoming part of this unforgettable journey.",
    intro: "Sometimes God introduces us to people for only a short season, yet they leave lifelong memories. Serving together reminded me that friendship is built through small moments, laughter, helping one another, and sharing the same purpose. Thank you for becoming one of those unforgettable friends.",
    message: [
      "I want to sincerely thank you for serving together in this ministry. Thank you for every single laugh, every conversation, and every shared experience.",
      "Meeting you became one of the greatest blessings I received during this time. I truly hope that if God wills it, we can meet again next year.",
      "I am praying that God abundantly blesses your studies, your ministry, your family, and every dream you have for your future.",
      "Continue to become a bright blessing wherever you go. Always remember that distance will never erase a genuine friendship.",
      "Thank you once again for everything, my friend."
    ],
    verse: {
      text: "A friend loves at all times.",
      ref: "Proverbs 17:17",
      sub: "May God continue strengthening every friendship that is built through His love."
    },
    prayer: {
      title: "Prayer For Paul",
      body: [
        "Dear Heavenly Father,",
        "Thank You for allowing Paul and me to serve together.",
        "Please continue blessing every step of his journey.",
        "Bless his studies.",
        "Bless his ministry.",
        "Bless his family.",
        "Bless every dream You have prepared for him.",
        "May he always become a light wherever he goes.",
        "Protect him and guide him every day.",
        "Fill his heart with peace, wisdom and joy.",
        "In Jesus' Name.",
        "Amen."
      ]
    },
    timeline: [
      {
        title: "First Meeting",
        description: "The start of a great friendship.",
        img: "https://files.catbox.moe/nv4toi.jpg"
      },
      {
        title: "Serving Together",
        description: "Working side-by-side with joy.",
        img: "https://files.catbox.moe/gm4c82.jpg"
      },
      {
        title: "Helping Each Other",
        description: "A team that always supports one another.",
        img: "https://files.catbox.moe/80xdww.mp4"
      },
      {
        title: "Sharing Joy",
        description: "Laughing and making unforgettable memories.",
        img: "https://files.catbox.moe/gm4c82.jpg"
      },
      {
        title: "Looking Forward",
        description: "Until we meet again next year.",
        img: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=600&auto=format&fit=crop"
      }
    ],
    encouragement: {
      title: "Friendship",
      body: [
        "Friendship is not measured by how often we meet.",
        "It is measured by the kindness we leave in one another's lives."
      ]
    },
    ending: [
      "Thank You, Paul.",
      "Thank you for your friendship.",
      "Thank you for serving together.",
      "Thank you for every smile.",
      "",
      "I truly hope that, if God wills, we can meet again next year.",
      "Until then,",
      "keep smiling,",
      "keep growing,",
      "keep trusting God,",
      "and continue becoming a blessing to many people.",
      "",
      "See You Again, My Friend.",
      "",
      "God Bless You Always."
    ],
    photos: [
      'https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop'
    ],
    videoUrl: undefined
  }
];
