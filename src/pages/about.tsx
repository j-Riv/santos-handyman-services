import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components';

const AboutPage = ({ location }: { location: any }) => {
  return (
    <Layout location={location}>
      <div className="container mx-auto my-4 about-page">
        <div className="text-center h-[300px]">Coming Soon...</div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <title>About | Santos Handyman Services</title>
);
