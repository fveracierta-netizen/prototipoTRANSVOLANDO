export type NavigationPage =
  | 'home'
  | 'servicios'
  | 'service'
  | 'internacional'
  | 'casos'
  | 'contacto'
  | 'blog'
  | 'article'
  | 'presupuesto'
  | 'excluded'
  | 'not_found';

export type NavigateFunction = (
  page: NavigationPage,
  serviceSlug?: string,
  articleSlug?: string,
  extraParams?: Record<string, string>
) => void;

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  number: string;
  categoryTag?: string;
  heroTitle: string;
  valueProp: string;
  shortDesc: string;
  featuredQuote?: string;
  benefits: string[];
  cargoTypes: {
    title: string;
    description: string;
    items?: string[];
  }[];
  vehicles: {
    name: string;
    description: string;
    capacity: string;
  }[];
  specs: {
    label: string;
    value: string;
    detail?: string;
  }[];
  permits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  coverage: {
    national: string;
    international: string;
  };
  faqs: {
    q: string;
    a: string;
  }[];
  image: string;
  finalCta?: {
    title: string;
    description: string;
    quoteButtonText?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readingTime: string;
  summary: string;
  image: string;
  sections: {
    subtitle?: string;
    paragraphs: string[];
    callout?: string;
  }[];
}

export interface QuoteFormData {
  // Step 1: Rutas
  originCity: string;
  originPostal: string;
  originCountry: string;
  destCity: string;
  destPostal: string;
  destCountry: string;
  
  // Step 2: Carga
  serviceType: string;
  cargoDescription: string;
  weightKg: string;
  palletsCount: string;
  dimensions: string;
  readyDate: string;
  urgency: 'estandar' | 'urgente' | 'fecha_fija';

  // Step 3: Contacto
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  notes: string;
  acceptedPrivacy: boolean;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptedPrivacy: boolean;
}
