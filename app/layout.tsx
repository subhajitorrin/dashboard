import '@/styles/globals.css';
import { Metadata } from 'next';
import { seoMetaData } from '@/config/seo-meta-data';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = seoMetaData;

interface RootLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>CRM DASHBOARD</title>
        <meta name="description" content="crm dashboard" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
