import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components';

const WhyUsPage = ({ location }: { location: any }) => {
  return (
    <Layout location={location}>
      <div className="container mx-auto my-4 why-us-page">
        <div className="text-center h-[300px]">Coming Soon...</div>
      </div>
    </Layout>
  );
};

export default WhyUsPage;

export const Head: HeadFC = () => (
  <title>Why Hire Us? | Santos Handyman Services</title>
);
