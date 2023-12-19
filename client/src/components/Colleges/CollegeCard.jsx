import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const { name, research, image, dates, events, sports, _id } = college;
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
      aspect-square 
      w-full 
      relative 
      overflow-hidden 
      rounded-xl
    "
        >
          <img
            className="
        object-cover 
        h-full 
        w-full 
        group-hover:scale-110 
        transition
      "
            src={image}
            alt="Room"
          />
          <div
            className="
      absolute
      top-3
      right-3
    "
          ></div>
        </div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="font-light text-neutral-500">
          Admission Date: {dates}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">Research History: {research}</div>
        </div>
        <div className="font-light flex gap-x-2">
          <span className="font-semibold"> Events:</span>
          {events.slice(0, 2).map((item) => {
            return <p> {item}</p>;
          })}
        </div>
        <div className="font-light flex gap-x-2">
          <span className="font-semibold"> Sports:</span>
          {sports.slice(0, 2).map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="text-left pt-5">
          <Link
            to={`/college/${_id}`}
            className="bg-[#FF385C] text-white  px-5 py-2 rounded-md"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
