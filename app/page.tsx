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
    <div className="container">
      <div className="hero-header">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="h-10 w-10 bg-summer-sea-blue-50"></div>
            <div className="h-10 bg-summer-sea-blue-100"></div>
            <div className="h-10 bg-summer-sea-blue-200"></div>
            <div className="h-10 bg-summer-sea-blue-300"></div>
            <div className="h-10 bg-summer-sea-blue-400"></div>
            <div className="h-10 bg-summer-sea-blue-500"></div>
            <div className="h-10 bg-summer-sea-blue-600"></div>
            <div className="h-10 bg-summer-sea-blue-700"></div>
            <div className="h-10 bg-summer-sea-blue-800"></div>
            <div className="h-10 bg-summer-sea-blue-900"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-10 w-10 bg-summer-sky-blue-50"></div>
            <div className="h-10 bg-summer-sky-blue-100"></div>
            <div className="h-10 bg-summer-sky-blue-200"></div>
            <div className="h-10 bg-summer-sky-blue-300"></div>
            <div className="h-10 bg-summer-sky-blue-400"></div>
            <div className="h-10 bg-summer-sky-blue-500"></div>
            <div className="h-10 bg-summer-sky-blue-600"></div>
            <div className="h-10 bg-summer-sky-blue-700"></div>
            <div className="h-10 bg-summer-sky-blue-800"></div>
            <div className="h-10 bg-summer-sky-blue-900"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-10 w-10 bg-summer-sand-50"></div>
            <div className="h-10 bg-summer-sand-100"></div>
            <div className="h-10 bg-summer-sand-200"></div>
            <div className="h-10 bg-summer-sand-300"></div>
            <div className="h-10 bg-summer-sand-400"></div>
            <div className="h-10 bg-summer-sand-500"></div>
            <div className="h-10 bg-summer-sand-600"></div>
            <div className="h-10 bg-summer-sand-700"></div>
            <div className="h-10 bg-summer-sand-800"></div>
            <div className="h-10 bg-summer-sand-900"></div>
          </div>
          <div className="flex flex-col">
            <div className="h-10 w-10 bg-summer-wet-sand-50"></div>
            <div className="h-10 bg-summer-wet-sand-200"></div>
            <div className="h-10 bg-summer-wet-sand-100"></div>
            <div className="h-10 bg-summer-wet-sand-300"></div>
            <div className="h-10 bg-summer-wet-sand-400"></div>
            <div className="h-10 bg-summer-wet-sand-500"></div>
            <div className="h-10 bg-summer-wet-sand-600"></div>
            <div className="h-10 bg-summer-wet-sand-700"></div>
            <div className="h-10 bg-summer-wet-sand-800"></div>
            <div className="h-10 bg-summer-wet-sand-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
