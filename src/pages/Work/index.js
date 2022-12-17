import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Box, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';

import pins from '../../assets/hero.png';
import Page from '../../components/Page';
import useStore from '../../stores';
import colors from '../../theme/foundation/colors';
import { breatheInTransitionStyles } from '../../theme/transitionUtil';

import GridSquare from './GridSquare';
import { experience } from './util';

import './styles.css';

const Work = () => {
  const { showNav } = useStore();
  const nodeRef = useRef();
  const border = showNav ? `1px solid ${colors.brand.dark}` : 'none';

  return (
    <Page colorScheme="light">
      <Flex alignItems="center" flexWrap={['wrap', 'wrap', 'nowrap']} height={['100%', '100%', '80%']} justifyContent="center" pt="5rem">
        <Flex flexBasis="100%">
          <Transition
            appear={showNav}
            in={showNav}
            nodeRef={nodeRef}
            timeout={300}
          >
            {state => (
              <Image
                src={pins}
                style={{
                  transform: 'scale(0)',
                  ...breatheInTransitionStyles[state]
                }}
              />
            )}
          </Transition>
        </Flex>
        <VStack alignItems="flex-start" spacing={4} width={['85%', '85%', '85%', '50%']}>
          <Heading size="2xl">PINS</Heading>
          <Text>
            PINS is a risk management software. We serve a range of industries, simplifying and automating the way companies request,
            track, and manage insurance certificates.
          </Text>
          <Text mb={8}>
            During my time at PINS, I&apos;ve led Front End Engineering initiatives like co-creating and implementing a design system, creating a component library,
            and transitioning our app from Redux to React Query.
            I&apos;ve also played an integral role in meeting business goals, including establishing our public API, writing and testing migration scripts to
            bring customers on our old app to our new app, shipping in-demand full stack features, improving app performance, and building a Procore integration.
          </Text>
          <Box
            borderBottom={border}
            borderTop={border}
            className="slider"
            width="100%"
          >
            <Box className="slider-row" py={2} textStyle="mono">
              <Text className="slider-text">React</Text>
              <Text className="slider-text">Redux</Text>
              <Text className="slider-text">React Query</Text>
              <Text className="slider-text">Laravel</Text>
              <Text className="slider-text">MySQL</Text>
              <Text className="slider-text">AWS</Text>
              <Text className="slider-text">Figma</Text>
            </Box>
          </Box>
        </VStack>
      </Flex>

      <Box display={showNav ? 'block' : 'none'} mt="6rem">
        <Heading pb={6} size="xl" textAlign="center">PROJECTS + EXPERIENCE</Heading>
        <Grid color="brand.light" templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}>
          {experience.map((item, idx) => (
            <GridSquare
              isFirst={idx === 0}
              isLast={idx === experience.length - 1}
              key={item.company}
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
};

export default Work;
