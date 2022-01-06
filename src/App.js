import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Navbar
import Nav from "./components/Nav";
// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Route, Switch, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <AboutUs />
            </Route>
            <Route path="/work" exact>
              <OurWork />
            </Route>
            <Route path="/work/:id">
              <MovieDetail />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
