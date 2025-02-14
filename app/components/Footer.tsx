'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Footer = () => {
    const { t, i18n } = useTranslation("navFooterTranslation");
    return(
        <footer className="home-footer">
            <div className="company-info">
              <p>CupCakesNSpan</p>
              <div className="language-switcher">
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                <button onClick={() => i18n.changeLanguage('cy')}>CY</button>
                <button onClick={() => i18n.changeLanguage('jp')}>JP</button>
              </div>
            </div>
            <div className="legal">
              <p>{t('tos')}</p>
              <p>{t('pp')}</p>
            </div>
            <div className="social">
              <p>{t('facebook')}</p>
              <p>{t('Twitter')}</p>
              <p>{t('Instagram')}</p>
            </div>
            <div className="credits">
              <Link href="/credits">Credits</Link>
            </div>
        </footer>
    );
};

export default Footer;