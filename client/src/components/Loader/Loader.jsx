import React from "react";
import Container from "../Shared/Navbar/Container/Container";

const Loader = () => {
  return (
    <Container>
      <div className="text-center">
        <span className=" w-28 loading loading-spinner"></span>
      </div>
    </Container>
  );
};

export default Loader;
