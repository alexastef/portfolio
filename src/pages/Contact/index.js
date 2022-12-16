import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';

import Page from '../../components/Page';
import useStore from '../../stores';
import { defaultStyle, slideDownTransitionStyles, slideUpTransitionStyles } from '../../theme/transitionUtil';

const Contact = () => {
  const { showNav } = useStore();
  const nodeRef = useRef();

  return (
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
        <Flex flexBasis="50%" justifyContent={['flex-end', 'flex-end', 'flex-end', '']} overflowY="hidden" textAlign="right">
          <Transition
            appear={showNav}
            in={showNav}
            nodeRef={nodeRef}
            timeout={500}
          >
            {state => (
              <Heading
                as="h1"
                size="4xl"
                style={{
                  ...defaultStyle,
                  ...slideDownTransitionStyles('100')[state]
                }}
                width={['70%', '70%', '70%', '100%']}
              >
                {'I\'D '}
                <span style={{
                  fontFamily: 'Tenez',
                  fontWeight: 500,
                  fontStyle: 'italic'
                }}
                >
                  LOVE
                </span>
                {' TO HEAR FROM '}
                <span style={{
                  fontFamily: 'Tenez',
                  fontWeight: 500
                }}
                >
                  YOU
                </span>
              </Heading>
            )}
          </Transition>
        </Flex>
      </Flex>
    </Page>
  );
};

export default Contact;
