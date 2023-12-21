import React, { useEffect, useState } from "react";
import Container from "../Shared/Navbar/Container/Container";
import GalleryBox from "./GalleryBox";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("graduation.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <Container>
      <div>
        <div className="flex justify-center text-2xl pb-10 md:pb-0 md:text-4xl md:pt-5 relative">
          <p className="inline-block relative">
            Graduation Gallery
            <span className="absolute bottom-[-5px] left-0 right-0 h-1 gradient-container"></span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mt-10 md:mb-4">
          {gallery.map((item, index) => {
            return <GalleryBox key={index} {...item} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
