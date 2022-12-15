import { extendTheme } from '@chakra-ui/react';

import { buttonTheme } from './components/button';
import colors from './foundation/colors';
import fonts from './foundation/fonts';
import textStyles from './foundation/textStyles';

const themeOverrides = {
  colors,
  fonts,
  textStyles,
  components: { Button: buttonTheme }
};

const theme = extendTheme(themeOverrides);

export default theme;

