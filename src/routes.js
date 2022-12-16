import React, { createRef } from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Work from './pages/Work';

export const routes = [
  {
    path: '/',
    element: <Main />,
    nodeRef: createRef()
  },
  {
    path: '/work',
    element: <Work />,
    nodeRef: createRef()
  },
  {
    path: '/about',
    element: <About />,
    nodeRef: createRef()
  },
  {
    path: '/contact',
    element: <Contact />,
    nodeRef: createRef()
  }
];
