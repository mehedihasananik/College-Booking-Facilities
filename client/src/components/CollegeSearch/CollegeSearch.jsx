import React, { useState } from "react";
import Container from "../Shared/Navbar/Container/Container";

const CollegeSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Update the search results as the user types
  };
  return (
    <Container>
      <div>
        <input
          className="border-2 px-4 py-2 mt-10 "
          type="text"
          placeholder="Search Colleges..."
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default CollegeSearch;
