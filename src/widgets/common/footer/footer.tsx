import React from 'react';

import { Box } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      mt={`var(--space-5)`}
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
      }}
    >
      © {new Date().getFullYear()} &middot; Built with
      <a href='https://www.gatsbyjs.com'>Gatsby</a>
    </Box>
  );
};
