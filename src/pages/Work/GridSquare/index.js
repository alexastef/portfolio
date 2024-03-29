import React from 'react';
import { BsCode, BsGlobe } from 'react-icons/bs';
import { Box, Flex, GridItem, Icon, IconButton, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import colors from '../../../theme/foundation/colors';

const GridSquare = ({ title, role, websiteUrl, repoUrl, isFirst, isLast }) => {
  const gridBorder = `1px solid ${colors.brand.dark}`;
  const borderBottom = isLast ? gridBorder : ['none', 'none', 'none', gridBorder];
  const borderLeft = isFirst ? gridBorder : [gridBorder, gridBorder, gridBorder, 'none'];

  return (
    <GridItem
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={gridBorder}
      borderTop={gridBorder}
      color={colors.brand.dark}
      colSpan={1}
      display="flex"
      flexDirection={['column', 'column', 'row', 'column']}
      height={['200px', '200px', '150px', '200px']}
      justifyContent="space-between"
      p={5}
    >
      <Box>
        <Text textStyle={['accentH4', 'accentH4', 'accentH5', 'accentH4']}>{title}</Text>
        <Text textStyle="bodyLg">{role}</Text>
        {/* {stack.map(item => <Text key={item} textStyle="mono">{item}</Text>)} */}
      </Box>
      <Flex alignItems="flex-end" justifyContent="flex-end">
        {repoUrl && <a href={repoUrl} rel="noreferrer" target="_blank"><IconButton aria-label="code" icon={<Icon as={BsCode} />} size="lg" variant="text" /></a>}
        {websiteUrl && <a href={websiteUrl} rel="noreferrer" target="_blank"><IconButton aria-label="website" icon={<Icon as={BsGlobe} />} size="lg" variant="text" /></a>}
      </Flex>
    </GridItem>
  );
};

GridSquare.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  websiteUrl: PropTypes.string,
  repoUrl: PropTypes.string,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
  // stack: PropTypes.arrayOf(PropTypes.string)
};

export default GridSquare;
