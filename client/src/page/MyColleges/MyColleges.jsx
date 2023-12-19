import React, { useEffect, useState } from "react";
import CollegeCard from "../../components/Colleges/CollegeCard";
import Container from "../../components/Shared/Navbar/Container/Container";

const MyColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {colleges.map((college) => {
          return <CollegeCard key={college._id} college={college} />;
        })}
      </div>
    </Container>
  );
};

export default MyColleges;
