import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main className="mx-auto max-w-[80%]">
      <h1 className="text-3xl font-bold underline text-center">
        Santos Handyman Services
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Santos Handyman Services</title>;
