import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Brent C',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
