import React from 'react';
import { Heading, Link, Text, VStack } from '@chakra-ui/react';

import Page from '../../components/Page';

import '../styles.css';

const Main = () => (
  <Page colorScheme="dark">
    <VStack alignItems="flex-start" fontSize="xl" height="100%" justifyContent="center" minHeight="inherit" spacing={8}>
      <Heading as="h1" fontFamily="Tenez" fontSize="8rem" size="4xl">
        Hello there
        {' '}
        {/* <span style={{ fontFamily: 'Tenez', fontWeight: 500, fontStyle: 'italic' }}>there</span> */}
        {/* <span style={{ fontFamily: 'Tenez', fontWeight: 500 }}></span> */}
        {/* ELLO THE */}
        {/* <span style={{ fontFamily: 'Tenez', fontWeight: 500 }}>R</span> */}
        {/* E */}
        {/* {' '} */}
        {/* <span style={{ fontFamily: 'Tenez', fontWeight: 500 }}>THERE</span> */}
      </Heading>
      <Heading fontWeight="300" size="xl" textStyle="h2">
        I&apos;m Alexa, a product-focused Software Engineer based in San Diego. From design to deployment, I love every step in the process
        of bringing ideas to life.
      </Heading>
      <Text textStyle="accentH3">
        Currently developing at
        {' '}
        <Link className="inline-link" href="https://www.pinsadvantage.com/">PINS</Link>
      </Text>
    </VStack>
  </Page>
);

export default Main;
