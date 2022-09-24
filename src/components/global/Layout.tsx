import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({
  location,
  children,
}: {
  location: any;
  children: ReactNode;
}) {
  return (
    <div className="">
      <Header path={location.pathname} />
      <main role="main" id="mainContent">
        {children}
      </main>
      <Footer />
    </div>
  );
}
