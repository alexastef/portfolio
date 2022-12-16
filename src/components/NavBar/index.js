import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { Flex, Heading, HStack, VStack } from '@chakra-ui/react';

import useStore from '../../stores';

import './styles.css';

const pages = [
  {
    name: 'WORK',
    path: '/work'
  },
  {
    name: 'ABOUT',
    path: '/about'
  },
  {
    name: 'CONTACT',
    path: '/contact'
  }
];

const NavBar = () => {
  const { showNav } = useStore();
  const nodeRef = useRef();

  const defaultStyle = { opacity: 0 };

  const softFade = {
    entering: { opacity: 0 },
    entered: {
      opacity: 1,
      transition: 'opacity 0.2s ease-in'
    },
    exiting: { opacity: 0 },
    exited: { transition: 'opacity 0.2s ease-in' }
  };

  return (
    <Transition
      appear={showNav}
      in={showNav}
      nodeRef={nodeRef}
      timeout={300}
    >
      {state => (
        <Flex
          className="nav"
          color={showNav ? 'inherit' : 'transparent'}
          pb={[4, 4, 0]}
          style={{
            ...defaultStyle,
            ...softFade[state]
          }}
        >
          <VStack alignItems="flex-start" spacing={4}>
            <NavLink className="nav-brand" to="/">
              <Heading _hover={{ fontStyle: 'italic' }} size="lg">ALEXA STEF</Heading>
            </NavLink>
            <HStack spacing={12}>
              {pages.map(page => <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} key={page.path} to={page.path}>{page.name}</NavLink>)}
            </HStack>
          </VStack>
        </Flex>
      )}
    </Transition>
  );
};

export default NavBar;
