import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import { Layout } from '../components';

const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage = ({ location }: { location: any }) => {
  return (
    <Layout location={location}>
      <div className="container mx-auto text-center min-h-[300px] my-4">
        <h1 className="mb-4 text-3xl font-bold text-center uppercase">
          Page not found
        </h1>
        <p className="text-center">
          Sorry 😔, we couldn’t find what you were looking for. Feel free to{' '}
          <Link to="/#contact" className="underline">
            contact
          </Link>{' '}
          us with any questions.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="underline">
            Go home
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
