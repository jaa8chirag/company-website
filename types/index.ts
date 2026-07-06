export interface Service {
  id: string
  icon: string
  title: string
  shortDesc: string
  description: string
  color: string
  gradient: string
  features: string[]
  slug: string
}

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  icon: string
}

export interface TrustedCompany {
  name: string
  initials: string
  color: string
}

export interface WhyChooseItem {
  icon: string
  title: string
  description: string
  color: string
}

export interface TechCategory {
  id: string
  label: string
  items: TechItem[]
}

export interface TechItem {
  name: string
  icon?: string
  color: string
}

export interface Industry {
  id: string
  icon: string
  title: string
  description: string
  color: string
  gradient: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
  color: string
}

export interface PortfolioProject {
  id: string
  title: string
  category: string[]
  industry: string
  tech: string[]
  description: string
  metrics: { label: string; value: string }[]
  gradient: string
  color: string
}

export interface Testimonial {
  id: string
  name: string
  designation: string
  company: string
  avatar: string
  initials: string
  rating: number
  review: string
  color: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  initials: string
  color: string
  linkedin?: string
  bio: string
  skills: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  authorInitials: string
  authorColor: string
  date: string
  readTime: string
  gradient: string
  tags: string[]
}

export interface CareerPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  skills: string[]
}

export interface Award {
  title: string
  year: string
  issuer: string
  icon: string
  color: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
