import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  breadcrumbs?: Array<{ label: string; path?: string }>;
  jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [
    'Keatlegile Mabena',
    'Speaker South Africa',
    'Career Success Expert',
    'Author',
    'Mentor',
    'Healing and Purpose',
    'MBN Empire',
    'Personal Growth',
    'Youth Empowerment'
  ],
  canonicalUrl,
  ogImage = 'https://mediahub.swiftcart.co.za/wp-content/uploads/2026/07/hero-law.webp',
  ogType = 'website',
  breadcrumbs,
  jsonLd,
}) => {
  const fullTitle = title.includes('Keatlegile') ? title : `${title} | Keatlegile Mabena`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://keatlegilemabena.com');

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper for meta attributes
    const setMeta = (nameOrProp: string, content: string, isProp = false) => {
      const attr = isProp ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, nameOrProp);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    setMeta('author', 'Keatlegile Mabena');
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. OpenGraph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', currentUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'Keatlegile Mabena', true);
    setMeta('og:locale', 'en_ZA', true);

    // 4. Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentUrl);

    // 6. Structured Data (JSON-LD)
    const basePersonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://keatlegilemabena.com/#person',
      'name': 'Keatlegile Mabena',
      'jobTitle': 'Self-Discovery, Healing & Mental Health Speaker | Best-Selling Author | Career Success Expert',
      'description': description,
      'url': 'https://keatlegilemabena.com',
      'image': ogImage,
      'knowsAbout': [
        'Healing',
        'Self-Discovery',
        'Purpose',
        'Confidence',
        'Career Success',
        'Transformation'
      ]
    };

    const structuredDataList: object[] = [basePersonLd];

    // Optional Breadcrumb Structured Data
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredDataList.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://keatlegilemabena.co.za'
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': b.label,
            'item': b.path ? `https://keatlegilemabena.co.za${b.path}` : currentUrl
          }))
        ]
      });
    }

    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        structuredDataList.push(...jsonLd);
      } else {
        structuredDataList.push(jsonLd);
      }
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredDataList);

    // 8. Scroll to top on route change
    window.scrollTo(0, 0);
  }, [fullTitle, description, keywords, currentUrl, ogImage, ogType, breadcrumbs, jsonLd]);

  return null;
};
