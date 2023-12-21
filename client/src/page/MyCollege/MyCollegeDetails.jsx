import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Navbar/Container/Container";
import { useParams } from "react-router-dom";

const MyCollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState({});

  useEffect(() => {
    fetch(`https://server-virid-nine.vercel.app/admissions/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);
  console.log(college);

  const { collegeName, date, phone, subject, user_email, user_name } = college;
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-2 py-10">
        <div className="font-semibold text-2xl tex-center">
          <p>{collegeName}</p>
        </div>
        <div className="font-light text-neutral-500">
          <span className="text-lg font-bold text-neutral-500">
            {" "}
            Admission Date:
          </span>{" "}
          {date}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="font-semibold">
            <span className="text-md md:text-lg font-bold text-neutral-500">
              Subject:
            </span>{" "}
            {subject}
          </div>
          <div className="font-semibold">
            <span className="text-md md:text-lg font-bold text-neutral-500">
              Phone Number:
            </span>{" "}
            {phone}
          </div>
          <div className="font-semibold">
            <span className="text-md md:text-lg font-bold text-neutral-500 no">
              Student Email:
            </span>{" "}
            {user_email}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyCollegeDetails;
