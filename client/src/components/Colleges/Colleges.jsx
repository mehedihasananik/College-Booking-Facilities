import React, { useEffect, useState } from "react";
import Container from "../Shared/Navbar/Container/Container";
import CollegeCard from "./CollegeCard";

const Colleges = ({ filteredColleges }) => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://server-virid-nine.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      {filteredColleges.length === 0 ? (
        <div className="text-center font-bold text-red-500 text-3xl py-10">
          <h3>No Data Found</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          {filteredColleges.slice(0, 3).map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Colleges;
