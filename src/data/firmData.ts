import { ServiceItem, InsightArticle, LeadershipMember } from '../types';
import { IMAGES } from './images';

export const FIRM_DETAILS = {
  name: 'Keatlegile Mabena',
  shortName: 'Keatlegile Mabena',
  // Official full positioning
  positioning: 'Speaker | Author | Mentor',
  // Shortened & compact variants for versatile display
  positioningShort: 'Speaker • Author • Mentor',
  positioningCompact: 'Speaker • Author • Mentor',
  positioningPillars: [
    'Speaker',
    'Author',
    'Mentor'
  ],
  positioningPillarsShort: [
    'Speaker',
    'Author',
    'Mentor'
  ],
  brandTerritory: 'Healing • Self-Discovery • Purpose • Confidence • Mentorship • Transformation',
  corePromise: 'Helping people move from pain and uncertainty towards healing, clarity, confidence and purposeful action.',
  contact: {
    phone: '+27 68 567 4848',
    whatsappNumber: '27685674848',
    email: 'info@keatlegilemabena.co.za'
  },
  social: {
    instagram: 'https://www.instagram.com/keatlegile_mabena/',
    facebook: 'https://www.facebook.com/keatlegile.mabena.71/',
    linkedin: 'https://za.linkedin.com/in/keatlegile-mabena-634570112'
  },
  tagline: 'Find Your Direction. Rediscover Your Confidence. Move With Purpose.',
  subtitle: 'Helping people heal, discover purpose, build confidence and move towards meaningful personal growth.'
};

export const BRAND_DETAILS = FIRM_DETAILS;

export const LEADERSHIP: LeadershipMember = {
  name: 'Keatlegile Mabena',
  title: 'Speaker | Author | Mentor',
  admittedStatus: 'Author & Youth Mentor',
  qualifications: [
    'Master of Social Sciences: Population and Sustainable Development (NWU)',
    'Honours Bachelor of Social Science: Population Studies (Cum Laude, NWU)',
    'Bachelor of Social Science: Population and Development Studies (Cum Laude, NWU)',
    'Published Author & Keynote Speaker',
    'Member of Population Association of Southern Africa (PASA)'
  ],
  bio: [
    'Keatlegile Mabena is a purpose-led personal brand centred on speaking, authorship, mentorship, and personal transformation.',
    'The brand grew from lived experience, education, authorship, service and a desire to help others rise beyond difficult beginnings. Early life experiences shaped an understanding of resilience, possibility and transformation.',
    'Keatlegile’s strength lies in bringing together lived experience, authorship, and mentorship in a way that is authentic, practical and relatable.'
  ],
  expertise: [
    'Healing & Personal Transformation',
    'Purpose & Self-Discovery',
    'Confidence & Personal Growth',
    'Mentorship & Personal Guidance',
    'Keynote Speaking & Authorship'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'speaking',
    slug: 'speaking',
    title: 'Speaking',
    subtitle: 'Conversations That Move People',
    shortDescription: 'Meaningful conversations that challenge perspectives, create reflection and inspire purposeful action.',
    heroHeadline: 'Conversations That Move People',
    iconName: 'Mic',
    image: IMAGES.heroBuilding,
    keyAreas: [
      'Healing & Personal Transformation',
      'Purpose & Self-Discovery',
      'Confidence & Personal Growth',
      'Mentorship & Guidance'
    ],
    detailedSections: [
      {
        heading: 'Conversations That Create a Shift',
        content: 'The right conversation can create a shift — a shift in perspective, a shift in confidence, and a shift in direction. Keatlegile speaks on issues at the intersection of personal transformation, purpose, and inner confidence.',
        bullets: [
          'Keynote addresses for conferences, youth gatherings, and community events.',
          'Interactive talks on overcoming hardship, pain, and self-doubt.',
          'Panel discussions and inspirational fireside conversations.'
        ]
      }
    ],
    benefits: [
      'Shift in perspective and mindset',
      'Renewed confidence and clarity',
      'Practical inspiration translating into action'
    ]
  },
  {
    id: 'mentorship',
    slug: 'mentorship',
    title: 'Mentorship',
    subtitle: 'You Don’t Have to Figure Everything Out Alone',
    shortDescription: 'Personalised support for people seeking clarity, confidence, direction and meaningful growth.',
    heroHeadline: 'You Don’t Have to Figure Everything Out Alone',
    iconName: 'Compass',
    image: IMAGES.executiveOffice,
    keyAreas: [
      'Finding Direction & Setting Goals',
      'Overcoming Self-Doubt & Building Confidence',
      'Exploring Purpose & Personal Values',
      'Personal Development & Self-Awareness',
      'Accountability & Sustained Momentum'
    ],
    detailedSections: [
      {
        heading: 'Mentorship for Your Next Chapter',
        content: 'There are moments when information isn’t enough. You need perspective. You need someone to listen, challenge your thinking, and help you see the next step clearly.',
        bullets: [
          'One-on-one structured mentorship journeys.',
          'Guided self-reflection and goal clarification.',
          'Actionable roadmaps to move from uncertainty to purpose.'
        ]
      }
    ],
    benefits: [
      'Personalised direction tailored to your story',
      'Unwavering support and objective perspective',
      'Increased confidence and personal responsibility'
    ]
  },
  {
    id: 'books',
    slug: 'books',
    title: 'Books & Authorship',
    subtitle: 'Words Can Become Windows',
    shortDescription: 'Ideas, stories and reflections that help people understand themselves, their journeys and the possibilities ahead.',
    heroHeadline: 'Words Can Become Windows',
    iconName: 'BookOpen',
    image: IMAGES.gavelBooks,
    keyAreas: [
      'Published & Forthcoming Books',
      'Articles & Reflections on Transformation',
      'Thought Leadership & Writing'
    ],
    detailedSections: [
      {
        heading: 'Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence',
        content: 'Published in 2019 (126 pages, ISBN: 9780620840668). What are your chains? Sometimes the chains are circumstances. Sometimes they are fear. Sometimes they are unresolved experiences. Sometimes they are the beliefs we have developed about ourselves.',
        bullets: [
          'Published: 2019 | Length: 126 pages | ISBN: 9780620840668',
          'Available for direct order and nationwide delivery',
          'Upcoming works currently in development'
        ]
      }
    ],
    benefits: [
      'Language for deep personal experiences',
      'New perspectives on life challenges',
      'Actionable reflections for personal growth'
    ]
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Authentic',
    description: 'Real conversations grounded in lived experience and genuine human connection.',
    icon: 'Heart'
  },
  {
    title: 'Practical',
    description: 'Insight that can translate into meaningful next steps and real-world progress.',
    icon: 'Target'
  },
  {
    title: 'Purposeful',
    description: 'Growth that goes beyond achievement towards lasting meaning and direction.',
    icon: 'Compass'
  },
  {
    title: 'Relatable',
    description: 'A warm, human approach that meets people exactly where they are.',
    icon: 'Users'
  }
];

export const CORE_VALUES = [
  {
    name: 'Healing',
    description: 'Creating space to acknowledge difficult experiences and move towards wholeness.',
    icon: 'Sparkles'
  },
  {
    name: 'Self-Discovery',
    description: 'Helping people understand who they are, what they value, and what they are capable of becoming.',
    icon: 'Search'
  },
  {
    name: 'Purpose',
    description: 'Encouraging intentional choices rather than simply moving through life without direction.',
    icon: 'Anchor'
  },
  {
    name: 'Confidence',
    description: 'Helping people recognise their capabilities and develop the courage to act.',
    icon: 'ShieldCheck'
  },
  {
    name: 'Transformation',
    description: 'Moving beyond insight towards meaningful, purposeful action and positive change.',
    icon: 'RefreshCw'
  }
];

export const WHO_THIS_IS_FOR = [
  'A student preparing for your next chapter',
  'A graduate trying to find your direction',
  'A young professional navigating your career',
  'Someone feeling stuck or uncertain',
  'Someone rebuilding confidence',
  'Someone searching for purpose',
  'A professional considering a change',
  'An emerging leader',
  'An entrepreneur seeking growth',
  'Someone simply trying to understand what comes next'
];

export const TRANSFORMATION_JOURNEY = {
  from: [
    'Pain',
    'Uncertainty',
    'Self-doubt',
    'Stagnation',
    'Confusion',
    'Feeling behind',
    'Limited direction'
  ],
  towards: [
    'Healing',
    'Clarity',
    'Confidence',
    'Purpose',
    'Direction',
    'Growth',
    'Purposeful action'
  ]
};

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: '1',
    slug: 'your-career-is-more-than-a-job',
    title: 'Your Career Is More Than a Job',
    category: 'Governance', // map to allowed string type or extend
    date: '30 August 2026',
    readTime: '4 min read',
    author: 'Keatlegile Mabena',
    summary: 'Career success is not simply about securing a position. It is about understanding your strengths, making intentional choices and continuing to grow.',
    image: IMAGES.executiveOffice,
    keyTakeaways: [
      'A career is an evolving journey of capability and alignment, not just a paycheck.',
      'Intentional choices outweigh passive career progression.',
      'Understanding your core strengths unlocks new opportunities.'
    ],
    content: [
      'A career is more than a job. It is a journey of learning, capability, opportunity and growth.',
      'Yet navigating that journey can be difficult — especially when you are uncertain about your direction, struggling to articulate your strengths or wondering why your progress does not seem to match your potential.',
      'Career success begins with clarity. Before you can move intentionally, you need to understand where you are going, recognise the value you bring, and build the confidence to pursue what comes next.'
    ]
  },
  {
    id: '2',
    slug: 'what-are-you-building-your-life-around',
    title: 'What Are You Building Your Life Around?',
    category: 'Governance',
    date: '18 August 2026',
    readTime: '5 min read',
    author: 'Keatlegile Mabena',
    summary: 'Purpose begins with asking better questions about who you are and what matters to you.',
    image: IMAGES.boardroom,
    keyTakeaways: [
      'Purpose is discovered through deeper self-inquiry rather than external pressure.',
      'Living intentionally transforms daily decisions into meaningful steps.',
      'Your values provide the foundation for sustainable success.'
    ],
    content: [
      'Many people move through life executing tasks, fulfilling expectations, and chasing milestones without ever stopping to ask what they are actually building their lives around.',
      'Purpose begins with asking better questions. Who are you when the noise stops? What do you value when no one is watching? What do you want your life and career to represent?',
      'When you gain clarity on your purpose, your choices become intentional rather than reactive.'
    ]
  },
  {
    id: '3',
    slug: 'when-potential-and-confidence-dont-match',
    title: 'When Your Potential and Your Confidence Don’t Match',
    category: 'Governance',
    date: '05 August 2026',
    readTime: '4 min read',
    author: 'Keatlegile Mabena',
    summary: 'Sometimes the person you could become is waiting for you to believe that becoming is possible.',
    image: IMAGES.gavelBooks,
    keyTakeaways: [
      'Self-doubt often conceals immense untapped capability.',
      'Confidence is built through small, consistent acts of courage.',
      'You do not have to feel completely ready before you begin taking action.'
    ],
    content: [
      'One of the quietest tragedies in personal growth is the gap between what someone is capable of doing and what they believe they can do.',
      'Self-doubt makes small steps feel like insurmountable mountains. It tells you that others belong in rooms that you are not qualified to enter.',
      'Rebuilding confidence requires acknowledging that capability grows through action. Sometimes the person you could become is waiting for you to believe that becoming is possible.'
    ]
  },
  {
    id: '4',
    slug: 'outgrow-your-old-direction',
    title: 'You Are Allowed to Outgrow Your Old Direction',
    category: 'Governance',
    date: '22 July 2026',
    readTime: '5 min read',
    author: 'Keatlegile Mabena',
    summary: 'Growth can mean changing your mind, changing direction and choosing a path that better reflects who you are becoming.',
    image: IMAGES.southAfricaArchitecture,
    keyTakeaways: [
      'Changing course is a mark of growth, not failure.',
      'Holding onto an old path out of familiarity restricts your future.',
      'Give yourself permission to choose what aligns with who you are today.'
    ],
    content: [
      'It is easy to stay on a path simply because you have already spent time walking it.',
      'However, growth can mean changing your mind, changing direction, and choosing a path that better reflects who you are becoming.',
      'You are allowed to outgrow old plans, old goals, and old versions of yourself. True transformation begins when you give yourself permission to move forward with purpose.'
    ]
  }
];
