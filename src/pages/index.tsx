import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <div className="index-page">
      <h1 className="text-3xl font-bold underline text-center">
        Santos Handyman Services
      </h1>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Santos Handyman Services</title>;
