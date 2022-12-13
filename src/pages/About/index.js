import React from 'react';
import Page from "../../components/Page";
import {Box, Heading, Text, Flex, VStack, Button, Image, Grid, GridItem} from "@chakra-ui/react";
import me from '../../me.jpg';

const About = () => {
    return (
        <Page colorScheme="light">
            <Box height={["100%", "100%", "80%"]} pt="5rem" justifyContent="center" alignItems="center" minHeight="inherit">

            <Grid
                gridTemplateRows={"100px 1fr 30px"}
                gridTemplateColumns="repeat(5, 1fr)"
                h="100%"
                minH="inherit"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={5}>
                    <Heading as="h1" size="4xl" textAlign="right" pr="5rem">ABOUT</Heading>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Image src={me} margin="0" mt="-3rem" width="100%" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                                <Text>
                                    I absolutely love building software. Writing code is the perfect balance of art and logic; I bring ideas to life and solve real-world puzzles every day.
                                    When I was younger I felt torn, like I could only be creative or practical, right brain or left brain. Engineering
                                    made me realize you can be both. Engineering is the second iteration of my career, branding was the first.
                                </Text>

                                <Text>
                                    I bring my expertise in design to every component I build and class I write. I'm extremely self-motivated, collaborative, and curious. Whether it's a new technology or complex feature,
                                    I approach all challenges creatively and meticulously.
                                </Text>

                                <Text>There are a few things besides coding that I love too: pottery, dining out and new restaurants, beach walks, crossword puzzles, graphic design, cooking, British TV, natural wine, live music.</Text>
                    </GridItem>
            </Grid>
            </Box>

            {/*<Flex height={["100%", "100%", "80%"]} pt="5rem" justifyContent="center" alignItems="center" minHeight="inherit">*/}
            {/*    <Flex direction="column" alignItems="flex-start" position="relative">*/}
            {/*        <Heading as="h1" size="4xl">*/}
            {/*            ABOUT*/}
            {/*        </Heading>*/}
            {/*        <Image src={me} />*/}
            {/*    </Flex>*/}
            {/*    <VStack width="40%" justifyContent="center" height="100%" minHeight="inherit">*/}
            {/*        <VStack spacing={2}>*/}
            {/*            <Text>*/}
            {/*                I absolutely love building software. Writing code is the perfect balance of art and logic; I bring ideas to life and solve real-world puzzles every day.*/}
            {/*                When I was younger I felt torn, like I could only be creative or practical, right brain or left brain. Engineering*/}
            {/*                made me realize you can be both. Engineering is the second iteration of my career, branding was the first.*/}
            {/*            </Text>*/}

            {/*            <Text>*/}
            {/*                I bring my expertise in design to every component I build and class I write. I'm extremely self-motivated, collaborative, and curious. Whether it's a new technology or complex feature,*/}
            {/*                I approach all challenges creatively and meticulously.*/}
            {/*            </Text>*/}

            {/*            <Text>There are a few things besides coding that I love too: pottery, dining out and new restaurants, beach walks, crossword puzzles, graphic design, cooking, British TV, natural wine, live music.</Text>*/}
            {/*        </VStack>*/}

            {/*        <VStack width="100%">*/}
            {/*            <Button width="100%">*/}
            {/*                Resume*/}
            {/*            </Button>*/}
            {/*            <Button width="100%">*/}
            {/*                Contact*/}
            {/*            </Button>*/}
            {/*        </VStack>*/}
            {/*    </VStack>*/}
            {/*</Flex>*/}
        </Page>
    )
}

export default About;
