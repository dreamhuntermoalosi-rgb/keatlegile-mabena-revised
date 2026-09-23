/**
 * Media & press content — articles, social posts, and video appearances.
 * Sources are grouped by type for display on the /media page.
 */

export interface MediaArticle {
  id: string;
  title: string;
  source: string;
  url: string;
  type: 'article' | 'social';
}

export interface MediaVideo {
  id: string;
  youtubeId: string;
  title: string;
  source?: string;
}

/** Written articles & social posts referencing Keatlegile */
export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: 'a1',
    title: 'Feature on Keatlegile Mabena',
    source: 'Sunday World',
    url: 'https://share.google/Sgk8HyT69s0xopoGV',
    type: 'article'
  },
  {
    id: 'a2',
    title: 'NWU Alumnus: Unsung Hero',
    source: 'NWU News',
    url: 'https://news.nwu.ac.za/nwu-alumnus-unsung-hero',
    type: 'article'
  },
  {
    id: 'a3',
    title: 'Feature on Keatlegile Mabena',
    source: 'Google Share',
    url: 'https://share.google/A2QxLBdxz5Nea4BWV',
    type: 'article'
  },
  {
    id: 's1',
    title: 'Featured post',
    source: 'X (Twitter)',
    url: 'https://share.google/HYukFpmtzpkG4KUsx',
    type: 'social'
  },
  {
    id: 's2',
    title: 'Featured post',
    source: 'X (Twitter)',
    url: 'https://share.google/bBg9otXfwMRVPyeKD',
    type: 'social'
  },
  {
    id: 's3',
    title: 'Featured post',
    source: 'X (Twitter)',
    url: 'https://share.google/k3f47g5ZwYUsh600r',
    type: 'social'
  }
];

/** YouTube video appearances */
export const MEDIA_VIDEOS: MediaVideo[] = [
  {
    id: 'v1',
    youtubeId: 'be90J73qeKg',
    title: 'Keatlegile Mabena — Video Appearance'
  },
  {
    id: 'v2',
    youtubeId: 'bFO_R_GLc48',
    title: 'Keatlegile Mabena — Video Appearance'
  },
  {
    id: 'v3',
    youtubeId: 'VeHSfRh8Xjo',
    title: 'Keatlegile Mabena — Video Appearance'
  }
];

/** Letters of recognition / appreciation (used on About page) */
export interface Letter {
  id: string;
  title: string;
  type: 'Appreciation' | 'Testimonial' | 'Recognition';
  url: string;
  format: 'pdf' | 'doc' | 'image';
}

export const LETTERS: Letter[] = [
  {
    id: 'l1',
    title: 'Letter of Appreciation',
    type: 'Appreciation',
    url: 'https://order.keatlegilemabena.co.za/wp-content/uploads/2026/09/Letter-of-appreciation.pdf',
    format: 'pdf'
  },
  {
    id: 'l2',
    title: 'Testimonial Letter',
    type: 'Testimonial',
    url: 'https://order.keatlegilemabena.co.za/wp-content/uploads/2026/09/TESTIMONIAL-LETTER.pdf',
    format: 'pdf'
  },
  {
    id: 'l3',
    title: 'Letter of Recognition',
    type: 'Recognition',
    url: 'https://order.keatlegilemabena.co.za/wp-content/uploads/2026/09/letter-of-recognition.doc',
    format: 'doc'
  }
];
