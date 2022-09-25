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

export const Head: HeadFC = () => (
  <>
    <title>Santos Handyman Services</title>
    <meta
      name="description"
      content="My name is Elias Santos and we are Santos Handyman Services. What can we do for you? Regardless of the size of your home, maintaining it can be a struggle. We provide our handyman services to all Orange County. We take pride in what we do. We're available for all your handyman needs. Call us today!"
    />
  </>
);
