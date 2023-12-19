import qs from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, description }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex flex-col justify-center items-center w-20 gap-2 cursor-pointer"
      >
        <Icon />
        <h3>{label}</h3>
      </div>
    </div>
  );
};

export default CategoryBox;
