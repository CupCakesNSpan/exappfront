"use client"
import "./globals.css";
import "./styles.css";
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Exercise App",
//   description: "An exercise monitoring app by CupCakesNSpan",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setUserDropdownVisible(false);
    setMobileMenuVisible(false);
  }, [pathname]);

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
            
            {/* Navigation Links */}
            <div className="hidden lg:block">
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
            </div>

            {/* Mobile menu  */}
            <div className="block w-full ml-3 lg:hidden z-10">
              <div>
                <FontAwesomeIcon icon={faBars} onClick={() => setMobileMenuVisible(!mobileMenuVisible)} />
              </div>
              {
                mobileMenuVisible &&
                <div className="nav-navlinks-mobile">
                  <div className="nav-navlink">
                    <Link className="navlink" href="/">HOME</Link>
                  </div>
                  <div className="nav-navlink">
                    <Link className="navlink" href="/about">ABOUT</Link>
                  </div>
                  <div className="nav-navlink">
                    <Link className="navlink" href="/workouts">WORKOUTS</Link>
                  </div>
                </div>
              }
              
            </div>
            
            {/* User Dropdown for Login and Registration */}
            <div className="nav-loginlink" onMouseLeave={() => setUserDropdownVisible(false)}>
              <div className="nav-dropbtn" onMouseEnter={() => setUserDropdownVisible(true)}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={`dropdown-content ${userDropdownVisible ? "block" : "hidden"}`}>
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
