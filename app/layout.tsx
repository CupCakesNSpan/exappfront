"use client"
import "./globals.css";
import "./styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./fontawesome";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { I18nextProvider } from 'react-i18next';
import i18n from '@services/i18n';

// export const metadata: Metadata = {
//   title: "Exercise App",
//   description: "An exercise monitoring app by CupCakesNSpan",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isTranslationReady, setTranslationReady] = useState(false);
  useEffect(() => {
    i18n.on('initialized', () => {
      setTranslationReady(true);
    });
  }, []);

  if(!isTranslationReady) {
    return (
      <html lang="en">
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <I18nextProvider i18n={i18n}>
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </I18nextProvider>
    </html>
  );
}
