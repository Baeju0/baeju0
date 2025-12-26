import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baeju0.blog'),
  title: 'Baeju0 Labs | 1인 개발자의 실험실',
  description:
    'Small experiments, solid products, transparent records. 작은 실험들, 단단한 제품들, 투명한 기록들.',
  openGraph: {
    title: 'Baeju0 Labs',
    description: '1인 개발자의 실험실',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased graph-paper noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
