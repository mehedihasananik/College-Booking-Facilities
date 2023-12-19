import React from "react";
import Container from "../../components/Shared/Navbar/Container/Container";

const ErrorPage = () => {
  return (
    <Container>
      <div className="">
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <h3 className="text-5xl font-bold text-red-600">No Page Found ...</h3>
          <p className="text-3xl font-bold text-green-600 pt-8">Go Back</p>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
