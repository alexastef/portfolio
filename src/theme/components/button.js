import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

import colors from '../foundation/colors';

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

// const generateTextHoverStyle = colorScheme => ({
//   position: 'relative',
//   color: 'orange',
//   borderRadius: '2px',
//   transition: 'all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
//   _before: {
//     content: '""',
//     position: 'absolute',
//     transition: 'all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
//     zIndex: '-1',
//     top: '0',
//     width: '0',
//     height: '100%',
//     left: '0',
//     border: '1px solid red',
//     borderLeft: 0,
//     borderRight: 0
//   },
//   _after: {
//     content: '""',
//     position: 'absolute',
//     transition: 'all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
//     zIndex: '-1',
//     top: '0',
//     width: '0',
//     height: '100%',
//     right: '0'
//   },
//   _hover: {
//     color: 'purple',
//     transitionDelay: '0.5s',
//     _before: {
//       transitionDelay: '0s',
//       width: '100%'
//     },
//     _after: {
//       background: 'lightblue',
//       transitionDelay: '0.35s',
//       width: '100%'
//     }
//   }
// });

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
  const hoverStyle = generateSolidHoverStyle(colorScheme);

  return {
    bgColor: 'transparent',
    color: colorScheme.background,
    ...hoverStyle
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
