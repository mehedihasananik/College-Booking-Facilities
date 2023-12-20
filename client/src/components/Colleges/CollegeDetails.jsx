import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../Shared/Navbar/Container/Container";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState({});

  useEffect(() => {
    fetch(`http://localhost:7000/college/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);

  const { name, research, image, dates, events, sports, _id } = college;

  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-full h-100">
          <img className="w-[100%] md:h-[600px]" src={image} alt="Room" />
        </div>
        <div className="font-semibold text-2xl tex-center">
          <p>{name}</p>
        </div>
        <div className="font-light text-neutral-500">
          <span className="text-lg font-bold text-neutral-500">
            {" "}
            Admission Date:
          </span>{" "}
          {dates}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            <span className="text-lg font-bold text-neutral-500">
              Research History:
            </span>{" "}
            {research}
          </div>
        </div>
        <div className="font-light flex gap-x-2">
          <span className="text-lg font-bold text-neutral-500"> Events:</span>
          {events?.map((item) => {
            return <p className="text-lg font-medium"> {item},</p>;
          })}
        </div>
        <div className="font-light flex gap-x-2">
          <span className="text-lg font-bold text-neutral-500"> Sports:</span>
          {sports?.map((item) => {
            return <p className="text-lg font-medium">{item},</p>;
          })}
        </div>
        <div className="text-left pt-5"></div>
      </div>
    </Container>
  );
};

export default CollegeDetails;
