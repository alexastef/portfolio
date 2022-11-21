import React from 'react';
import Page from "../../components/Page";
import {Flex, Box, Text, Image, VStack, Heading, HStack, Grid, GridItem} from '@chakra-ui/react';
import pins from '../../images/hero.png';

const Work = () => {
    const stackItemWidth = ["30%", "30%", "auto"];
    return (
        <Page colorScheme="light">
                <Flex height={["100%", "100%", "80%"]} pt="5rem" justifyContent="center" alignItems="center" flexWrap={["wrap", "wrap", "nowrap"]}>
                    <Flex flexBasis="100%">
                        <Image src={pins}  />
                    </Flex>
                    <VStack width="100%" alignItems="flex-start" spacing={4}>
                        <Heading size="xl">PINS</Heading>
                        <Text>PINS is a risk management software. We serve a range of industries, simplifying and automating the way companies request, track, and manage insurance certificates.</Text>
                        <Text>
                            During my time at PINS, I've led Front End Engineering initiatives like co-creating and implementing a design system, creating a component library, and transitioning our app from Redux to React Query.
                            I've also played an integral role in meeting business goals, including establishing our public API, writing and testing migration scripts to bring customers on our old app to our new app, shipping in-demand full stack features, improving
                            app performance, and building a Procore integration.
                        </Text>
                        <HStack flexWrap={["wrap", "wrap", "nowrap"]} spacing={4} width="100%" justifyContent="space-between" textTransform="uppercase" fontWeight="500">
                            <Text width={stackItemWidth}>React</Text>
                            <Text width={stackItemWidth}>Redux</Text>
                            <Text width={stackItemWidth}>React Query</Text>
                            <Text width={stackItemWidth}>Laravel</Text>
                            <Text width={stackItemWidth}>MySQL</Text>
                            <Text width={stackItemWidth}>AWS</Text>
                            <Text width={stackItemWidth}>Figma</Text>
                        </HStack>
                    </VStack>
                </Flex>

            <Box mt="5rem">
                <Heading size="xl" textAlign="center" pb={6}>PROJECTS + EXPERIENCE</Heading>
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8} color="brand.light">
                    <GridItem colSpan={1} background="brand.dark" height="200px">
                        <Text>Trilogy Education</Text>
                        <Text>Tutor</Text>
                    </GridItem>
                    <GridItem colSpan={1} background="brand.dark" height="200px">
                        <Text>Goodnight Irene's</Text>
                        <Text>Branding + Website</Text>
                    </GridItem>
                    <GridItem colSpan={1} background="brand.dark" height="200px">
                        <Text>Evolve with Anna</Text>
                        <Text>Branding, Website, + Fundraiser</Text>
                    </GridItem>
                    <GridItem colSpan={1} background="brand.dark" height="200px">
                        <Text>Other Skills???</Text>
                        <Text>IDK</Text>
                    </GridItem>
                </Grid>
            </Box>
        </Page>
    );
}

export default Work;
