import '@/styles/globals.css';
import { Metadata } from 'next';
import { seoMetaData } from '@/config/seo-meta-data';
import { poppins } from '@/lib/fonts';

export const metadata: Metadata = seoMetaData;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
