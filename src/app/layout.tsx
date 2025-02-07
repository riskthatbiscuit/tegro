import { dm_sans } from './fonts';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ModalProvider } from './components/modals/ModalContext';
import GridBackground from './components/backgrounds/grid3';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
        <body
          style={{ fontFamily: dm_sans.style.fontFamily, fontWeight: '100' }}
        >
          {/* <GridBackground> */}
            <Header />
            <main className="flex min-h-[calc(100vh-180px)] items-start justify-center">
              {children}
            </main>
            <Footer />
          {/* </GridBackground> */}
        </body>
      </html>
    </ModalProvider>
  );
}
