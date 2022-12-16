import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Flex, Heading } from '@chakra-ui/react';

import Page from '../../components/Page';
import useStore from '../../stores';
import { defaultStyle, slideDownTransitionStyles } from '../../theme/transitionUtil';

const ErrorPage = () => {
  const { showNav } = useStore();
  const nodeRef = useRef();

  return (
    <Page colorScheme="light">
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        minHeight="inherit"
        width="100%"
      >
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
              Page not found
            </Heading>
          )}
        </Transition>
      </Flex>
    </Page>
  );
};

export default ErrorPage;
