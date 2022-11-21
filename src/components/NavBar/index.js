import React from 'react';
import {Flex, HStack, VStack, Text, Heading} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import './styles.css'

// TODO: add mobile nav

const NavBar = () => {
    return (
        <Flex pb={[4, 4, 0]}>
            <VStack alignItems="flex-start" spacing={4}>
                <NavLink className="nav-brand" to="/">
                    <Heading size="lg" _hover={{ fontStyle: 'italic' }}>ALEXA STEF</Heading>
                </NavLink>
                <HStack spacing={12}>
                    <NavLink to="/work" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>WORK</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>ABOUT</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>CONTACT</NavLink>
                </HStack>
            </VStack>
        </Flex>
    )
}

export default NavBar;
