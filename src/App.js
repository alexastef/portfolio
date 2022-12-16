import React, { createRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Root from './components/Root';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Work from './pages/Work';
import theme from './theme';

import './App.css';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: routes.map(route => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element
    }))
  }
]);

const App = () => (

  <div className="App">
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </div>
);

export default App;
