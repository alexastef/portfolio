import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Text, VStack } from '@chakra-ui/react';

import Page from '../../components/Page';
import pins from '../../images/hero.png';
import colors from '../../theme/foundation/colors';

import GridSquare from './GridSquare';
import { experience } from './util';

import './styles.css';

const Work = () => (
  <Page colorScheme="light">
    <Flex alignItems="center" flexWrap={['wrap', 'wrap', 'nowrap']} height={['100%', '100%', '80%']} justifyContent="center" pt="5rem">
      <Flex flexBasis="100%">
        <Image src={pins} />
      </Flex>
      <VStack alignItems="flex-start" spacing={4} width={['85%', '85%', '85%', '50%']}>
        <Heading size="2xl">PINS</Heading>
        <Text>PINS is a risk management software. We serve a range of industries, simplifying and automating the way companies request, track, and manage insurance certificates.</Text>
        <Text>
          During my time at PINS, I've led Front End Engineering initiatives like co-creating and implementing a design system, creating a component library, and transitioning our app from Redux to React Query.
          I've also played an integral role in meeting business goals, including establishing our public API, writing and testing migration scripts to bring customers on our old app to our new app, shipping in-demand full stack features, improving
          app performance, and building a Procore integration.
        </Text>
        <Box
          borderBottom={`1px solid ${colors.brand.dark}`}
          borderTop={`1px solid ${colors.brand.dark}`}
          className="slider"
          mt={2}
          width="100%"
        >
          {/* <HStack */}
          {/*    // flexWrap={["wrap", "wrap", "nowrap"]} */}
          {/*    spacing={4} */}
          {/*    // width="100%" */}
          {/*    justifyContent="space-between" */}
          {/*    textStyle="mono" */}
          {/*    className="slider-row" */}
          {/*    py={1} */}
          {/* > */}
          <Box className="slider-row" textStyle="mono">
            <Text className="slider-text">React</Text>
            <Text className="slider-text">Redux</Text>
            <Text className="slider-text">React Query</Text>
            <Text className="slider-text">Laravel</Text>
            <Text className="slider-text">MySQL</Text>
            <Text className="slider-text">AWS</Text>
            <Text className="slider-text">Figma</Text>
          </Box>

          {/* </HStack> */}
        </Box>
      </VStack>
    </Flex>

    <Box mt="6rem">
      <Heading pb={6} size="xl" textAlign="center">PROJECTS + EXPERIENCE</Heading>
      <Grid color="brand.light" templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}>
        {experience.map((item, idx) => (
          <GridSquare
            isFirst={idx === 0}
            isLast={idx === experience.length - 1}
            repoUrl={item.repoUrl}
            role={item.role}
            stack={item.stack}
            title={item.company}
            websiteUrl={item.websiteUrl}
          />
        ))}
      </Grid>
    </Box>
  </Page>
);

export default Work;
