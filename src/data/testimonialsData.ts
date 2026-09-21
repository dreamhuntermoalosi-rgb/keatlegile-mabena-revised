export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  category: 'On "Breaking The Chains"' | 'Life-Changing Impact & Personal Growth';
  quote: string;
  highlight?: string;
}

export const BOOK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'b1',
    name: 'Winnie Mzimba',
    category: 'On "Breaking The Chains"',
    quote: 'A very powerful book. Some chapters are so moving they can even make you cry 😭'
  },
  {
    id: 'b2',
    name: 'Thobani',
    category: 'On "Breaking The Chains"',
    quote: 'Thank you for the affirmation that I\'m a chain-breaker, as if you know the story of my life. I salute you, Kea, I truly do. Thank you Mr Mabena 💗🥰'
  },
  {
    id: 'b3',
    name: 'Fiona',
    category: 'On "Breaking The Chains"',
    quote: 'Your story proved the reality that where you come from does not define your future. The quote you wrote to me, \'dream loudly, live boldly, heal endlessly\', all makes sense today. ❤️ ❤️'
  },
  {
    id: 'b4',
    name: 'Noxolo',
    category: 'On "Breaking The Chains"',
    quote: 'My favourite chapters are \'Redefine Your Identity\' & \'Self-Confidence is Attractive\'. Reading your memoir made me change the way I see myself, and now I can even wear heels 😂😊. I can make a joke about my height now, so thank you 😊'
  },
  {
    id: 'b5',
    name: 'Refilwe Mhate',
    category: 'On "Breaking The Chains"',
    quote: 'Each chapter reveals your confidence and that reminds me of my own potential. The highlight for me was \'be kind to yourself\'. I am happy to announce I am in a great space mentally. 😊❤️✌️'
  },
  {
    id: 'b6',
    name: 'Phimie September',
    category: 'On "Breaking The Chains"',
    quote: 'You\'ve taught me that the chains of every struggle should be broken. I can never thank you enough for introducing me to a weapon for every fight. Greatly appreciated 🙏😊😊😊 it\'s heart warming 😊😊😊'
  },
  {
    id: 'b7',
    name: 'Prof Jay',
    category: 'On "Breaking The Chains"',
    quote: 'What makes it exciting is that the author is known personally. The most I have learned is \'Resilience\'. In general, one needs to break the chains of fear, and stand alone.'
  }
];

export const IMPACT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'i1',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'It feels like I am reading my own story. I am currently learning to break the chains of severe pain and disappointment. May the good Lord bless and protect you 🌷❤️'
  },
  {
    id: 'i2',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'BREAKING THE CHAINS is a masterpiece, a work of art. It taught me perseverance, spirituality, and letting the wonder of God work on you. Thank you for sharing your journey, and I wish you well on your future endeavours thank you💕'
  },
  {
    id: 'i3',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'This book educated me on knowing what type of people to surround myself with, and that if I can\'t believe in myself, no one will. I don\'t know how many times I cried because of how that book touched me😭❤️❤️'
  },
  {
    id: 'i4',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'It boosts me every time I feel like I\'m falling apart. Honestly, no words can ever be enough to explain how this book works wonders on a person\'s well-being. You are such an inspiration to us indeed😭💕❤️💖'
  },
  {
    id: 'i5',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'Halfway through and I realize I\'ve been beating myself up for things that don\'t go according to plan. This book highlighted how I need to trust every chapter of my life. PS: you are a rising star, keep up!'
  },
  {
    id: 'i6',
    name: 'Anonymous Reader',
    category: 'Life-Changing Impact & Personal Growth',
    quote: 'I really can\'t live without that book. When I was going through a lot, I used to read it too much and it helped me. Now when I\'m not okay, I watch your YouTube interviews, but the book is better.'
  }
];

export const ALL_TESTIMONIALS: Testimonial[] = [
  ...BOOK_TESTIMONIALS,
  ...IMPACT_TESTIMONIALS
];
