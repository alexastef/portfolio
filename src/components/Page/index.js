import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import useStore from '../../stores';
import colors from '../../theme/foundation/colors';
import NavBar from '../NavBar';

const Page = ({ colorScheme, children }) => {
  const pageColors = colors.colorSchemes[colorScheme];
  const { showNav } = useStore();

  return (
    <Box
      background={pageColors.background}
      color={pageColors.text}
      height="auto"
      minHeight="100vh"
      padding={['1rem', '2rem', '6rem']}
      width="100%"
    >
      <NavBar />
      <Box color={showNav ? 'inherit' : 'transparent'} height="auto" minHeight={['80vh', '80vh', '70vh']}>
        {children}
      </Box>
    </Box>
  );
};

Page.propTypes = { colorScheme: PropTypes.oneOf(['light', 'dark']), children: PropTypes.node.isRequired };

export default Page;
