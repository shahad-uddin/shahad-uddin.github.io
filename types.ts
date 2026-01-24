
import React from 'react';

export interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  link: string;
  icon: React.ReactNode;
  popular?: boolean;
}

export interface GuideProps {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}