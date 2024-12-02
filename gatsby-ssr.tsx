/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import { ChakraProvider } from '@chakra-ui/react';

import { GlobalStyle } from './src/widgets';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return <ChakraProvider theme={GlobalStyle}>{element}</ChakraProvider>;
};

export const onRenderBody = ({
  setHtmlAttributes,
}: {
  setHtmlAttributes: (attributes: { [key: string]: string }) => void;
}) => {
  setHtmlAttributes({ lang: 'ko' });
};
