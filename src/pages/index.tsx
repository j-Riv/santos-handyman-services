import * as React from 'react';
import type { HeadFC } from 'gatsby';

import { Hero, Services } from '../components';

const IndexPage = () => {
  return (
    <div className="index-page">
      <Hero />
      <div className="container mx-auto">
        <Services />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Santos Handyman Services</title>;
