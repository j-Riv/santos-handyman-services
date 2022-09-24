import * as React from 'react';
import type { HeadFC } from 'gatsby';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto about-page">
      <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-4">
        The Privacy Policy page denotes our Commitment and Transparency towards
        creating a Better Electronic Environment on the Internet.
      </p>
      <p className="mb-4">
        SantosHandyman.com is well aware of the privacy concerns of our Users.
        We do not share or use any of our user information with any third party.
        The information we collect are retrieved with the consent of the
        individual.
      </p>
      <p className="mb-4">
        SantosHandyman.com tends to change this policy from time to time by
        updating this page. User is responsible for checking this page every now
        and then and comply by the policies listed below.
      </p>
      <h2 className="mb-4 text-2xl font-bold">
        Personal Information & Safeguarding User Information
      </h2>
      <p className="mb-4">
        The information which is collected by SantosHandyman.com, is collected
        with full consent of the users (meaning voluntarily). We do not sell or
        use data with any third party. We safeguard this information and ensure
        the privacy, integrity and security of the owner. We will however use
        such data for research, marketing and advertising purposes. In addition,
        we do not use any of the information collected on an individual basis.
      </p>
      <h2 className="mb-4 text-2xl font-bold">
        Contributions, Comments and Feedback
      </h2>
      <p className="mb-4">
        We welcome feedback, suggestions, and any contribution that would enrich
        our sites. You can share the information via the available feedback
        system. And in case of any such contributions made, the user is free to
        share this information digitally and otherwise. However, the information
        published by our users (comments and feedback) on our site is not our
        discretion and Examples.com does not warrant or subscribe to such
        opinion or information.
      </p>
      <h2 className="mb-4 text-2xl font-bold">Links to Other Sites</h2>
      <p className="mb-4">
        As part of the content, SantosHandyman.com will contain ads which link
        out to other sites. These ads and links are purely for advertorial
        purposes. We may use some of these links to monetise, however, we are
        not responsible for the privacy policy and the content therein.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;

export const Head: HeadFC = () => (
  <title>Privacy Policy | Santos Handyman Services</title>
);
