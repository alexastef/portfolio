import { color, defineStyle, defineStyleConfig } from '@chakra-ui/react';

import colors from '../foundation/colors';

// TODO: add hover effects
const generateSolidHoverStyle = colorScheme => ({
  transition: 'all 0.4s',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    opacity: '0',
    transition: 'all 0.4s',
    border: `1px solid ${colorScheme.background}`,
    color: colorScheme.background,
    borderRadius: '1.5rem',
    transform: 'scale(0.1, 1)'
  },
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    transition: 'all 0.4s',
    borderRadius: '1.5rem',
    color: colorScheme.background
  },
  _hover: {
    color: colorScheme.background,
    background: 'transparent',
    letterSpacing: '-0.01em',
    _before: {
      opacity: 1,
      background: 'transparent',
      transform: 'scale(1, 1)'
    },
    _after: {
      opacity: 0,
      transform: 'scale(0.1, 1)',
      color: colorScheme.background
    }
  }
});

const baseStyle = defineStyle({
  fontFamily: 'Cutive Mono',
  letterSpacing: '-0.08em',
  borderRadius: '3xl'
});

const solid = defineStyle(props => {
  const { colorScheme: c } = props;
  const colorScheme = colors.colorSchemes[c];
  const hoverStyle = generateSolidHoverStyle(colorScheme);
  return {
    background: colorScheme.background,
    ...hoverStyle,
    color: colorScheme.text
  };
});

const text = defineStyle(props => {
  const { colorScheme: c } = props;
  const colorScheme = colors.colorSchemes[c];

  return {
    bgColor: 'transparent',
    color: colorScheme.background,
    _hover: {
      bgColor: colorScheme.background,
      color: colorScheme.text
    }
  };
});

const outline = defineStyle(props => {
  const { colorScheme: c } = props;
  const colorScheme = colors.colorSchemes[c];

  return {
    background: 'transparent',
    border: `1px solid ${colorScheme.background}`,
    color: colorScheme.background
  };
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { solid, outline, text },
  defaultProps: { variant: 'solid', colorScheme: 'dark' }
});
