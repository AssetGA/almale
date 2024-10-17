import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Values from "./Values";
import History from "./History";
import Mission from "./Mission";
import Catalog from "./Catalog";
import Adventages from "./Adventages.js";
import Opinion from "./Opinion";
import ConnectionForm from "./ConnectionForm";
import Production from "./Production";

const Main = () => {
  return (
    <>
      <Head />
      <Values />
      <History />
      <Mission />
      <Production />
      {/* <Catalog /> */}
      <Adventages />
      <Opinion />
      <ConnectionForm />
    </>
  );
};

export default Main;
