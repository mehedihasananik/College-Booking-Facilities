import React, { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Review = ({ item }) => {
  const { user } = useContext(AuthContext);

  const modalRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;

    const info = {
      date,
      name,
      description,
      rating,
    };
    console.log(info);
    fetch("http://localhost:7000/review", {
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
          toast.success(`You have successfully added a rating`);
        } else {
          toast.error("You already have an appoinment");
        }
      });

    modalRef.current.close();
  };

  return (
    <div className="">
      <div className="card-body text-center">
        <div>
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="w-full py-3">
          <button
            onClick={() => modalRef.current.showModal()}
            className="px-4 info_card text-black bg-red-500 font-semibold py-3"
          >
            Review
          </button>
        </div>
        <div>
          <dialog ref={modalRef} id={`my_modal_`} className="modal">
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
                    type="date"
                    className="input input-bordered"
                    placeholder="Add date"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input input-bordered"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    name="description"
                    type="text"
                    className="input input-bordered"
                    placeholder="Add Description"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    name="rating"
                    type="number"
                    className="input input-bordered"
                    placeholder="Give A Rating"
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

export default Review;
