import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';

import Resume from '../../assets/resume_web.pdf';
import Page from '../../components/Page';
import newestMe from '../../new-me.png';
import useStore from '../../stores';
import { breatheInTransitionStyles, defaultStyle, slideUpDelayedStyles, slideUpTransitionStyles } from '../../theme/transitionUtil';

const About = () => {
  const [showHeading, setShowHeading] = useState(false);
  const navigate = useNavigate();
  const { showNav } = useStore();
  const imageRef = useRef();
  const headingRef = useRef();

  useEffect(() => () => setShowHeading(false), []);

  return (
    <Page colorScheme="light">
      <Flex alignItems="center" height={['100%', '100%', '80%']} justifyContent="center" minHeight="inherit" pt="3rem">
        <Flex alignItems="flex-end" direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} height="70%">

          <Grid position="relative" templateColumns="repeat(5, 1fr)">
            <GridItem
              display="flex"
              flexDirection="column"
              gridColumn={['2 / span 3', '2 / span 3', '2 / span 4']}
              gridRow={['1 / span 2', '1 / span 2', '1']}
              justifyContent={['flex-end', 'flex-end', 'flex-start']}
              mt="-2%"
              overflow="hidden"
              zIndex={10}
            >
              <Transition
                appear={showHeading}
                in={showHeading}
                nodeRef={headingRef}
                timeout={500}
              >
                {state => (
                  <Heading
                    as="h1"
                    fontSize={['3rem', '4rem', '5rem', '6rem', '8rem']}
                    style={{
                      ...defaultStyle,
                      ...slideUpTransitionStyles('50')[state],
                      ...slideUpDelayedStyles('500ms')
                    }}
                    textAlign={['center', 'center', 'left', 'center']}
                  >
                    ABOUT
                  </Heading>
                )}
              </Transition>
            </GridItem>
            <GridItem
              display="flex"
              gridColumn={['1 / span 5', '1 / span 5', '1 / span 3']}
              gridRow={['3', '3', '2']}
              justifyContent={['normal', 'normal', 'flex-end']}
            >
              <Flex flexDirection="column" p={['1rem']} pr={['', '', '4rem']} width={['100%', '100%', '100%', '80%']}>
                <VStack spacing={2}>
                  <Text>
                    I absolutely love building software. Writing code is the perfect balance of art and logic; I bring ideas to life and solve real-world puzzles every day.
                    When I was younger I felt torn, like I could only be creative or practical, right brain or left brain. Engineering
                    made me realize you can be both. Engineering is the second iteration of my career, branding was the first.
                  </Text>

                  <Text>
                    I bring my expertise in design to every component I build and class I write. I&apos;m extremely self-motivated, collaborative, and curious.
                    Whether it&apos;s a new technology or complex feature, I approach all challenges creatively and meticulously.
                  </Text>

                  <Text>
                    There are a few things besides coding that I love too: pottery, dining out and new restaurants, beach walks, crossword puzzles,
                    graphic design, cooking, British TV, natural wine, live music.
                  </Text>
                </VStack>
                <Flex display={showNav ? 'flex' : 'none'} flexWrap="wrap" justifyContent="space-between" margin="auto" width="100%">
                  <Button
                    my={4}
                    width={['100%', '100%', '100%', '100%', '47%']}
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </Button>
                  <Box
                    my={4}
                    width={['100%', '100%', '100%', '100%', '47%']}
                  >
                    <a
                      href={Resume}
                      rel="noreferrer"
                      style={{ width: '100%' }}
                      target="_blank"
                    >
                      <Button
                        textDecoration="none"
                        width="100%"
                      >
                        Resume
                      </Button>
                    </a>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem gridColumn={['2 / span 3', '2 / span 3', '4 / -1']} gridRow="1 / span 2">
              <Transition
                appear={showNav}
                in={showNav}
                nodeRef={imageRef}
                timeout={500}
                onEntered={() => setTimeout(() => setShowHeading(true), 501)}
              >
                {state => (
                  <Image
                    marginLeft={['auto', 'auto', 'auto', 'auto', 0]}
                    mt={['', '', '', '2rem']}
                    src={newestMe}
                    style={{
                      transform: 'scale(0)',
                      ...breatheInTransitionStyles[state]
                    }}
                  />
                )}
              </Transition>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Page>
  );
};

// maybe add this
/* boxShadow="2px 10px 20px 1px rgb(0 0 0 / 10%)" */

export default About;
