import React from 'react';
import {Box} from "@chakra-ui/react";
import colors from "../../theme/foundation/colors";
import NavBar from "../NavBar";

const Page = ({ colorScheme, children }) => {
    const pageColors = colors.colorSchemes[colorScheme];

    return (
        <Box
            background={pageColors.background}
            width="100%"
            height="auto"
            minHeight="100vh"
            padding={['1rem', '2rem', '6rem']}
            color={pageColors.text}
        >
            <NavBar />
            <Box minHeight={["80vh", "80vh", "70vh"]} height="auto">
                {children}
            </Box>
        </Box>
    );
}

export default Page;
