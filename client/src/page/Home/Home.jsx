import React, { useEffect, useState } from "react";

import Colleges from "../../components/Colleges/Colleges";
import Gallery from "../../components/Gallery/Gallery";
import Research from "../../components/Research/Research";
import CollegeSearch from "../../components/CollegeSearch/CollegeSearch";
import AllCollegeReviews from "../../components/AllCollegeReviews/AllCollegeReviews";

const Home = () => {
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);

  useEffect(() => {
    fetch("https://server-virid-nine.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setFilteredColleges(data); // Initialize filteredColleges with all colleges
      });
  }, []);

  const handleSearch = (searchQuery) => {
    // Filter colleges based on the search query
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredColleges(filtered);
  };
  return (
    <div>
      <CollegeSearch onSearch={handleSearch} />
      <Colleges filteredColleges={filteredColleges} />
      <Gallery />
      <Research />
      <AllCollegeReviews />
    </div>
  );
};

export default Home;
