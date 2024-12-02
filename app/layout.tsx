import '@/styles/globals.css';
import { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { seoMetaData } from '@/config/seo-meta-data';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = seoMetaData;

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
