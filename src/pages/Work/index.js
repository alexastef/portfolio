import React from 'react';
import Page from "../../components/Page";
import {Flex, Box, Text, Image, VStack, Heading, HStack, Grid, GridItem, IconButton, Icon} from '@chakra-ui/react';
import pins from '../../images/hero.png';
// import { FaCode, FaGlobe } from 'react-icons/fa';

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
                        <HStack flexWrap={["wrap", "wrap", "nowrap"]} spacing={4} width="100%" justifyContent="space-between" textStyle="mono">
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
                <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8} color="brand.light">
                    <GridItem colSpan={1} background="brand.dark" height="200px" p={4}>
                        <Text textStyle="accentH4">Trilogy Education</Text>
                        <Text textStyle="bodyLg">Tutor</Text>
                    </GridItem>
                    <GridItem colSpan={1} background="brand.dark" height="200px" p={4}>
                        <Flex direction="column" justifyContent="space-between">
                            <Box>
                                <Text textStyle="accentH4">Goodnight Irene's</Text>
                                <Text textStyle="bodyLg">Branding + Website</Text>
                            </Box>
                            <Flex flexBasis="100%" justifyContent="flex-end">
                                {/*<IconButton aria-label="code" icon={<Icon as={FaCode} />} />*/}
                                {/*<IconButton aria-label="website" icon={<Icon as={FaGlobe} />} />*/}
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1} background="brand.dark" height="200px" p={4}>
                        <Flex direction="column" justifyContent="space-between">
                            <Box>
                                <Text textStyle="accentH4">Evolve with Anna</Text>
                                <Text textStyle="bodyLg">Branding, Website, + Fundraiser</Text>
                            </Box>
                            <Flex flexBasis="100%" justifyContent="flex-end">
                                {/*<IconButton aria-label="code" icon={<Icon as={FaCode} />} />*/}
                                {/*<IconButton aria-label="website" icon={<Icon as={FaGlobe} />} />*/}
                            </Flex>
                        </Flex>

                    </GridItem>
                    {/*<GridItem colSpan={1} background="brand.dark" height="200px" p={4}>*/}
                    {/*    <Flex direction="column" justifyContent="space-between">*/}
                    {/*        <Box>*/}
                    {/*            <Text textStyle="accentH4">Other Skills + Experience</Text>*/}
                    {/*            <ul>*/}
                    {/*                <li><Text textStyle="bodyLg">Code Review</Text></li>*/}
                    {/*                <li><Text textStyle="bodyLg">Graphic Design</Text></li>*/}
                    {/*                <li><Text textStyle="bodyLg">Canva</Text></li>*/}
                    {/*                <li><Text textStyle="bodyLg">Sales</Text></li>*/}
                    {/*            </ul>*/}

                    {/*        </Box>*/}
                    {/*        <Flex flexBasis="100%" justifyContent="flex-end">*/}
                    {/*            /!*<IconButton aria-label="code" icon={<Icon as={FaCode} />} />*!/*/}
                    {/*            /!*<IconButton aria-label="website" icon={<Icon as={FaGlobe} />} />*!/*/}
                    {/*        </Flex>*/}
                    {/*    </Flex>*/}
                    {/*</GridItem>*/}
                </Grid>
            </Box>
        </Page>
    );
}

export default Work;
