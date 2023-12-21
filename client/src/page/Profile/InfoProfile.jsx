import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const InfoProfile = ({ user, loading }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  if (loading) {
    return <Loader />;
  }

  var address = info[0]?.address;
  var university = info[0]?.university;

  console.log(address);
  console.log(info);
  return (
    <div className="py-2">
      {" "}
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-1 ">
        <span className="font-bold pr-2">Email:</span> {user?.email}
      </p>
      <p className="py-1 ">
        {" "}
        <span className="font-bold pr-2">Address:</span>
        {address}{" "}
      </p>
      <p className="py-1 ">
        {" "}
        <span className="font-bold pr-2">University:</span>
        {university}{" "}
      </p>
    </div>
  );
};

export default InfoProfile;
