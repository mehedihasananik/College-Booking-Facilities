import React from "react";

const MyClgCard = ({ college, index }) => {
  const {
    address,
    collegeName,
    date,
    phone,
    subject,
    user_Id,
    user_email,
    user_name,
  } = college;
  return (
    <tr>
      <td>{index + 1} </td>
      <td>{collegeName}</td>
      <td>{subject}</td>
      <td>{date}</td>
      <td>{user_email}</td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default MyClgCard;
