export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  heroHeadline: string;
  iconName: string;
  image: string;
  keyAreas: string[];
  detailedSections: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
  benefits: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Governance' | 'Municipal Law' | 'Compliance' | 'Property' | 'Labour' | 'Commercial Law' | 'Legal Updates';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
  keyTakeaways: string[];
}

export interface LeadershipMember {
  name: string;
  title: string;
  qualifications: string[];
  admittedStatus: string;
  bio: string[];
  expertise: string[];
  image?: string;
}

export interface ConsultationFormData {
  fullName: string;
  organisation?: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  serviceRequired: string;
  clientType: 'Individual' | 'Business' | 'Municipality' | 'Government Institution' | 'Property Developer' | 'Other';
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
  description: string;
}
