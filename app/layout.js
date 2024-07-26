"use client";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { GeneralProvider } from './assets/context';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ScrollToTop } from './assets/custom';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Pacesetter Frontier</title>
        <meta name="description" content="Your page description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Poppins:wght@300;400;700&family=Raleway:wght@200;300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Poppins:wght@300;400;700&family=Raleway:wght@200;300;400;500;700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <body className={inter.className}>
        <HelmetProvider>
          <GeneralProvider>
            <ScrollToTop>
              {children}
            </ScrollToTop>
          </GeneralProvider>
        </HelmetProvider>
      </body>
    </html>
  );
}
