import { useEffect, useState } from "react";
import Netflix from "./assets/img/Netflix_Logo_PMS.png";
import "./App.css";
import Section from "./assets/components/Section";

const App = () => {
  return (
    <>
      <header>
        <img src={Netflix} alt="logo Netflix" />
      </header>
      <Section />
    </>
  );
};

export default App;
