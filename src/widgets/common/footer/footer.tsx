import React from 'react';

import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box mt='32px' fontSize='sm'>
      <Text fontSize='sm'>
        © {new Date().getFullYear()} &middot; Built with
      </Text>
      <a href='https://www.gatsbyjs.com'>Gatsby</a>
    </Box>
  );
};
