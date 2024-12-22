import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
                <Link className="navlink" href="/">HOME</Link>
              </div>
              <div className="nav-navlink">
                <Link className="navlink" href="/about">ABOUT</Link>
              </div>
              <div className="nav-navlink">
                <Link className="navlink" href="/about">WORKOUTS</Link>
              </div>
            </div>
            <div className="nav-loginlink">
              <div className="nav-dropbtn">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="dropdown-content">
                <div className="nav-navlink">
                  <Link className="dropdown-content-navlink" href="/login">Login</Link>
                </div>
                <div className="nav-navlink">
                  <Link className="dropdown-content-navlink" href="/register">Register</Link>
                </div>
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
