import React, { useEffect, useState } from "react";
import AdmissionCard from "../../Utilites/AdmissionCard";
import Container from "../../components/Shared/Navbar/Container/Container";

const Admission = () => {
  const [admission, setAdmission] = useState([]);

  useEffect(() => {
    fetch("https://server-virid-nine.vercel.app/admissionColleges")
      .then((res) => res.json())
      .then((data) => setAdmission(data));
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
        {admission.map((item) => {
          return <AdmissionCard key={item._id} item={item} />;
        })}
      </div>
    </Container>
  );
};

export default Admission;
