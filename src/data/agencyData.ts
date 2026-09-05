import { ServiceItem, CaseStudyItem, TestimonialItem, PricingPlan, ResourceArticle } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Enterprise SEO & SGE Optimization',
    shortDesc: 'Capture high-intent organic search demand and dominate Google AI Overviews with entity-based technical SEO.',
    longDesc: 'Our technical SEO and semantic content architecture guarantee organic visibility in an AI-first search landscape. We rebuild crawl architecture, build topical authority clusters, and optimize for Google Search Generative Experience (SGE).',
    category: 'search',
    icon: 'Search',
    deliverables: [
      'Technical Core Web Vitals & Crawl Budget Audit',
      'Entity-Based Semantic Keyword & Topic Mapping',
      'AI Overviews (SGE) & Zero-Click Search Optimization',
      'High-Authority Editorial Digital PR & Backlinks',
      'Custom Bi-Weekly Revenue Attribution Reporting'
    ],
    kpis: [
      { label: 'Avg. Organic Traffic Lift', value: '+247%' },
      { label: 'Top 3 Keyword Positions', value: '4,800+' },
      { label: 'Organic Revenue Contribution', value: '3.4x' }
    ],
    tag: 'Core Growth Engine'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Business Domination',
    shortDesc: 'Own the Google Local 3-Pack and turn high-intent nearby searches into immediate calls, bookings, and foot traffic.',
    longDesc: 'Engineered specifically for multi-location brands, clinics, and regional market leaders. We syndicate hyper-accurate local citations, execute geofocused review acceleration, and optimize Google Business Profiles for peak local search dominance.',
    category: 'search',
    icon: 'MapPin',
    deliverables: [
      'Google Business Profile (GBP) Deep Optimization',
      'Multi-Location Geo-Grid Ranking Heatmaps',
      'Automated 5-Star Review Generation Playbook',
      'Local Citations & NAP Consistency Synchronization',
      'Hyper-Local Schema Markup & Landing Pages'
    ],
    kpis: [
      { label: 'Local Map Pack Calls Lift', value: '+210%' },
      { label: 'Directions & Inquiries', value: '+185%' },
      { label: 'Rankings in Target Geo-Radius', value: '#1-#3' }
    ],
    tag: 'High Intent'
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Performance Max (PPC)',
    shortDesc: 'Stop ad spend bleed with high-intent search campaigns, automated bidding scripts, and hyper-targeted PMax funnels.',
    longDesc: 'We eliminate budget waste by restructuring search campaigns into strict single-intent clusters, custom negative keyword matrices, and advanced Performance Max asset group segmentations with server-side conversion tracking.',
    category: 'paid',
    icon: 'Target',
    deliverables: [
      'High-Intent Search & Performance Max Restructure',
      'Negative Keyword Exclusion Library (4,500+ rules)',
      'Server-Side Enhanced Conversions & Value Bidding',
      'Dynamic Search Ads (DSA) & YouTube Video Action Ads',
      'Daily ROAS & Target CPA Algorithmic Optimization'
    ],
    kpis: [
      { label: 'Average Client ROAS', value: '4.2x' },
      { label: 'Cost Per Acquisition Reduction', value: '-38%' },
      { label: 'Qualified Pipeline Value', value: '$8.4M+' }
    ],
    tag: 'Direct ROI'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    shortDesc: 'Scale profitably with battle-tested direct response video creatives, audience segmentation, and Conversions API (CAPI).',
    longDesc: 'Post-iOS14 advertising requires first-party data and high-velocity creative testing. We produce scroll-stopping UGC and motion ads paired with server-side CAPI tracking to feed Meta algorithms high-intent conversion signals.',
    category: 'paid',
    icon: 'Share2',
    deliverables: [
      'Weekly Direct-Response Creative Production & Iteration',
      'Server-Side Meta Conversions API (CAPI) Integration',
      'Broad Targeting & Lookalike Scaling Frameworks',
      'Dynamic Product Ads (DPA) & Retargeting Loops',
      'TripleWhale & Northbeam Multi-Touch Attribution'
    ],
    kpis: [
      { label: 'Blended Paid ROAS', value: '3.6x' },
      { label: 'Weekly Creative Variations Tested', value: '20+' },
      { label: 'Click-to-Purchase Conversion', value: '+44%' }
    ],
    tag: 'Creative Scale'
  },
  {
    id: 'social-media',
    title: 'Social Media & Brand Authority',
    shortDesc: 'Build an engaged, loyal audience through high-retention short-form video, thought leadership, and community management.',
    longDesc: 'Transform passive followers into brand evangelists. We script, edit, and distribute authoritative short-form video content across LinkedIn, TikTok, and Instagram, establishing category leadership and organic viral reach.',
    category: 'creative',
    icon: 'Sparkles',
    deliverables: [
      'Multi-Platform Short-Form Video Strategy (Reels & TikTok)',
      'Executive Thought Leadership on LinkedIn & X',
      'Active Community Engagement & DM Lead Qualification',
      'Influencer Seeding & Micro-Creator Partnerships',
      'Monthly Brand Sentiment & Growth Analytics'
    ],
    kpis: [
      { label: 'Monthly Organic Impressions', value: '1.2M+' },
      { label: 'Engagement Rate vs Industry Avg', value: '3.1x' },
      { label: 'Inbound Social Inquiries/Mo', value: '180+' }
    ],
    tag: 'Organic Reach'
  },
  {
    id: 'web-design',
    title: 'High-Converting Web Design & Development',
    shortDesc: 'Lightning-fast, mobile-first websites designed specifically to convert cold traffic into qualified sales calls and orders.',
    longDesc: 'Your website is your best salesperson. We design bespoke, lightning-fast digital experiences with under-1-second load times, psychology-backed UX layouts, and clear conversion paths that outshine legacy competitors.',
    category: 'creative',
    icon: 'Layout',
    deliverables: [
      'Bespoke Mobile-First UI/UX Design System in Figma',
      'Next.js / Headless Sub-Second Page Load Architecture',
      'Conversion Architecture & Interactive Micro-Interactions',
      'Core Web Vitals 95+ Mobile Google PageSpeed Score',
      'Full CRM, Analytics, & Pixel Tracking Deployment'
    ],
    kpis: [
      { label: 'Mobile PageSpeed Score', value: '98/100' },
      { label: 'Baseline Conversion Uplift', value: '+54%' },
      { label: 'Bounce Rate Reduction', value: '-41%' }
    ],
    tag: 'Conversion Core'
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization (CRO)',
    shortDesc: 'Double your customer acquisitions without increasing your media budget through rigorous A/B split testing.',
    longDesc: 'Driving traffic to an unoptimized funnel is burning cash. We deploy qualitative heatmaps, user session recordings, and quantitative statistical hypothesis testing to systematically eliminate checkout and form friction.',
    category: 'conversion',
    icon: 'TrendingUp',
    deliverables: [
      'Full Funnel Quantitative Drop-Off Heatmap Auditing',
      'Continuous A/B & Multivariate Split Testing (VWO/Optimizely)',
      'Checkout Flow & Lead Form Friction Elimination',
      'Psychological Copywriting & Trust Signal Placement',
      'Statistical Significance & Revenue Impact Validation'
    ],
    kpis: [
      { label: 'Average Funnel Conversion Lift', value: '+62%' },
      { label: 'Tests Deployed Annually', value: '50+' },
      { label: 'Incremental Revenue Unlocked', value: '$3.2M' }
    ],
    tag: 'Efficiency Multiplier'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing & Buyer Intent Assets',
    shortDesc: 'Strategic editorial assets, high-converting lead magnets, and case studies that turn curious browsers into eager buyers.',
    longDesc: 'We don’t produce fluff. We research your customer’s exact pain points and engineer in-depth comparison guides, whitepapers, data reports, and solution pages that directly educate and close deals.',
    category: 'creative',
    icon: 'FileText',
    deliverables: [
      'Bottom-of-Funnel (BOFU) Product Comparison Pages',
      'High-Value Gated Whitepapers & Industry Benchmark Reports',
      'Editorial Copywriting by Subject Matter Specialists',
      'Omnichannel Content Repurposing Engine',
      'First-Touch & Multi-Touch Pipeline Attribution'
    ],
    kpis: [
      { label: 'Content-Attributed Pipeline', value: '$4.1M' },
      { label: 'Average Time on Page', value: '4m 12s' },
      { label: 'Lead Magnet Opt-In Rate', value: '18.4%' }
    ],
    tag: 'Authority'
  },
  {
    id: 'reputation',
    title: 'Reputation Management & Review Defense',
    shortDesc: 'Protect your brand equity, eliminate unfair negative impressions, and amplify positive customer advocacy.',
    longDesc: 'A 4.8-star rating is non-negotiable for high-ticket buyers. We set up proactive customer sentiment interceptors, automate 5-star review collection, and monitor brand mentions 24/7 across review directories and social channels.',
    category: 'scale',
    icon: 'ShieldCheck',
    deliverables: [
      'Automated SMS & Email Review Requests After Milestones',
      'Negative Feedback Interception & Early Dispute Resolution',
      'Trustpilot, Google, G2, and Yelp Profile Curation',
      '24/7 Brand Sentiment Monitoring & Alert Feeds',
      'Executive Crisis PR Protocol & Response Blueprints'
    ],
    kpis: [
      { label: 'Average Client Review Rating', value: '4.9★' },
      { label: 'New Reviews Generated / Mo', value: '65+' },
      { label: 'Brand Sentiment Score', value: '94%' }
    ],
    tag: 'Brand Shield'
  },
  {
    id: 'lead-generation',
    title: 'B2B & High-Ticket Lead Generation Systems',
    shortDesc: 'Predictable, qualified inbound pipeline generation combining cold outbound, paid intent ads, and smart qualification.',
    longDesc: 'Say goodbye to dry pipeline months. We construct an integrated inbound demand generation engine with automated prospect qualification, calendar self-booking, and pre-call nurturing so your sales team only speaks to buyers.',
    category: 'scale',
    icon: 'Zap',
    deliverables: [
      'ICP Account Targeting & Technographic Data Enrichment',
      'Multi-Channel Inbound Capture & Interactive Funnels',
      'Automated CRM Lead Scoring & Immediate Routing',
      'Pre-Call Vetting Surveys & Self-Scheduling Flow',
      'No-Show Prevention SMS & Email Sequences'
    ],
    kpis: [
      { label: 'Total Verified Leads Generated', value: '500K+' },
      { label: 'Sales Qualified Lead (SQL) Rate', value: '42%' },
      { label: 'Booking Show-Up Rate', value: '88%' }
    ],
    tag: 'Pipeline Engine'
  },
  {
    id: 'automation',
    title: 'Marketing Automation & CRM Architecture',
    shortDesc: 'Convert leads while you sleep with intelligent lifecycle email drips, SMS triggers, and unified CRM data workflows.',
    longDesc: 'Disconnected tools destroy conversions. We integrate your ad platforms, website forms, and CRM (HubSpot, Salesforce, Klaviyo) with automated lead nurturing workflows that revitalize dormant leads and maximize Customer Lifetime Value (LTV).',
    category: 'conversion',
    icon: 'Cpu',
    deliverables: [
      'HubSpot, Salesforce, & Klaviyo Advanced CRM Architecture',
      'Behavior-Triggered Multi-Touch Email & SMS Drips',
      'Automated Win-Back & Churn Prevention Workflows',
      'End-to-End Closed-Loop Revenue Attribution',
      'Real-Time Slack/Teams Sales Alert Integrations'
    ],
    kpis: [
      { label: 'Automated Email Open Rate', value: '48.2%' },
      { label: 'Dormant Lead Re-Engagement', value: '+28%' },
      { label: 'Customer Lifetime Value Lift', value: '+35%' }
    ],
    tag: 'Infrastructure'
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'lumin-apparel',
    title: 'Scaling an Omnichannel Apparel Brand to $640k/Month',
    client: 'Lumin Studio',
    industry: 'DTC E-Commerce & Retail',
    challenge: 'High customer acquisition costs ($82 CPA) on Meta post-iOS14 update and stagnant organic traffic capped at 45,000 monthly visitors.',
    solution: 'Re-architected Meta ad account into broad targeting with 25+ weekly UGC direct response video angles, implemented Server-Side Conversions API, and executed a bottom-of-funnel entity SEO cluster.',
    results: [
      { metric: 'Organic Traffic Lift', value: '+184%', sublabel: 'From 45k to 128k/mo visitors' },
      { metric: 'Monthly Revenue Growth', value: '+71%', sublabel: 'Surpassed $640,000 monthly run-rate' },
      { metric: 'Blended Paid ROAS', value: '3.8x', sublabel: 'Up from 1.9x previous benchmark' },
      { metric: 'CPA Reduction', value: '-43%', sublabel: 'Dropped from $82 to $46.70' }
    ],
    beforeAfter: [
      { metric: 'Monthly Revenue', before: '$375,000', after: '$642,000' },
      { metric: 'Organic Monthly Sessions', before: '45,200', after: '128,400' },
      { metric: 'Return On Ad Spend (ROAS)', before: '1.92x', after: '3.84x' },
      { metric: 'Checkout Conversion Rate', before: '1.8%', after: '3.4%' }
    ],
    quote: {
      text: 'Apex Growth completely restructured our paid media and SEO from the ground up. In six months, we went from burning cash on unoptimized ads to our most profitable quarter in company history.',
      author: 'Marcus Vance',
      role: 'Founder & CEO, Lumin Studio'
    },
    tags: ['E-Commerce', 'Meta Ads', 'SEO', 'CRO']
  },
  {
    id: 'strata-ai',
    title: 'Generating $2.4M in New ARR for Enterprise B2B SaaS',
    client: 'Strata Intelligence',
    industry: 'Enterprise B2B Software',
    challenge: 'Sales team was inundated with unqualified free-tier signups while high-intent Fortune 500 demos were expensive ($740 cost-per-demo) and irregular.',
    solution: 'Engineered a targeted Google Search intent campaign focused on high-ticket enterprise replacement queries, revamped the product landing page with interactive ROI calculator, and built a HubSpot automated scoring gate.',
    results: [
      { metric: 'Qualified SQL Growth', value: '+340%', sublabel: 'Over 140 enterprise demos/month' },
      { metric: 'New ARR Pipeline', value: '$2.4M', sublabel: 'Closed within 9 months' },
      { metric: 'Customer Acquisition Cost', value: '-42%', sublabel: 'Reduced demo cost from $740 to $428' },
      { metric: 'Landing Page Conversion', value: '+88%', sublabel: 'Uplift from 3.2% to 6.1%' }
    ],
    beforeAfter: [
      { metric: 'Monthly Qualified SQLs', before: '32', after: '141' },
      { metric: 'Cost Per Demo (CAC)', before: '$740', after: '$428' },
      { metric: 'Close Rate on Booked Calls', before: '14%', after: '26%' },
      { metric: 'Annual Contract Value (Avg)', before: '$18,500', after: '$34,000' }
    ],
    quote: {
      text: 'Their team doesn’t just talk marketing buzzwords; they understand pipeline, unit economics, and B2B buying behavior. They are an indispensable growth partner.',
      author: 'Elena Rostova',
      role: 'VP of Growth, Strata Intelligence'
    },
    tags: ['B2B SaaS', 'Google Ads', 'CRO', 'Automation']
  },
  {
    id: 'apex-dental',
    title: 'Dominating Local Map Packs Across 14 Clinic Locations',
    client: 'Beacon Dental Health',
    industry: 'Multi-Location Healthcare',
    challenge: 'Struggled to rank outside a 0.5-mile radius of each clinic, suffering from fragmented local citations, inconsistent phone numbers, and negligible review velocity.',
    solution: 'Executed a complete Google Business Profile standardization, geo-grid proximity optimization, automated SMS review requests post-appointment, and local schema markup.',
    results: [
      { metric: 'Map Pack Call Volume', value: '+210%', sublabel: '2,300+ phone calls per month' },
      { metric: 'New Patient Bookings', value: '1,850/mo', sublabel: 'Net increase across all 14 clinics' },
      { metric: 'Average Star Rating', value: '4.9★', sublabel: 'Across 3,200+ verified Google reviews' },
      { metric: 'Organic Local Revenue', value: '3.2x', sublabel: 'Growth in high-margin cosmetic procedures' }
    ],
    beforeAfter: [
      { metric: 'Monthly Inbound Calls', before: '740', after: '2,310' },
      { metric: 'Google Reviews Total', before: '420', after: '3,240' },
      { metric: 'Top-3 Geo Radius', before: '0.4 miles', after: '4.8 miles' },
      { metric: 'Monthly New Patients', before: '680', after: '1,850' }
    ],
    quote: {
      text: 'Our clinic phones are ringing off the hook. We opened two brand new locations ahead of schedule solely based on the demand generated by Apex Growth’s local SEO engine.',
      author: 'Dr. Julian Sterling',
      role: 'Managing Director, Beacon Dental Health'
    },
    tags: ['Local SEO', 'Reputation', 'Google Business', 'Healthcare']
  },
  {
    id: 'solarpulse',
    title: '192% Increase in High-Ticket Contracted Solar Installations',
    client: 'SolarPulse Energy',
    industry: 'Home Services & Clean Energy',
    challenge: 'Buying low-quality shared aggregator leads with poor close rates and paying exorbitant $180+ CPL with 60% lead disqualification.',
    solution: 'Built an exclusive branded inbound lead generation funnel featuring a custom 30-second Solar Savings Estimator, paired with geo-targeted Google Search and YouTube Action ads.',
    results: [
      { metric: 'Booked Residential Jobs', value: '+192%', sublabel: 'Direct homeowners ready to purchase' },
      { metric: 'Google Ads ROAS', value: '4.4x', sublabel: 'On $45,000 monthly media budget' },
      { metric: 'Exclusive Lead Cost', value: '$58', sublabel: 'Down from $180 shared leads' },
      { metric: 'Consultation Show-Up Rate', value: '89%', sublabel: 'Automated SMS nurture sequences' }
    ],
    beforeAfter: [
      { metric: 'Cost Per Qualified Lead', before: '$182', after: '$58' },
      { metric: 'Monthly Contracted Installs', before: '28', after: '82' },
      { metric: 'Lead Disqualification Rate', before: '61%', after: '14%' },
      { metric: 'Gross Installation Revenue', before: '$840k/mo', after: '$2.46M/mo' }
    ],
    quote: {
      text: 'Switching from broker leads to an exclusive custom funnel engineered by Apex Growth tripled our install team capacity in under 5 months.',
      author: 'David Thorne',
      role: 'Chief Revenue Officer, SolarPulse'
    },
    tags: ['Lead Generation', 'PPC', 'Landing Pages', 'Home Services']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Chen',
    role: 'Chief Marketing Officer',
    company: 'Fintech Velocity',
    content: 'Apex Growth treats our ad budget like their own. They identified $18,000 in monthly ad waste during their initial audit and reinvested it into high-intent search terms that drove a 310% pipeline increase.',
    rating: 5,
    metricHighlight: '+310% Pipeline Generated',
    avatar: 'SC'
  },
  {
    id: 'test-2',
    name: 'David Reynolds',
    role: 'Founder & CEO',
    company: 'Haven Living Products',
    content: 'We had worked with three different agencies that overpromised and underdelivered. Apex Growth came with radical transparency, real-time dashboards, and hit our profitability targets within 60 days.',
    rating: 5,
    metricHighlight: '4.1x Verified ROAS',
    avatar: 'DR'
  },
  {
    id: 'test-3',
    name: 'Dr. Melissa Ross',
    role: 'Clinical Director',
    company: 'Metro Orthopedic Specialists',
    content: 'Our patient bookings doubled in 90 days. Their local SEO and Google Business Profile execution transformed our 5 clinics into the #1 ranked orthopedic practices in the tri-state area.',
    rating: 5,
    metricHighlight: '2x Patient Inquiries',
    avatar: 'MR'
  },
  {
    id: 'test-4',
    name: 'Jason Kincaid',
    role: 'Head of Growth',
    company: 'CloudMatrix Logistics',
    content: 'The CRO experiments they ran on our demo funnel lifted our conversion rate from 2.1% to 5.4%. That single optimization was worth over $1.2M in annual recurring revenue for us.',
    rating: 5,
    metricHighlight: '+157% Demo Conversion',
    avatar: 'JK'
  },
  {
    id: 'test-5',
    name: 'Rachel Gallagher',
    role: 'Managing Partner',
    company: 'Vanguard Legal Group',
    content: 'In competitive high-ticket legal PPC, every click counts. Apex Growth rebuilt our campaigns with surgical precision, reducing our cost per signed retainer client by 48%.',
    rating: 5,
    metricHighlight: '-48% Cost Per Retainer',
    avatar: 'RG'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Growth',
    monthlyPrice: 2950,
    annualPrice: 2500,
    description: 'Designed for ambitious regional businesses & niche companies ready to establish market leadership.',
    bestFor: 'Single-location brands, local service leaders, boutique e-commerce',
    adSpendSupported: 'Up to $10,000 / month ad spend management',
    features: [
      'Single Channel Core Focus (SEO or Google Ads or Meta Ads)',
      'Complete Technical & Conversion Funnel Baseline Audit',
      'Dedicated Senior Account Strategist (No junior handoffs)',
      'Bi-Weekly 1-on-1 Performance Reviews & Video Walkthroughs',
      'Real-Time 24/7 Client Reporting Dashboard Access',
      'Basic Conversion Rate Optimization (1 test/month)',
      'Local Citation & Google Business Profile Management',
      '48-Hour Response Time SLA'
    ],
    ctaText: 'Apply For Starter Plan'
  },
  {
    id: 'growth',
    name: 'Omnichannel Scale',
    isPopular: true,
    badge: 'MOST POPULAR',
    monthlyPrice: 5450,
    annualPrice: 4630,
    description: 'Our flagship full-funnel growth engine combining organic search, multi-channel paid ads, and high-velocity CRO.',
    bestFor: 'Scaling businesses ($1M - $15M rev) aiming to aggressively capture market share',
    adSpendSupported: 'Up to $40,000 / month ad spend management',
    features: [
      'Dual Channel Master Engine (SEO + Google Ads OR Meta Ads)',
      'Weekly Direct-Response Creative Production (Video + Static)',
      'Full-Funnel A/B Conversion Rate Optimization (3 tests/month)',
      'Server-Side Tracking (Meta CAPI + Google Enhanced Conversions)',
      'Executive Slack Channel Connect with Strategists',
      'Weekly Live Performance Deep Dives & Attribution Analysis',
      'Automated Lead Nurturing & CRM Lifecycle Drip Workflows',
      'Priority 4-Hour Response SLA & Quarterly Business Reviews'
    ],
    ctaText: 'Start Growth Acceleration'
  },
  {
    id: 'scale',
    name: 'Market Domination',
    badge: 'ENTERPRISE',
    monthlyPrice: 9850,
    annualPrice: 8370,
    description: 'Bespoke growth infrastructure with dedicated multi-disciplinary specialists for enterprise market leaders.',
    bestFor: 'Multi-location enterprises, high-volume DTC brands, B2B SaaS',
    adSpendSupported: 'Unlimited ad spend management ($40k+ to $250k+/mo)',
    features: [
      'Omnichannel Domination (SEO + Google Ads + Meta + YouTube)',
      'Dedicated Growth Pod (Creative Director, Media Buyer, SEO Lead, CRO Dev)',
      'Continuous High-Velocity CRO (Unlimited sprint testing)',
      'TripleWhale / Northbeam Multi-Touch First-Party Attribution',
      'Custom Web Application & High-Speed Landing Page Engineering',
      'PR & High-Tier Editorial Authority Link Building',
      'Custom Marketing Automation & Salesforce/HubSpot Architect',
      '1-Hour VIP Response SLA & Direct Access to Agency Partners'
    ],
    ctaText: 'Schedule Executive Briefing'
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'sge-playbook-2026',
    title: 'The 2026 Google Search Generative Experience (SGE) Playbook',
    summary: 'How Google AI Overviews changed organic search click distribution, and the exact semantic entity framework required to earn AI citations.',
    category: 'SEO & Search',
    readTime: '8 min read',
    date: 'February 2026',
    author: {
      name: 'Alexander Ward',
      role: 'Director of Search & Machine Learning'
    },
    takeaways: [
      'Google SGE favors structured entity data over traditional keyword density.',
      'Information gain score is now the primary ranking factor in competitive niches.',
      'How to optimize technical schema to guarantee inclusion in AI Answer summaries.'
    ],
    content: [
      'The transition from 10 blue links to multi-modal AI Overviews has transformed organic search. Our internal research across 400,000 SERPs shows that traditional informational queries have seen a 28% decline in pure organic CTR, while bottom-of-funnel comparative queries have gained higher commercial intent.',
      'To rank inside Google AI Overviews in 2026, websites must transition from keyword targeting to Knowledge Graph entity optimization. This requires explicit schema markup, original proprietary benchmark data, and clear author credential attribution.',
      'Our team tested this framework with a B2B SaaS client, increasing their presence in AI Overviews from 4% of target keywords to 62% in 90 days, resulting in a 140% increase in high-intent inbound demos.'
    ]
  },
  {
    id: 'meta-capi-2026',
    title: 'Beating Signal Loss: Server-Side Conversions API & Broad Targeting',
    summary: 'The technical blueprint for feeding Meta algorithms pure first-party data post-cookie depreciation to achieve consistent 4x+ ROAS.',
    category: 'Paid Media',
    readTime: '6 min read',
    date: 'January 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Paid Acquisition'
    },
    takeaways: [
      'Browser pixels miss 30-45% of customer transactions due to ad blockers.',
      'Server-side CAPI event deduplication is essential for accurate algorithmic bidding.',
      'Why creative diversity outperforms micro-audience interest targeting.'
    ],
    content: [
      'Relying solely on client-side tracking pixels in 2026 guarantees high acquisition costs. With browsers aggressively deprecating third-party cookies and mobile operating systems enforcing strict privacy safeguards, server-side data routing is the single biggest competitive advantage in paid social.',
      'By implementing Gateway CAPI with 100% server-side event deduplication, our client ad accounts consistently register 25% to 40% more conversion events back to Meta, immediately unlocking lower algorithmic CPAs.',
      'Combine this pristine data pipeline with high-velocity creative testing (5 hook variations per week) and you establish an unshakeable customer acquisition flywheel.'
    ]
  },
  {
    id: 'cro-framework-2026',
    title: 'The Anatomy of an 8.4% Conversion Rate B2B Landing Page',
    summary: 'An empirical breakdown of the cognitive triggers, layout rules, and friction elimination techniques that doubled our client demo rates.',
    category: 'Conversion (CRO)',
    readTime: '7 min read',
    date: 'January 2026',
    author: {
      name: 'Julian Thorne',
      role: 'Head of UX & Conversion Science'
    },
    takeaways: [
      'Eliminate multi-step forms in favor of single-question progressive disclosure.',
      'Position social proof metrics within 50px of the primary conversion button.',
      'Sub-second page speeds generate a 12% higher baseline conversion rate.'
    ],
    content: [
      'Most B2B landing pages make prospects work too hard. Dense paragraphs, generic stock photography, and 9-field contact forms scare away high-value decision-makers.',
      'Our conversion science methodology focuses on radical clarity: presenting the core value proposition in under 3 seconds, proving it with concrete peer metrics immediately beneath the hero, and simplifying the conversion action.',
      'When we deployed progressive qualification forms with inline friction reduction, average completion rates surged from 3.1% to 8.4% without any drop in lead quality.'
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Alexander Ward',
    role: 'Founder & Managing Partner',
    bio: 'Former VP of Growth at $100M+ e-commerce & SaaS scaleups. 14+ years scaling performance marketing engines with over $120M in managed media.',
    credentials: 'Ex-Google Growth Lab, Stanford MBA',
    specialty: 'Growth Architecture & Attribution',
    image: 'AW'
  },
  {
    name: 'Sarah Jin, Ph.D.',
    role: 'Head of SEO & Machine Learning',
    bio: 'Data scientist specializing in semantic search engines, knowledge graph engineering, and entity-based organic discovery.',
    credentials: 'Author of 4 papers on Natural Language Search',
    specialty: 'Entity SEO & AI Overviews (SGE)',
    image: 'SJ'
  },
  {
    name: 'Marcus Vance',
    role: 'Director of Paid Media',
    bio: 'PPC veteran managing over $45M in annual Google and Meta ad spend with an average client ROAS of 3.8x.',
    credentials: 'Google Premier Partner Certified Trainer',
    specialty: 'PMax, Meta CAPI & Value Bidding',
    image: 'MV'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Conversion Science (CRO)',
    bio: 'Behavioral psychologist and UX engineer who has conducted over 1,200 commercial A/B tests generating $40M+ in verified client uplift.',
    credentials: 'Certified UX Master, Nielsen Norman Group',
    specialty: 'Cognitive Friction Elimination',
    image: 'ER'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How long does it take to see tangible results from your marketing campaigns?',
    answer: 'For Paid Advertising (Google & Meta Ads), we typically establish positive unit economics, reduced CPAs, and profitable ROAS within 14 to 30 days. For Technical SEO and Content Architecture, indexation and ranking velocity typically show measurable organic traffic and conversion uplifts between 60 and 90 days, compounding exponentially thereafter. We provide real-time dashboard access so you observe progress daily.'
  },
  {
    question: 'Do you work with small businesses or only enterprise brands?',
    answer: 'We work with ambitious businesses generating at least $250k in annual revenue or well-funded startups with a validated product/market fit. Our Starter Growth package is tailored specifically for regional market leaders and fast-growing SMBs, while our Omnichannel and Domination packages support 8-figure brands.'
  },
  {
    question: 'What is your minimum monthly ad budget recommendation?',
    answer: 'For paid advertising campaigns (Google Ads or Meta Ads), we recommend a minimum media budget of $3,000/month to ensure statistical significance for algorithmic learning and rapid creative testing. Clients running omnichannel campaigns typically invest between $10,000 and $100,000+ per month in ad spend.'
  },
  {
    question: 'Do you guarantee results, and how is accountability handled?',
    answer: 'While no ethical agency can guarantee third-party platform algorithms (and anyone who does is misleading you), we stand behind our work with Performance Milestones. If we do not hit our agreed 90-day KPI targets (such as CPA reductions or conversion uplifts), we work free of management fees until those benchmarks are achieved. Our contracts are performance-oriented with no locking handcuffs.'
  },
  {
    question: 'How do you report performance and ensure total transparency?',
    answer: 'No static monthly PDF reports filled with vanity metrics. You receive a live, 24/7 client portal connecting directly to your Google Analytics 4, ad accounts, and CRM. You see exact ad spend, cost per qualified lead, return on ad spend, and net revenue generated in real time, supplemented by weekly Loom strategy videos and bi-weekly executive calls.'
  },
  {
    question: 'Can you manage both Google Ads and Meta Ads simultaneously?',
    answer: 'Yes, and this is where our clients see the highest returns. High-intent Google Search captures users actively looking to buy today, while Meta and YouTube build demand and re-engage prospects across their digital lifecycle. Coordinating both platforms prevents cross-channel cannibalization and optimizes your blended ROAS.'
  },
  {
    question: 'Do you design and develop websites from scratch?',
    answer: 'Yes. We build high-speed, custom digital experiences using modern frameworks (Next.js, Tailwind, Webflow). Unlike traditional design agencies that prioritize aesthetic fluff over results, our web development is engineered with CRO principles, sub-second load times, and structured conversion paths to turn visitors into paying customers.'
  },
  {
    question: 'How do I get started, and what happens after I book an audit?',
    answer: 'Click "Get Your Free Marketing Audit" or "Book a Strategy Call". Our senior strategists will inspect your current digital presence, run a 30-point technical audit of your ad accounts and website, and prepare a personalized teardown showing exactly where money is leaking and how to capture high-margin growth. No sales pressure—just actionable data.'
  }
];
