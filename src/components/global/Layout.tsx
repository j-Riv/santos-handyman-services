import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Header />
      <main role="main" id="mainContent">
        {children}
      </main>
      <Footer />
    </div>
  );
}
