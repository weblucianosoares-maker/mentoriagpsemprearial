export interface FaqItem {
  question: string;
  answer: string;
}

export interface PillarItem {
  title: string;
  description: string;
  iconName: 'Settings' | 'Banknote' | 'Shield' | 'Map' | 'Users';
}

export interface DeliverableItem {
  title: string;
  description: string;
  iconName: 'Calendar' | 'Users' | 'Briefcase' | 'Banknote';
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatarInitials: string;
}