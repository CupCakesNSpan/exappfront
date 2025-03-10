"use client";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { authOnAppLoad } from "../services/auth";
import Image from "next/image";
import AuthButtons from "./components/AuthButtons";

export default function Home() {
  const { t } = useTranslation("homeTranslation");

  useEffect(() => {
    const getAuthCredentialsOnAppLoad = async () => {
      await authOnAppLoad(); // This will get a public key for later use in encrypting login information
    };
    getAuthCredentialsOnAppLoad();
  }, []);

  return (
    <div className="container">
      {/* Title */}
      <section className="welcome text-center md:text-left lg:text-left">
        <p className=" text-3xl mt-2 md:text-5xl lg:text-5xl md:-translate-y-16 lg:-translate-y-16 md:ml-2 lg:ml-2">
          {t("welcome")}
        </p>
      </section>
      {/* Introduction */}
      <section className="hero-header">
        <div className="left-words">
          <p className="left-words-title">{t("introHeader")}</p>
          <p className="left-words-main">{t("introDetails")}</p>
        </div>
        <div className="right-pictures">
          <Image
            className="image-component"
            src="/images/exercise1.jpg"
            alt="Woman doing ab crunch"
            width={500}
            height={0}
          />
        </div>
      </section>

      {/* App description */}
      <section className="our-app-description">
        <div className="left-pictures">
          <Image
            className="image-component"
            src="/images/running.jpg"
            alt="A man running"
            width={500}
            height={0}
          />
        </div>
        <div className="right-words">
          <p className="right-words-title">{t("descriptionTitle")}</p>
          <p className="right-words-main">{t("descriptionDetails")}</p>
        </div>
      </section>

      {/* App features */}
      <section className="our-app-features">
        <div className="left-words">
          <p className="left-words-title">{t("featureTitle")}</p>
          <p className="left-words-main">{t("featureDetails")}</p>
        </div>
        <div className="right-pictures">
          <Image
            className="image-component"
            src="/images/smartphone.jpg"
            alt="A smartphone being held"
            width={500}
            height={0}
          />
        </div>
      </section>

      {/* App benefits */}
      <section className="our-app-benefits">
        <div className="left-pictures">
          <Image
            className="image-component"
            src="/images/success.jpg"
            alt="Two hands joined in celebration"
            width={500}
            height={0}
          />
        </div>
        <div className="right-words">
          <p className="right-words-title">{t("benefitTitle")}</p>
          <p className="right-words-main">{t("benefitDetails")}</p>
        </div>
      </section>

      {/* AuthButtons */}
      <section className="auth-buttons-area">
        <AuthButtons />
      </section>
    </div>
  );
}
