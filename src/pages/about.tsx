import * as React from 'react';
import type { HeadFC } from 'gatsby';

const AboutPage = () => {
  return (
    <div className="container mx-auto about-page">
      <div className="text-center h-[300px]">Coming Soon...</div>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <title>About | Santos Handyman Services</title>
);
