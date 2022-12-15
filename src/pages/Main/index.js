import React from 'react';
import { Heading, Link, Text, VStack } from '@chakra-ui/react';

import Page from '../../components/Page';

import '../styles.css';

const Main = () => (
  <Page colorScheme="dark">
    <VStack
      alignItems="flex-start"
      fontSize="xl"
      height="100%"
      justifyContent={['flex-end', 'flex-end', 'center']}
      minHeight="inherit"
      spacing={8}
    >
      <Heading as="h1" fontFamily="Tenez" fontSize="8rem" lineHeight="0.75" pb={4} size="4xl">
        Hello there
      </Heading>
      <Heading fontSize="2rem" fontWeight="300">
        I&apos;m Alexa, a product-focused Software Engineer based in San Diego. From design to deployment, I love every step in the process
        of bringing ideas to life.
      </Heading>
      <Text textStyle={['accentH5', 'accentH5', 'accentH3']}>
        Currently developing at
        {' '}
        <Link className="inline-link" href="https://www.pinsadvantage.com/">PINS</Link>
      </Text>
    </VStack>
  </Page>
);

export default Main;
