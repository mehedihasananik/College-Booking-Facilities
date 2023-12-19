import React from "react";
import Container from "../Shared/Navbar/Container/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between items-center pt-6 overflow-x-auto">
        {categories.map((item) => {
          return <CategoryBox key={item.label} {...item} />;
        })}
      </div>
    </Container>
  );
};

export default Categories;
