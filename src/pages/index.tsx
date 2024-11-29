import React, { FunctionComponent } from 'react';

import Text from '../components/Test';
import { Layout } from '../widgets';

const Home: FunctionComponent = function () {
  return (
    <Layout>
      <Text text='Contents' />
    </Layout>
  );
};

export default Home;
