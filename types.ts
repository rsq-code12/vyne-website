import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapItem {
  month: string;
  title: string;
  status: 'done' | 'current' | 'future';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgressItem {
  label: string;
  percentage: number;
}