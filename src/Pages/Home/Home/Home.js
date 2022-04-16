import React from "react";
import Services from "../Services/Services";
import Exparts from "../Exparts/Exparts";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services />
      <Exparts />
    </div>
  );
};

export default Home;
