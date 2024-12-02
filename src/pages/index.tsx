import React, { FunctionComponent } from 'react';

import { Contents } from '../shared';
import { Layout } from '../widgets';

const Home: FunctionComponent = function () {
  return (
    <Layout>
      <Contents contents='Contents' />
    </Layout>
  );
};

export default Home;
