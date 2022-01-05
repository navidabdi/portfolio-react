import react from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Navbar
import Nav from "./components/Nav";
// Import Pages
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
