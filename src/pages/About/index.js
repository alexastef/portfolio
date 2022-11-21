import React from 'react';
import Page from "../../components/Page";
import Content from "../../components/Content";
import {Box, Heading, Text, Flex} from "@chakra-ui/react";

const About = () => {
    return (
        <Page colorScheme="light">
            <Flex height={["100%", "100%", "80%"]} pt="5rem" justifyContent="center" alignItems="center">
                <Box>
                    Text about me
                </Box>
                <Box>
                    <Heading>ABOUT</Heading>
                    <Box>My photo goes here</Box>
                </Box>
            </Flex>
        </Page>
    )
}

export default About;
