import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const urls = [
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.16.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.17.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.17-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.42.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.18.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.42-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.42-2.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.43.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.43-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.43-2.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.44.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.44-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.45-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.45.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.43-3.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.44-2.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.44-3.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.44-4.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.45-2.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.45-3.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.45-4.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.46.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.47.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.47-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.48.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.48-1.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.48-2.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.49.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.50.jpeg',
  'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-15-at-23.42.50-1.jpeg'
];

async function processImages() {
  let results = [];
  if (fs.existsSync('extracted_testimonials.json')) {
    try {
      const existing = JSON.parse(fs.readFileSync('extracted_testimonials.json', 'utf8'));
      if (Array.isArray(existing)) results = existing;
    } catch (e) {}
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    if (results.some(r => r.url === url && r.response)) {
      console.log(`[${i+1}/${urls.length}] Already processed`);
      continue;
    }

    try {
      const res = await fetch(url);
      const arrayBuffer = await res.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');
      const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: [
          {
            inlineData: {
              data: base64,
              mimeType: 'image/jpeg'
            }
          },
          'Analyze this WhatsApp screenshot testimonial for Keatlegile Mabena. Extract: 1) Sender name/role if visible (if anonymous or just a phone number/contact name, provide an appropriate respectful title like "Mentee & Reader" or "Keynote Attendee"), 2) Category (e.g. Mentorship, Authorship / Book, Keynote Speaking, Personal Growth), 3) A clean, concise 1-3 sentence summarized quote highlighting their praise for Keatlegile Mabena. Return JSON format strictly: {"name": "...", "role": "...", "category": "...", "quote": "..."}'
        ]
      });
      console.log(`[${i+1}/${urls.length}] Success`);
      results.push({ id: i+1, url, response: response.text });
      fs.writeFileSync('extracted_testimonials.json', JSON.stringify(results, null, 2));
    } catch (e) {
      console.error(`[${i+1}/${urls.length}] Error:`, e.message);
      if (e.message.includes('429') || e.message.includes('quota')) {
        console.log('Quota reached, waiting 15 seconds...');
        await new Promise(r => setTimeout(r, 15000));
      }
    }
    // Delay 3 seconds between requests to avoid rate limits
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log('Finished writing extracted_testimonials.json');
}

processImages();
