import React from "react";
import Container from "../Shared/Navbar/Container/Container";

const AllCollegeReviews = () => {
  return (
    <Container>
      <div className="flex justify-center text-4xl pt-5 relative">
        <p className="inline-block relative">
          All College Reviews
          <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
        </p>
      </div>
    </Container>
  );
};

export default AllCollegeReviews;
