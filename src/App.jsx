import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./view/landingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
};

export default App;
