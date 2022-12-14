import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Root from './components/Root';
import ErrorPage from './pages/Error';
import { routes } from './routes';
import theme from './theme';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
