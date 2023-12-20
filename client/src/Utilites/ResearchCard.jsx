import React from "react";
import { Link } from "react-router-dom";

const ResearchCard = ({ item }) => {
  const { title, link, publicationDate, keywords, conference, authors } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center space-x-1">
          <span className="text-md font-bold">KeyWords:</span>
          {keywords?.map((item, index) => {
            return (
              <span className="text-sm" key={index}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {index !== keywords.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div className="flex  space-x-1">
          <span className="text-md font-bold">Researched By:</span>
          {authors?.map((item, index) => {
            return (
              <span className="text-sm " key={index}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                {index !== keywords.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div className="card-actions justify-end">
          <Link target="_" to={link} className="btn btn-primary">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
