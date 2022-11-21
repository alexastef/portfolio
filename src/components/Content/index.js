import React from 'react';
import {Box} from "@chakra-ui/react";

const Content = ({ children }) => (
    <Box height="81vh" overflowY="auto">
        {children}
    </Box>
)

export default Content;
