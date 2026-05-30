/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
  location: string;
  dimensions: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  avatarUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  priceEst: string;
}

export interface Reservation {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
