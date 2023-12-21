import React from "react";
import { Link } from "react-router-dom";
import Review from "../components/Review/Review";

const MyClgCard = ({ college, index }) => {
  const {
    address,
    collegeName,
    date,
    phone,
    subject,

    user_email,
    user_name,
    _id,
    user_Id,
  } = college;
  console.log(college);
  return (
    <tr>
      <td>{index + 1} </td>
      <td>{collegeName}</td>
      <td>{subject}</td>
      <td>{date}</td>
      <td>{user_email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <Link
          to={`/myCollegeDetails/${_id}`}
          className="bg-red-500 font-bold text-white  px-5 py-2 rounded-md"
        >
          Details
        </Link>
      </td>
      <td>
        <Review />
      </td>
    </tr>
  );
};

export default MyClgCard;
