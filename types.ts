export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  large?: boolean;
}