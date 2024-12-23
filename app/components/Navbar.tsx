"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const [userDropdownVisible, setUserDropdownVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const pathname = usePathname();

    const { t } = useTranslation("navFooterTranslation");

    // Close menus on route change
    useEffect(() => {
        setUserDropdownVisible(false);
        setMobileMenuVisible(false);
    }, [pathname]);

    return (
        <header>
            <nav className="nav-styles">
              <div className="nav-title">
                {t('appname')}
              </div>
              
              {/* Navigation Links */}
              <div className="hidden lg:block">
                <div className="nav-navlinks">
                  <div className="nav-navlink">
                    <Link className="navlink" href="/">{t('home')}</Link>
                  </div>
                  <div className="nav-navlink">
                    <Link className="navlink" href="/about">{t('about')}</Link>
                  </div>
                  <div className="nav-navlink">
                    <Link className="navlink" href="/workouts">{t('workouts')}</Link>
                  </div>
                  <div className="nav-navlink">
                      <div>{t('language')}</div>
                    </div>
                </div>
              </div>

              {/* Mobile menu  */}
              <div className="block w-full ml-3 lg:hidden z-10">
                <div>
                  <FontAwesomeIcon icon={faBars} onClick={() => setMobileMenuVisible(!mobileMenuVisible)} data-testid="mobile-menu-icon" />
                </div>
                {
                  mobileMenuVisible &&
                  <div className="nav-navlinks-mobile">
                    <div className="nav-navlink">
                      <Link className="navlink" href="/" data-testid="home">{t('home')}</Link>
                    </div>
                    <div className="nav-navlink">
                      <Link className="navlink" href="/about" data-testid="about">{t('about')}</Link>
                    </div>
                    <div className="nav-navlink">
                      <Link className="navlink" href="/workouts" data-testid="workouts">{t('workouts')}</Link>
                    </div>
                    <div className="nav-navlink">
                      <div data-testid="language">{t('language')}</div>
                    </div>
                  </div>
                }
                
              </div>
              
              {/* User Dropdown for Login and Registration */}
              <div className="nav-loginlink" onMouseLeave={() => setUserDropdownVisible(false)}>
                <div className="nav-dropbtn" onMouseEnter={() => setUserDropdownVisible(true)}>
                  <FontAwesomeIcon icon={faUser} data-testid="user-icon" />
                </div>
                <div className={`dropdown-content ${userDropdownVisible ? "block" : "hidden"}`}>
                  <div className="nav-navlink" data-testid="login-button">
                    <Link className="dropdown-content-navlink" href="/login">{t('login')}</Link>
                  </div>
                  <div className="nav-navlink" data-testid="register-button">
                    <Link className="dropdown-content-navlink" href="/register">{t('register')}</Link>
                  </div>
                </div>
              </div>
              

            </nav>
          </header>
    );
};

export default Navbar