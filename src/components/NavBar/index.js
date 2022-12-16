import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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

  return (
    <Flex className="nav" color={showNav ? 'inherit' : 'transparent'} pb={[4, 4, 0]}>
      <VStack alignItems="flex-start" spacing={4}>
        <NavLink className="nav-brand" to="/">
          <Heading _hover={{ fontStyle: 'italic' }} size="lg">ALEXA STEF</Heading>
        </NavLink>
        <HStack spacing={12}>
          {pages.map(page => <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} key={page.path} to={page.path}>{page.name}</NavLink>)}
        </HStack>
      </VStack>
    </Flex>
  );
};

export default NavBar;
