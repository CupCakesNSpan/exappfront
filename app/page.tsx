"use client"
import { useEffect } from 'react';
import { authOnAppLoad } from '@/services/auth';
import Image from 'next/image';

export default function Home() {

  useEffect(() => {
    const getAuthCredentialsOnAppLoad = async() => {
      await authOnAppLoad(); // This will get a public key for later use in encrypting login information
    }
    getAuthCredentialsOnAppLoad();
  }, []);

  return (
    <div className="container">
      {/* Title */}
      <div className="welcome text-center md:text-left lg:text-left">
        <p className=" text-3xl mt-2 md:text-5xl lg:text-5xl md:-translate-y-16 lg:-translate-y-16 md:ml-2 lg:ml-2">Welcome to APP</p>
      </div>
      {/* Introduction */}
      <div className="hero-header">
        <div className="left-words">
          <p className="left-words-title">Header section to introduce your app</p>
          <p className="left-words-main">A tiny bit of detail about the app</p>
        </div>
        <div className="right-pictures">
            <Image className="image-component" src="/images/exercise1.jpg" alt="Woman doing ab crunch" width={500} height={0} />
        </div>
      </div>

      {/* App description */}
      <div className="our-app-description">
        <div className="left-pictures">
          <Image className="image-component" src="/images/exercise1.jpg" alt="Woman doing ab crunch" width={500} height={0} />
        </div>
        <div className="right-words">
          <p className="right-words-title">A section to describe what the app does</p>
          <p className="right-words-main">A tiny bit of detail about the what the app does</p>
        </div>
      </div>

      {/* App features */}
      <div className="our-app-features">
        <div className="left-words">
          <p className="left-words-title">A section to explain an app feature</p>
          <p className="left-words-main">A brief description of the app feature</p>
        </div>
        <div className="right-pictures">
          <Image className="image-component" src="/images/exercise1.jpg" alt="Woman doing ab crunch" width={500} height={0} />
        </div>
      </div>

      {/* App benefits */}
      <div className="our-app-benefits">
        <div className="left-pictures">
          <Image className="image-component" src="/images/exercise1.jpg" alt="Woman doing ab crunch" width={500} height={0} />
        </div>
        <div className="right-words">
          <p className="right-words-title">A section to describe the benefit of the app</p>
          <p className="right-words-main">A bit more detail about the benefit of the app</p>
        </div>
      </div>
    </div>
    
  );
}
