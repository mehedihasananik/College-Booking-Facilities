import React, { useEffect, useState } from "react";
import Container from "../Shared/Navbar/Container/Container";
import Room from "../../Utilites/Room";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    fetch("rooms.json")
      .then((response) => response.json())
      .then((data) => {
        if (category) {
          const filterRooms = data.filter((room) => room.category === category);
          setRooms(filterRooms);
        } else {
          setRooms(data);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <Container>
      {rooms && rooms.length ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 my-10">
          {rooms.map((room, index) => {
            return <Room key={index} room={room} />;
          })}
        </div>
      ) : (
        <Heading
          title="There is no data"
          subtitle="There is no data"
          center="center"
        />
      )}
    </Container>
  );
};

export default Rooms;
