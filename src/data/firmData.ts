import { ServiceItem, InsightArticle, LeadershipMember } from '../types';
import { IMAGES } from './images';

export const FIRM_DETAILS = {
  name: 'Keatlegile Mabena',
  shortName: 'Keatlegile Mabena',
  // Official full positioning
  positioning: 'Speaker | Best-Selling Author | Mentor',
  // Shortened & compact variants for versatile display
  positioningShort: 'Speaker • Best-Selling Author • Mentor',
  positioningCompact: 'Speaker • Author • Mentor',
  positioningPillars: [
    'Speaker',
    'Best-Selling Author',
    'Mentor'
  ],
  positioningPillarsShort: [
    'Speaker',
    'Best-Selling Author',
    'Mentor'
  ],
  brandTerritory: 'Healing • Self-Discovery • Purpose • Confidence • Mentorship • Transformation',
  corePromise: 'Helping people move from pain and uncertainty towards healing, clarity, confidence and purposeful action.',
  lawFirmNo: 'KMB-2026',
  practiceNo: 'MBN-001',
  address: {
    street: 'Pretoria / Johannesburg',
    city: 'Gauteng',
    province: 'Gauteng Province',
    postalCode: '0001',
    country: 'South Africa',
    full: 'Gauteng & Nationwide, South Africa'
  },
  contact: {
    phone: '+27 62 172 6790',
    whatsappNumber: '27621726790',
    email: 'info@keatlegilemabena.co.za'
  },
  social: {
    instagram: 'https://www.instagram.com/keatlegile_mabena/',
    facebook: 'https://www.facebook.com/keatlegile.mabena.71/',
    linkedin: 'https://za.linkedin.com/in/keatlegile-mabena-634570112'
  },
  tagline: 'Find Your Direction. Rediscover Your Confidence. Move With Purpose.',
  subtitle: 'Helping people heal, discover purpose, build confidence and move towards meaningful personal and career growth.'
};

export const BRAND_DETAILS = FIRM_DETAILS;

export const LEADERSHIP: LeadershipMember = {
  name: 'Keatlegile Mabena',
  title: 'Speaker | Best-Selling Author | Mentor',
  admittedStatus: 'Thought Leader & Founder of MBN Empire',
  qualifications: [
    'Master of Social Sciences: Population and Sustainable Development (NWU)',
    'Honours Bachelor of Social Science: Population Studies (Cum Laude, NWU)',
    'Bachelor of Social Science: Population and Development Studies (Cum Laude, NWU)',
    'Moderator Training (NQF Level 6) & Assessor Training (NQF Level 5)',
    'Member of Population Association of Southern Africa (PASA)',
    'Published Author & Keynote Speaker'
  ],
  bio: [
    'Keatlegile Mabena is a purpose-led personal brand centred on speaking, authorship, mentorship, thought leadership and social impact.',
    'The brand grew from lived experience, academic development, authorship, service and a desire to help others rise beyond difficult beginnings. Growing up in Shakung Village in North-West shaped an understanding of resilience, possibility and transformation.',
    'Keatlegile’s advantage lies in bringing together lived experience, academic credibility, authorship, mentorship and community impact in a way that is authentic, practical and relatable.'
  ],
  expertise: [
    'Healing & Personal Transformation',
    'Purpose & Self-Discovery',
    'Confidence & Personal Growth',
    'Mentorship & Youth Guidance',
    'Leadership & Youth Empowerment',
    'Publishing & Academic Consulting'
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
      'Mentorship & Guidance',
      'Leadership & Development',
      'Youth & Empowerment'
    ],
    detailedSections: [
      {
        heading: 'Conversations That Create a Shift',
        content: 'The right conversation can create a shift — a shift in perspective, a shift in confidence, and a shift in direction. Keatlegile speaks on the issues that sit at the intersection of personal transformation, purpose and professional growth.',
        bullets: [
          'Keynote addresses for corporate, institutional, and conference stages.',
          'Interactive workshops and leadership development sessions.',
          'Panel discussions and fireside conversations.'
        ]
      },
      {
        heading: 'For Organisations & Institutions',
        content: 'Keatlegile works with institutions seeking speaking and development programmes designed to support people through conversations around personal development, career growth, purpose, confidence and transformation.',
        bullets: [
          'Suitable for Conferences, Corporate & Leadership programmes.',
          'Youth empowerment initiatives and student affairs workshops.',
          'Institutional wellness events and staff development sessions.'
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
      'Career Direction & Goal Setting',
      'Overcoming Self-Doubt & Building Confidence',
      'Exploring Purpose & Personal Values',
      'Personal Development & Self-Awareness',
      'Career Growth & Next Steps',
      'Accountability & Sustained Momentum'
    ],
    detailedSections: [
      {
        heading: 'Mentorship for Your Next Chapter',
        content: 'There are moments when information isn’t enough. You need perspective. You need someone to listen. Someone to challenge your thinking. Someone to help you see the next step.',
        bullets: [
          'One-on-one structured mentorship journeys.',
          'Guided self-reflection and goal clarification.',
          'Actionable roadmaps to move from uncertainty to purpose.'
        ]
      },
      {
        heading: 'Who Mentorship Is For',
        content: 'Whether you are a student, graduate, young professional, job seeker, emerging manager or entrepreneur, you may find yourself at a point where the next step is not obvious. Mentorship begins by understanding where you are, what you are experiencing and where you want to go.',
        bullets: [
          'Working through self-doubt to develop belief in your capabilities.',
          'Turning intentions into measurable action.',
          'Navigating career transitions with clarity.'
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
    id: 'career-development',
    slug: 'career-development',
    title: 'Career Development',
    subtitle: 'Your Career Is Part of Your Story',
    shortDescription: 'Practical guidance for navigating career decisions, professional growth and the journey towards career success.',
    heroHeadline: 'Your Career Is Part of Your Story',
    iconName: 'TrendingUp',
    image: IMAGES.boardroom,
    keyAreas: [
      'Find Your Direction & Set Clear Goals',
      'Understand & Articulate Your Strengths',
      'Build Workplace & Professional Confidence',
      'Prepare for Opportunities & Interviews',
      'Ongoing Professional & Personal Growth'
    ],
    detailedSections: [
      {
        heading: 'Career Growth Starts With Clarity',
        content: 'A career is more than a job. It is a journey of learning, capability, opportunity and growth. Yet navigating that journey can be difficult — especially when you are uncertain about your direction, struggling to articulate your strengths or wondering why your progress does not seem to match your potential.',
        bullets: [
          'Clarifying short and long-term career direction.',
          'Recognising and communicating the unique value you bring.',
          'Approaching opportunities with intention and preparedness.'
        ]
      }
    ],
    benefits: [
      'Clarity on career goals and next steps',
      'Enhanced confidence in job markets and workplace settings',
      'Long-term sustainable career development'
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
      'Authorship & Thought Leadership',
      'Newsletter & Ongoing Reflections'
    ],
    detailedSections: [
      {
        heading: 'Breaking the Chains: Bailing Out the Imprisoned Potential, Power and Persistence',
        content: 'Published in 2019 (126 pages, ISBN: 9780620840668) with over 7,000+ copies sold. What are your chains? Sometimes the chains are circumstances. Sometimes they are fear. Sometimes they are unresolved experiences. Sometimes they are the beliefs we have developed about ourselves. And sometimes we become so accustomed to carrying them that we forget that another way of living is possible.',
        bullets: [
          'Published: 2019 | Length: 126 pages | ISBN: 9780620840668',
          'Over 7,000+ copies sold to date across South Africa',
          'Upcoming book: In development / Coming Soon'
        ]
      }
    ],
    benefits: [
      'Language for deep personal experiences',
      'New perspectives on life and career challenges',
      'Actionable reflections for personal growth'
    ]
  },
  {
    id: 'insights',
    slug: 'insights',
    title: 'Thought Leadership & Insights',
    subtitle: 'Thoughts for the Journey',
    shortDescription: 'Conversations and perspectives around healing, purpose, self-discovery, career success and transformation.',
    heroHeadline: 'Thoughts for the Journey',
    iconName: 'Lightbulb',
    image: IMAGES.governanceCompliance,
    keyAreas: [
      'Healing & Self-Discovery',
      'Career Growth & Purposeful Action',
      'Building Confidence',
      'Transformation & Direction'
    ],
    detailedSections: [
      {
        heading: 'Perspectives That Change How You See Your Situation',
        content: 'Sometimes one idea can change the way you see your situation. Ideas and reflections on the experiences that shape our personal and professional journeys.',
        bullets: [
          'Career: Your Career Is More Than a Job.',
          'Purpose: What Are You Building Your Life Around?',
          'Confidence: When Your Potential and Your Confidence Don’t Match.',
          'Growth: You Are Allowed to Outgrow Your Old Direction.'
        ]
      }
    ],
    benefits: [
      'Fresh clarity on personal challenges',
      'Grounded advice based on lived experience',
      'Actionable perspective shifts'
    ]
  },
  {
    id: 'mbn-empire',
    slug: 'mbn-empire',
    title: 'MBN Empire',
    subtitle: 'A Personal Vision. A Growing Enterprise.',
    shortDescription: 'The commercial platform for scalable businesses in career services, research, academic consulting, business services and publishing.',
    heroHeadline: 'From Personal Vision to Scalable Enterprise',
    iconName: 'Building2',
    image: IMAGES.southAfricaArchitecture,
    keyAreas: [
      'Career Services (CVs, LinkedIn, Interview Prep)',
      'Research & Academic Consulting',
      'Business Services (Business Plans, Proposals, Profiles)',
      'Publishing & Author Support Services'
    ],
    detailedSections: [
      {
        heading: 'Building Businesses That Can Outlive the Founder',
        content: 'Keatlegile Mabena is distinct from, but strategically connected to, MBN Empire, the commercial group through which scalable professional businesses are being developed. While Keatlegile’s personal brand focuses on speaking, authorship, mentorship, thought leadership, career development and social impact, MBN Empire is being developed as the commercial platform.',
        bullets: [
          'Career Services: CVs, LinkedIn optimisation, cover letters, interview prep, career coaching.',
          'Research & Academic Consulting: Research consultancy, training, writing support, methodology.',
          'Business Services: Business plans, profiles, funding proposals, market research, SOPs.',
          'Publishing: Book publishing, manuscript development, editing, proofreading, design.'
        ]
      }
    ],
    benefits: [
      'Scalable professional business solutions',
      'Expert research, academic, and corporate consulting',
      'End-to-end publishing guidance'
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
