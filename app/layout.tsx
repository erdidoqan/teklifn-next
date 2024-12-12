import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { headers } from 'next/headers';
import { Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://teklifn.com'),
  title: {
    default: 'Teklifn - Hızlı Teklif Hazırlama Platformu',
    template: '%s | Teklifn'
  },
  description: 'KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın. Ücretsiz teklif şablonları ile zamandan tasarruf edin.',
  keywords: ['teklif hazırlama', 'kdv hesaplama', 'fiyat teklifi', 'proforma fatura', 'teklif şablonu'],
  authors: [{ name: 'Teklifn' }],
  creator: 'Teklifn',
  publisher: 'Teklifn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://teklifn.com',
    title: 'Teklifn - Hızlı Teklif Hazırlama Platformu',
    description: 'KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın.',
    siteName: 'Teklifn',
    images: [{
      url: 'https://teklifn.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Teklifn - Hızlı Teklif Hazırlama Platformu'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teklifn - Hızlı Teklif Hazırlama Platformu',
    description: 'KDV hesaplamalarını otomatik yapın, profesyonel teklifler hazırlayın.',
    images: ['https://teklifn.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://teklifn.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}