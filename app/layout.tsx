import type { Metadata } from "next";
import "./globals.css";
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
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
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
