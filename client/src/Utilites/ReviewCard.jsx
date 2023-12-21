import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ReviewCard = ({ review }) => {
  const { date, name, description, rating: stars } = review;

  const tempStars = Array.from({ length: 5 }, (_, index) => (
    <span className="text-yellow-500" key={index}>
      {index < stars ? <BsStarFill /> : ""}
    </span>
  ));
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex gap-4">
          <div className="avatar flex gap-3 items-center">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://i.pinimg.com/originals/55/0f/49/550f49a459548599a5a4ea1c67fc0244.jpg" />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-center items-center ">
              <div className="px-10">{name}</div>
              {tempStars}
            </div>
            <div className="px-10">{date}</div>
          </div>
        </div>{" "}
        {/* <h2 className="card-title">Card title!</h2> */}
        <p className="pt-5">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
