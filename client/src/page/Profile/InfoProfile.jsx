import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../providers/AuthProvider";

const InfoProfile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://server-virid-nine.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  if (loading) {
    return <Loader />;
  }

  var address = info[0]?.address;
  var university = info[0]?.university;

  return (
    <div className="py-2">
      {" "}
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-1 ">
        <span className="font-bold pr-1">Email:</span> {user?.email}
      </p>
      {address && university ? (
        <div>
          <p className="py-1 ">
            {" "}
            <span className="font-bold pr-1">Address:</span>
            {address}{" "}
          </p>
          <p className="py-1 ">
            {" "}
            <span className="font-bold pr-1">University:</span>
            {university}{" "}
          </p>
        </div>
      ) : (
        <div>
          <h3>Please Add Address & University Info</h3>
        </div>
      )}
    </div>
  );
};

export default InfoProfile;
