import React, { ReactNode } from 'react';

import { Box, ChakraProvider, Flex } from '@chakra-ui/react';

import { useStaticQuery, graphql } from 'gatsby';

import { Footer, Header } from '../../common';
// import '../layout/layout.css';
import '../layout/reset.css';
import globalStyle from '../theme/global/global-style';

export const Layout = ({ children }: { children: ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ChakraProvider theme={globalStyle}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        m='0 auto'
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};
