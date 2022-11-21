import { extendTheme } from '@chakra-ui/react';
import colors from "./foundation/colors";
import fonts from './foundation/fonts';

const themeOverrides = {
    colors,
    fonts
};

const theme = extendTheme(themeOverrides);

export default theme;

