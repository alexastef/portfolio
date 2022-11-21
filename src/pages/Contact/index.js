import React from'react';
import Page from "../../components/Page";
import {Heading, VStack, Flex, Box, Text} from "@chakra-ui/react";

const Contact = () => {
    return (
        <Page colorScheme="dark">
            <Flex height="100%" alignItems="center">
                <VStack>
                    <Heading>
                        I'd love to hear from you.
                    </Heading>
                    <Text>Some other text</Text>
                </VStack>
                <Box>
                    Maybe some other stuff idk
                </Box>
            </Flex>
        </Page>
    )
}

export default Contact;
