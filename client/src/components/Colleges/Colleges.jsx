import React, { useEffect, useState } from "react";
import Container from "../Shared/Navbar/Container/Container";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {colleges.slice(0, 3).map((college) => {
          return <CollegeCard key={college._id} college={college} />;
        })}
      </div>
    </Container>
  );
};

export default Colleges;
