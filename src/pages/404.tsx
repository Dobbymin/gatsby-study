import * as React from 'react';

import { Seo } from '../components/seo/seo';
import { Layout } from '../widgets';

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export const Head = () => <Seo title='404: Not Found' />;

export default NotFoundPage;