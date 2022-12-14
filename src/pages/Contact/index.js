import React from 'react';
import { Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';

import Page from '../../components/Page';

const Contact = () => (
  <Page colorScheme="dark">
    <Flex
      alignItems={['', '', '', 'center']}
      direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      height="100%"
      justifyContent={['space-around', 'space-around', 'space-around', 'center']}
      minHeight={['calc(100vh - 10rem)', 'calc(100vh - 10rem)', 'calc(100vh - 10rem)', 'inherit']}
      mt={[8, 8, '0']}
      width="100%"
    >
      <Flex
        direction="column"
        flexBasis={['30%', '30%', '30%', '50%']}
        justifyContent="flex-end"
        minHeight={['', '', '', 'inherit']}
        textStyle="bodyLg"
      >
        <Text>alexa.c.stef@gmail.com</Text>
        <HStack>
          <Link className="inline-link link-sm" href="https://www.linkedin.com/in/alexastef/">LinkedIn</Link>
          <Text>/</Text>
          <Link className="inline-link link-sm" href="https://github.com/alexastef">GitHub</Link>
        </HStack>
      </Flex>
      <Flex flexBasis="50%" justifyContent={['flex-end', 'flex-end', 'flex-end', '']} textAlign="right">
        <Heading as="h1" size="4xl" width={['70%', '70%', '70%', '100%']}>
          {'I\'D '}
          <span style={{ fontFamily: 'Tenez', fontWeight: 500, fontStyle: 'italic' }}>
            LOVE
          </span>
          {' TO HEAR FROM '}
          <span style={{ fontFamily: 'Tenez', fontWeight: 500 }}>YOU</span>
        </Heading>
      </Flex>
    </Flex>
  </Page>
);

export default Contact;
