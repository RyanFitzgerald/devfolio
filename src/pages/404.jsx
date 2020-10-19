import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  title: 'text-lg font-bold',
  link: 'underline',
};

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <h1 className={classes.title}>404: Not Found</h1>
    <p>
      You just hit a route that doesn't exist.{' '}
      <Link className={classes.link} to="/">
        Return to safety
      </Link>
      .
    </p>
  </Layout>
);

export default NotFoundPage;
