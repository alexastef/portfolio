import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react';

import Page from '../../components/Page';
import newestMe from '../../new-me.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <Page colorScheme="light">

      <Flex alignItems="center" height={['100%', '100%', '80%']} justifyContent="center" minHeight="inherit" pt="5rem">
        <Flex alignItems="flex-end" direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} height="70%">

          <Grid position="relative" templateColumns="repeat(5, 1fr)">
            <GridItem
              display="flex"
              flexDirection="column"
              gridColumn={['2 / span 3', '2 / span 3', '2 / span 4']}
              gridRow={['1 / span 2', '1 / span 2', '1']}
              justifyContent={['flex-end', 'flex-end', 'flex-start']}
              mt="-2%"
              zIndex={10}
            >
              <Heading
                as="h1"
                fontSize={['3rem', '4rem', '5rem', '6rem', '8rem']}
                textAlign={['center', 'center', 'left', 'center']}
              >
                ABOUT
              </Heading>
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
                <Flex flexWrap="wrap" justifyContent="space-between" margin="auto" width="100%">
                  <Button
                    my={4}
                    width={['100%', '100%', '100%', '100%', '47%']}
                    onClick={() => navigate('/contact')}
                  >
                    Contact
                  </Button>
                  <Button
                    my={4}
                    width={['100%', '100%', '100%', '100%', '47%']}
                    onClick={() => console.log('link to or download resume')}
                  >
                    Resume
                  </Button>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem gridColumn={['2 / span 3', '2 / span 3', '4 / -1']} gridRow="1 / span 2">
              <Image marginLeft={['auto', 'auto', 'auto', 'auto', 0]} mt={['', '', '', '2rem']} src={newestMe} />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Page>
  );
};

export default About;
