import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Navbar/Container/Container";
import MyClgCard from "../../Utilites/MyClgCard";

const MyCollege = () => {
  const [myColleges, setMyColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/admission")
      .then((res) => res.json())
      .then((data) => setMyColleges(data));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {myColleges.map((college) => {
          return <MyClgCard key={college._id} college={college} />;
        })}
      </div>
    </Container>
  );
};

export default MyCollege;
