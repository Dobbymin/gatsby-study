import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { GlobalStyle } from './src/widgets';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return <ChakraProvider theme={GlobalStyle}>{element}</ChakraProvider>;
};
