import React, { ReactNode } from 'react';

import { Box, ChakraProvider, Flex } from '@chakra-ui/react';

import { useStaticQuery, graphql } from 'gatsby';

import { Footer, Header } from '../../common';

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box m='0 auto' maxW='54rem' p='32px'>
        <Box as='main'>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
