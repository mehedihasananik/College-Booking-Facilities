import React, { useEffect, useState } from "react";
import ResearchCard from "../../Utilites/ResearchCard";
import Container from "../Shared/Navbar/Container/Container";

const Research = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    fetch("research.json")
      .then((res) => res.json())
      .then((data) => setResearch(data));
  }, []);

  return (
    <Container>
      <div className="flex justify-center text-4xl pt-5 relative">
        <p className="inline-block relative">
          Research and Analysis
          <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {research.map((item, index) => {
          return <ResearchCard key={index} item={item} />;
        })}
      </div>
    </Container>
  );
};

export default Research;
