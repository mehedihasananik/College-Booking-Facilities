import React, { useEffect, useState } from "react";
import Container from "../Shared/Navbar/Container/Container";
import ReviewCard from "../../Utilites/ReviewCard";

const AllCollegeReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <div className="flex justify-center text-4xl pt-5 relative">
        <p className="inline-block relative">
          All College Reviews
          <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
        {reviews.map((review) => {
          return <ReviewCard key={review._id} review={review} />;
        })}
      </div>
    </Container>
  );
};

export default AllCollegeReviews;
