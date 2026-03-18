import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { MixpanelProvider } from '@/components/MixpanelProvider';
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
  title: 'Baeju0 Labs | 기획부터 배포·운영까지 경험한 Frontend Engineer',
  description:
    '기획부터 배포, 운영까지 서비스의 전 과정을 직접 경험한 프론트엔드 엔지니어 포트폴리오.',
  openGraph: {
    title: 'Baeju0 Labs',
    description: '기획부터 배포·운영까지 직접 경험한 프론트엔드 엔지니어',
    locale: 'ko_KR',
    type: 'website',
    images: ['/og-image.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpeg'],
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
        <MixpanelProvider>{children}</MixpanelProvider>
      </body>
    </html>
  );
}
