import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./view/landingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <LandingPage />
      <Footer />
    </Provider>
  );
};

export default App;
