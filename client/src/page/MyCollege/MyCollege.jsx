import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Shared/Navbar/Container/Container";
import MyClgCard from "../../Utilites/MyClgCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [myColleges, setMyColleges] = useState([]);

  useEffect(() => {
    fetch(`https://server-virid-nine.vercel.app/admission/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyColleges(data));
  }, []);

  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>College Name</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Details</th>
              <th>Add A review</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myColleges.map((college, index) => {
              return (
                <MyClgCard key={college._id} college={college} index={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyCollege;
