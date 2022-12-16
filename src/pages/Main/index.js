import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Flex, Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react';

import Page from '../../components/Page';
import useStore from '../../stores';
import { defaultStyle, slideDownDelayedStyles, slideDownTransitionStyles } from '../../theme/transitionUtil';

import '../styles.css';

const Main = () => {
  const { showNav } = useStore();
  const nodeRef = useRef();

  return (
    <Page colorScheme="dark">
      <Flex alignItems="center" height={['100%', '100%', '80%']} justifyContent="center" minHeight="inherit" pt="5rem">
        <Grid gap={6} templateColumns="1" templateRows="repeat(3, 1fr)">
          <GridItem colSpan={1} overflow="hidden" rowSpan={1}>
            <Transition
              appear={showNav}
              in={showNav}
              nodeRef={nodeRef}
              timeout={4000}
            >
              {state => (
                <Heading
                  as="h1"
                  fontFamily="Tenez"
                  fontSize="8rem"
                  lineHeight="0.75"
                  pb={4}
                  size="4xl"
                  style={{
                    ...defaultStyle,
                    ...slideDownTransitionStyles('100')[state]
                  }}
                >
                  Hello there
                </Heading>
              )}
            </Transition>
          </GridItem>
          <GridItem colSpan={1} overflow="hidden" rowSpan={1}>
            <Transition
              appear={showNav}
              in={showNav}
              nodeRef={nodeRef}
              timeout={4000}
            >
              {state => {
                const transitionDelay = slideDownDelayedStyles('500ms');
                return (
                  <Heading
                    fontSize="2rem"
                    fontWeight="300"
                    style={{
                      ...defaultStyle,
                      ...slideDownTransitionStyles('40')[state],
                      ...transitionDelay[state]
                    }}
                  >
                    I&apos;m Alexa, a product-focused Software Engineer based in San Diego. From design to deployment, I love every step in the process
                    of bringing ideas to life.
                  </Heading>
                );
              }}
            </Transition>
          </GridItem>
          <GridItem colSpan={1} overflow="hidden" rowSpan={1}>
            <Transition
              appear={showNav}
              in={showNav}
              nodeRef={nodeRef}
              timeout={4000}
            >
              {state => {
                const transitionDelay = slideDownDelayedStyles('500ms');
                return (
                  <Text
                    style={{
                      ...defaultStyle,
                      ...slideDownTransitionStyles('40')[state],
                      ...transitionDelay[state]
                    }}
                    textStyle={['accentH5', 'accentH5', 'accentH3']}
                  >
                    Currently developing at
                    {' '}
                    <Link className="inline-link" href="https://www.pinsadvantage.com/">PINS</Link>
                  </Text>
                );
              }}
            </Transition>
          </GridItem>
        </Grid>
      </Flex>
    </Page>
  );
};

export default Main;
