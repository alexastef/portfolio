import React from 'react';
import Page from "../../components/Page";
import { Heading, Link, VStack } from "@chakra-ui/react";
import '../styles.css';

const Main = () => {
    return (
        <Page colorScheme="dark">
                <VStack alignItems="flex-start" height="100%" minHeight="inherit" justifyContent="center" fontSize="xl" spacing={8}>
                    <Heading as="h1" size="3xl">
                        Hello there.
                    </Heading>
                    <Heading as="h2" size="xl" fontWeight="300">
                        I'm Alexa, a product-focused Software Engineer based in San Diego. From design to deployment, I love every step in the process
                        of bringing ideas to life.
                    </Heading>
                    <Heading as="h4" size="lg" fontFamily="body" fontWeight="300">
                        Currently developing at <Link href="https://www.pinsadvantage.com/" className="inline-link">PINS</Link>
                    </Heading>
                </VStack>
        </Page>
    )
}

export default Main;
