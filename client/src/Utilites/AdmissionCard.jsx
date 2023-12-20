import React, { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const AdmissionCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { name, research, date, subjects, fees, _id } = item;
  //  ‘Candidate Name, Subject, Candidate Email, Candidate Phone number, address, date of birth, and image field.

  const modalRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const address = e.target.address.value;
    const info = {
      collegeName: name,
      subject,
      address,
      user_Id: _id,
      user_name: user?.displayName,
      date,
      user_email: user?.email,
      phone,
    };
    console.log(info);
    fetch("http://localhost:7000/admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          toast.success(`You have successfully submitted the form`);
        } else {
          toast.error("You already have an appoinment");
        }
      });

    modalRef.current.close();
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <div>
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="w-full py-3">
          <button
            onClick={() => modalRef.current.showModal()}
            className="px-4 info_card text-black bg-red-500 font-semibold py-3"
          >
            Book Appointment
          </button>
        </div>
        <div>
          <dialog ref={modalRef} id={`my_modal_${_id}`} className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form onSubmit={(e) => handleSubmit(e)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    name="date"
                    type="text"
                    value={date}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Collage Name</span>
                  </label>
                  <input
                    name="college"
                    type="text"
                    placeholder="Collage Name"
                    className="input input-bordered"
                    required
                    defaultValue={name}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subjects</span>
                  </label>

                  <select
                    name="subject"
                    className="select select-bordered w-full max-w-xs"
                  >
                    {subjects.map((subject, index) => {
                      return (
                        <option value={subject} key={index}>
                          {subject}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Address </span>
                  </label>
                  <input
                    name="address"
                    type="text"
                    placeholder="Your Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCard;
