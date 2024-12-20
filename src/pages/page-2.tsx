import React from 'react';

import { Link } from 'gatsby';

import { Seo } from '../shared';
import { Layout } from '../widgets';

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title='Page two' />;

export default SecondPage;
