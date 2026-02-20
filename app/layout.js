import { Space_Grotesk, Syne_Mono } from 'next/font/google';
import './globals.css';

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700']
});

const mono = Syne_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400']
});

export const metadata = {
  title: 'kmj.partners',
  description: 'Artsy, strategic marketing for ambitious brands.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
