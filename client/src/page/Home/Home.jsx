import React from "react";

import Colleges from "../../components/Colleges/Colleges";
import Gallery from "../../components/Gallery/Gallery";
import Research from "../../components/Research/Research";

const Home = () => {
  return (
    <div>
      <Colleges />
      <Gallery />
      <Research />
    </div>
  );
};

export default Home;
