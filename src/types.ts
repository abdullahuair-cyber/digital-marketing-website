export type PageId = 
  | 'home'
  | 'services'
  | 'about'
  | 'case-studies'
  | 'pricing'
  | 'resources'
  | 'contact'
  | 'audit';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'search' | 'paid' | 'creative' | 'conversion' | 'scale';
  icon: string;
  deliverables: string[];
  kpis: { label: string; value: string }[];
  tag: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    sublabel: string;
  }[];
  beforeAfter: {
    metric: string;
    before: string;
    after: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  metricHighlight: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  bestFor: string;
  features: string[];
  adSpendSupported: string;
  ctaText: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  takeaways: string[];
}

export interface AuditSubmission {
  name: string;
  email: string;
  website: string;
  businessType: string;
  monthlyBudget: string;
  primaryGoal: string;
}

export interface AuditResult {
  overallScore: number;
  website: string;
  seoScore: number;
  paidMediaScore: number;
  croScore: number;
  speedScore: number;
  criticalIssues: string[];
  growthOpportunities: string[];
  projectedRevenueUplift: string;
}
