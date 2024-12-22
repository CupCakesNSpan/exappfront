"use client"
import { useEffect } from 'react';
import { authOnAppLoad } from '@/services/auth';

export default function Home() {

  useEffect(() => {
    const getAuthCredentialsOnAppLoad = async() => {
      await authOnAppLoad(); // This will get a public key for later use in encrypting login information
    }
    getAuthCredentialsOnAppLoad();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  );
}
