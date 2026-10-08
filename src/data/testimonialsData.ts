export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  category: string;
  quote: string;
  highlight?: string;
}

export const BOOK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'b1',
    name: 'Phemelo September',
    category: 'Faith & Perseverance',
    quote: 'Breaking the Chains is a masterpiece; work of art. It taught me about perseverance, spirituality and the importance of allowing God\u2019s wonder to work within me. Thank you for sharing your journey. I wish you well in all your future endeavours.'
  },
  {
    id: 'b2',
    name: 'Odirileng Mohajane',
    category: 'Trusting the journey',
    quote: 'Halfway through the book, I realised how often I had been blaming myself when things didn\u2019t go according to plan. It reminded me to trust every chapter of my life. You\u2019re a rising star, keep going!'
  },
  {
    id: 'b3',
    name: 'Jacob Busang',
    category: 'Hope beyond your beginning',
    quote: 'Your story showed me that where you come from does not have to define your future. The words you once shared with me \u2018Dream loudly, live boldly, heal endlessly\u2019 make more sense to me now than ever.'
  },
  {
    id: 'b4',
    name: 'Refilwe Mhate',
    category: 'Rediscovering my worth',
    quote: 'Each chapter reminded me of the potential within me. The message, \u201CBe kind to yourself,\u201D stayed with me and changed the way I relate to myself. Today, I am in a better space mentally; carrying greater confidence, self-compassion and hope.'
  },
  {
    id: 'b5',
    name: 'Thobani Mkananda',
    category: 'Becoming a chain-breaker',
    quote: 'This book affirmed something I needed to believe: I am a chain-breaker. It felt as though the words understood the story of my life. I finished the book feeling seen, strengthened and ready to confront the things that had held me back.'
  }
];

export const IMPACT_TESTIMONIALS: Testimonial[] = [];

export const ALL_TESTIMONIALS: Testimonial[] = [
  ...BOOK_TESTIMONIALS
];
