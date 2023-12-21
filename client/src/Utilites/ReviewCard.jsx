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
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row ">
              <div className="px-10">{name}</div>
              {tempStars}
            </div>
            <div>{date}</div>
          </div>
        </div>{" "}
        {/* <h2 className="card-title">Card title!</h2> */}
        <p className="pt-5">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
