import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './pages/Main'
import Work from './pages/Work';
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/work",
    element: <Work />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

const App = () => {
  return (
    <div className="App">
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      {/*<Router>*/}

      {/*<Routes>*/}
      {/*  <Route exact path="/" component={Main} />*/}
      {/*  <Route exact path="/work" component={Work} />*/}
      {/*</Routes>*/}
      {/*</Router>*/}
      {/*<Main />*/}
    </ChakraProvider>
    </div>
  );
}

export default App;
