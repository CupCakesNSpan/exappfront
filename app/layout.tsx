import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Exercise App",
  description: "An exercise monitoring app by CupCakesNSpan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <nav className="nav-styles">
            <div className="nav-title">
              AppNameAndLogo
            </div>
            <div className="nav-navlinks">
              <div className="nav-navlink">
                <Link href="/">Home</Link>
              </div>
              <div className="nav-navlink">
                <Link href="/about">About</Link>
              </div>
              <div className="nav-navlink">
                <Link href="/about">Workouts</Link>
              </div>
            </div>
            <div className="nav-loginlink">
              <div className="nav-navlink">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          CupCakesNSpan
        </footer>
      </body>
    </html>
  );
}
