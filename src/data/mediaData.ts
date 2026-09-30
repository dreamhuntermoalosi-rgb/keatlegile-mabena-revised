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
    id: 's2',
    title: 'Featured post',
    source: 'X (Twitter)',
    url: 'https://share.google/bBg9otXfwMRVPyeKD',
    type: 'social'
  }
];

/** YouTube video appearances */
export const MEDIA_VIDEOS: MediaVideo[] = [
  {
    id: 'v1',
    youtubeId: 'be90J73qeKg',
    title: 'EP.107 Keatlegile Mabena on losing his mom in the hands of an ex who refused to leave them alone'
  },
  {
    id: 'v2',
    youtubeId: 'bFO_R_GLc48',
    title: 'I discovered my mother\u2019s butchered body (Part 2) | Unpacked with - Episode 91 | Season 3'
  },
  {
    id: 'v3',
    youtubeId: 'VeHSfRh8Xjo',
    title: 'I discovered my mother\u2019s butchered body (Part 1) | Unpacked with Relebogile - Episode 90 | Season 3'
  },
  {
    id: 'v4',
    youtubeId: '3WJBjAaEhbw',
    title: 'Keatlegile Mabena on rising above the trauma after finding mom butchered'
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

/**
 * Media preview for the homepage "Speaking Engagements, Media Features and Recognition" section.
 * YouTube thumbnails are public (img.youtube.com) and the NWU article OG image is verified accessible.
 */
export interface MediaPreviewItem {
  id: string;
  type: 'article' | 'video' | 'social';
  title: string;
  source: string;
  url: string;
  image: string;
}

export const MEDIA_PREVIEW: MediaPreviewItem[] = [
  {
    id: 'mp1',
    type: 'article',
    title: 'NWU Alumnus: Unsung Hero',
    source: 'NWU News',
    url: 'https://news.nwu.ac.za/nwu-alumnus-unsung-hero',
    image: 'https://news.nwu.ac.za/sites/news.nwu.ac.za/files/styles/news_photo_attached/public/files/attach/2022-07/Keatlegile-ICON.jpg?itok=oxdXiYBa'
  },
  {
    id: 'mp3',
    type: 'video',
    title: 'EP.107 Keatlegile Mabena on losing his mom in the hands of an ex who refused to leave them alone',
    source: 'YouTube',
    url: 'https://youtu.be/be90J73qeKg',
    image: 'https://img.youtube.com/vi/be90J73qeKg/hqdefault.jpg'
  },
  {
    id: 'mp4',
    type: 'video',
    title: 'I discovered my mother\u2019s butchered body (Part 2) | Unpacked with - Episode 91 | Season 3',
    source: 'YouTube',
    url: 'https://youtu.be/bFO_R_GLc48',
    image: 'https://img.youtube.com/vi/bFO_R_GLc48/hqdefault.jpg'
  },
  {
    id: 'mp5',
    type: 'video',
    title: 'I discovered my mother\u2019s butchered body (Part 1) | Unpacked with Relebogile - Episode 90 | Season 3',
    source: 'YouTube',
    url: 'https://youtu.be/VeHSfRh8Xjo',
    image: 'https://img.youtube.com/vi/VeHSfRh8Xjo/hqdefault.jpg'
  },
  {
    id: 'mp6',
    type: 'video',
    title: 'Keatlegile Mabena on rising above the trauma after finding mom butchered',
    source: 'YouTube',
    url: 'https://youtu.be/3WJBjAaEhbw',
    image: 'https://img.youtube.com/vi/3WJBjAaEhbw/hqdefault.jpg'
  }
];
