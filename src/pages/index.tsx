import * as React from 'react';
import type { HeadFC } from 'gatsby';

import {
  Hero,
  Services,
  Banner,
  TwoColumns,
  Contact,
  Layout,
} from '../components';

const IndexPage = ({ location }: { location: any }) => {
  return (
    <Layout location={location}>
      <div className="index-page">
        <Hero />
        <div className="container mx-auto">
          <Services />
        </div>
        <Banner />
        <TwoColumns />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Santos Handyman Services</title>;
